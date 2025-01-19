import { z } from 'zod'

import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug?: string } },
) {
  const slug = z.string().parse(params?.slug)
  if(!slug) {
    return Response.json({ message: 'Slug not found.' }, { status: 400 })
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  const product = data.products.find((product) => product.slug === slug)
  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}