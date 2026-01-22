import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

/**
 * Generate optimized image URL from Sanity image
 * 
 * @example
 * // Basic usage
 * <img src={urlFor(image).url()} alt="..." />
 * 
 * // With optimization
 * <img src={urlFor(image)
 *   .width(800)
 *   .height(600)
 *   .quality(90)
 *   .format('webp')
 *   .url()} 
 *   alt="..." 
 * />
 */
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

/**
 * Common image size presets
 */
export const imagePresets = {
  thumbnail: (source: SanityImageSource) =>
    urlFor(source).width(300).height(300).quality(80).format('webp').url(),
  
  card: (source: SanityImageSource) =>
    urlFor(source).width(600).height(400).quality(85).format('webp').url(),
  
  hero: (source: SanityImageSource) =>
    urlFor(source).width(1920).height(1080).quality(90).format('webp').url(),
  
  og: (source: SanityImageSource) =>
    urlFor(source).width(1200).height(630).quality(90).format('jpg').url(),
}

