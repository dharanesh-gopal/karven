import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Security: Add a secret token to verify webhook requests
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-token-here'

export async function POST(request: NextRequest) {
  try {
    // Verify the secret token
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret token' },
        { status: 401 }
      )
    }

    // Get the body to understand what was updated
    const body = await request.json()
    const { _type, slug } = body

    console.log('Revalidating:', { _type, slug })

    // Revalidate based on content type
    switch (_type) {
      case 'service':
        revalidatePath('/services')
        if (slug?.current) {
          revalidatePath(`/services/${slug.current}`)
        }
        break

      case 'training':
        revalidatePath('/training')
        if (slug?.current) {
          revalidatePath(`/training/courses/${slug.current}`)
        }
        break

      case 'heroSection':
      case 'featuresSection':
      case 'testimonialsSection':
        // Revalidate homepage for these global sections
        revalidatePath('/')
        break

      case 'post':
        revalidatePath('/blog')
        if (slug?.current) {
          revalidatePath(`/blog/${slug.current}`)
        }
        break

      case 'career':
        revalidatePath('/careers')
        if (slug?.current) {
          revalidatePath(`/careers/${slug.current}`)
        }
        break

      default:
        // If we don't know the type, revalidate everything
        revalidatePath('/', 'layout')
        break
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type: _type,
    })
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    )
  }
}

// GET endpoint for manual testing
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret token' },
      { status: 401 }
    )
  }

  // Revalidate all main pages
  revalidatePath('/', 'layout')
  
  return NextResponse.json({
    message: 'Revalidated all pages',
    now: Date.now(),
  })
}
