import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'rdpt4cmt',
    dataset:'production',
    useCdn:true,
    apiVersion:'2021-10-21'
})

export const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)