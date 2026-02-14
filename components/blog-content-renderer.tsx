"use client"

import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Info, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  Quote as QuoteIcon,
  ChevronDown,
  ExternalLink
} from 'lucide-react'
import { useState } from 'react'

// Button Block Component
function ButtonBlock({ value }: any) {
  const { text, url, variant = 'primary', size = 'md', openInNewTab } = value
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <div className="my-6">
      <Link 
        href={url} 
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : ''}
        className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-all ${variantClasses[variant as keyof typeof variantClasses]} ${sizeClasses[size as keyof typeof sizeClasses]}`}
      >
        {text}
        {openInNewTab && <ExternalLink className="h-4 w-4" />}
      </Link>
    </div>
  )
}

// Badge Block Component
function BadgeBlock({ value }: any) {
  const { text, variant = 'default' } = value
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant as keyof typeof variantClasses]}`}>
      {text}
    </span>
  )
}

// Callout Block Component
function CalloutBlock({ value }: any) {
  const { title, content, type = 'info' } = value
  
  const typeConfig = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', icon: Info },
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900', icon: CheckCircle2 },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900', icon: AlertTriangle },
    error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', icon: XCircle },
    note: { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-900', icon: Info },
  }

  const config = typeConfig[type as keyof typeof typeConfig]
  const Icon = config.icon

  return (
    <div className={`my-6 p-6 rounded-lg border-l-4 ${config.bg} ${config.border}`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 mt-0.5 ${config.text}`} />
        <div className="flex-1">
          {title && <h4 className={`font-semibold mb-2 ${config.text}`}>{title}</h4>}
          <p className={`text-sm leading-relaxed ${config.text}`}>{content}</p>
        </div>
      </div>
    </div>
  )
}

// Code Block Component
function CodeBlock({ value }: any) {
  const { code, language = 'javascript', filename } = value

  return (
    <div className="my-6">
      {filename && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg text-sm font-mono">
          {filename}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className={`${filename ? 'rounded-t-none' : 'rounded-lg'} !my-0`}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

// Alert Block Component
function AlertBlock({ value }: any) {
  const { title, message, type = 'info', dismissible } = value
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const typeConfig = {
    info: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-800' },
    success: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-800' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-800' },
    error: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-800' },
  }

  const config = typeConfig[type as keyof typeof typeConfig]

  return (
    <div className={`my-6 p-4 rounded-lg border ${config.bg} ${config.border}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h5 className={`font-semibold mb-1 ${config.text}`}>{title}</h5>
          <p className={`text-sm ${config.text}`}>{message}</p>
        </div>
        {dismissible && (
          <button onClick={() => setDismissed(true)} className={`ml-4 ${config.text} hover:opacity-75`}>
            <XCircle className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}

// Quote Block Component
function QuoteBlock({ value }: any) {
  const { quote, author, role } = value

  return (
    <div className="my-8 relative">
      <QuoteIcon className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
      <blockquote className="pl-8 pr-4 py-4 border-l-4 border-primary bg-gray-50 rounded-r-lg">
        <p className="text-lg italic text-gray-700 mb-3">{quote}</p>
        {author && (
          <footer className="text-sm text-gray-600">
            <span className="font-semibold">{author}</span>
            {role && <span className="text-gray-500"> — {role}</span>}
          </footer>
        )}
      </blockquote>
    </div>
  )
}

// Stats Block Component
function StatsBlock({ value }: any) {
  const { stats } = value

  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat: any, index: number) => (
        <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
          {stat.description && <div className="text-xs text-gray-500">{stat.description}</div>}
        </div>
      ))}
    </div>
  )
}

// Video Block Component
function VideoBlock({ value }: any) {
  const { url, caption } = value

  return (
    <div className="my-8">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        {url.includes('youtube') || url.includes('youtu.be') ? (
          <iframe
            src={url.replace('watch?v=', 'embed/')}
            className="w-full h-full"
            allowFullScreen
          />
        ) : (
          <video src={url} controls className="w-full h-full" />
        )}
      </div>
      {caption && <p className="text-sm text-gray-600 mt-2 text-center">{caption}</p>}
    </div>
  )
}

// Divider Block Component
function DividerBlock({ value }: any) {
  const { style = 'solid', spacing = 'md' } = value
  
  const spacingClasses = {
    sm: 'my-4',
    md: 'my-8',
    lg: 'my-12',
  }

  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  }

  return (
    <hr className={`border-gray-300 ${styleClasses[style as keyof typeof styleClasses]} ${spacingClasses[spacing as keyof typeof spacingClasses]}`} />
  )
}

// Accordion Block Component
function AccordionBlock({ value }: any) {
  const { items } = value
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="my-6 space-y-2">
      {items.map((item: any, index: number) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Custom components for PortableText
export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog image'}
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">{value.caption}</p>
          )}
        </div>
      )
    },
    buttonBlock: ButtonBlock,
    badgeBlock: BadgeBlock,
    calloutBlock: CalloutBlock,
    codeBlock: CodeBlock,
    alertBlock: AlertBlock,
    quoteBlock: QuoteBlock,
    statsBlock: StatsBlock,
    videoBlock: VideoBlock,
    dividerBlock: DividerBlock,
    accordionBlock: AccordionBlock,
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-gray-600">
        <div>{children}</div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }) => {
      const target = value?.openInNewTab ? '_blank' : '_self'
      const rel = value?.openInNewTab ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          {children}
        </a>
      )
    },
    internalLink: ({ value, children }) => {
      // Handle internal links to other blog posts or pages
      return (
        <Link
          href={`/blog/${value?.reference?.slug?.current || ''}`}
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          {children}
        </Link>
      )
    },
  },
}

interface BlogContentRendererProps {
  content: any[]
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}
