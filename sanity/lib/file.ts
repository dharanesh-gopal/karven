import { dataset, projectId } from '../env'

/**
 * Generate file URL from Sanity file asset
 * Works for videos, PDFs, and other file types
 * 
 * @example
 * // Basic usage
 * <video src={getFileUrl(videoAsset)} />
 * 
 * // With asset reference
 * <video src={getFileUrl(video.asset)} />
 */
export const getFileUrl = (source: any): string => {
    if (!source) return ''

    // If it's already a URL string, return it
    if (typeof source === 'string' && source.startsWith('http')) {
        return source
    }

    // If it has a url property, use it
    if (source.url) {
        return source.url
    }

    // If it's a reference object with _ref
    if (source._ref) {
        const [, id, extension] = source._ref.split('-')
        return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
    }

    // If it's an asset object with _id
    if (source._id) {
        const [, id, extension] = source._id.split('-')
        return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
    }

    return ''
}
