import { createClient, groq } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: false, // Set to true for production
})

// Function to fetch all products from Sanity
export async function getProducts() {
  return await client.fetch(
    groq`*[_type == "product"]{
      _id,
      title,
      description,
      price,
      stock,
      "imageUrl": image.asset->url
    }`
  )
}
