"use server"

import { client } from "@/sanity/lib/client"

// Product Types
export interface Product {
  _id: string
  title: string
  description: string
  price: number
  productImage: string
  isNew: boolean
  discountPercentage: number
  tags: string[]
}

// Blog Types
export interface Blog {
  blogDate: string
  blogUser: string
  blogTitle: string
  blogDescription: string
  blogIcon: string
  blogImage: string
}

export interface BlogCategory {
  categoryNumber: number
  categoryName: string
}

export interface RelatedPost {
  relatedPostDate: string
  relatedPostTitle: string
  relatedPostImage: string
}

// Product Fetching Functions
export async function fetchProducts(): Promise<Product[]> {
  const res = await client.fetch(`
    *[_type=='product'][]{
      _id,
      title,
      description,
      price,
      'productImage': productImage.asset->url,
      isNew,
      discountPercentage,
      tags
    }
  `)
  return res
}

// export async function fetchShopProducts(search?: string): Promise<Product[]> {
//   let query = `*[_type=='product'`

//   if (search) {
//     query += ` && title match '${search}*'`
//   }

//   query += `]{
//     _id,
//     title,
//     description,
//     price,
//     'productImage': productImage.asset->url,
//     isNew,
//     discountPercentage,
//     tags
//   }`

//   const res: Product[] = await client.fetch(query)
//   return res
// }

// Blog Fetching Functions// Blog Fetching Functions
export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  const query = `
    *[_type == 'blogPage'][0].sections[_type == 'category'].categorySection[] {
      categoryNumber,
      categoryName
    }
  `
  return await client.fetch(query)
}

export async function fetchRelatedPosts(): Promise<RelatedPost[]> {
  const query = `
    *[_type == 'blogPage'][0].sections[_type == 'relatedPost'].relatedPostMain[] {
      relatedPostDate,
      relatedPostTitle,
      'relatedPostImage': relatedPostImage.asset->url
    }
  `
  return await client.fetch(query)
}

export async function fetchBlogs(): Promise<Blog[]> {
  const query = `
   *[_type == 'blogPage'][0].sections[_type == 'blogMain'].blog[] {
      blogDate,
      blogUser,
      blogTitle,
      blogDescription,
      blogIcon,
      "blogImage": blogImage.asset->url
    } `
  return await client.fetch(query)
}