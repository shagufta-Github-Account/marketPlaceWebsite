import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'

import { comment } from './comment/comment'

import { mainBox } from './pc-section/mainBox'
import { pC } from './pc-section/pc'
import { relatedProduct } from './relatedProduct-section/relatedProduct'
import { relatedProductSection } from './relatedProduct-section/relatedProductSection'

import { blogPage } from './blogPage-sections/blogPage'
import { blogMain } from './blogPage-sections/blogMain'
import { category } from './blogPage-sections/category'
import { relatedPost } from './blogPage-sections/relatedPost'
import { landingPage } from './landingPage-sections/landingPage'
import { hero } from './landingPage-sections/hero'
import { ourProducts } from './landingPage-sections/ourProducts'
import { userSchema } from './user'
import { browseSection } from './landingPage-sections/browseSection'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPage,browseSection,blogMain,category,relatedPost,product,comment,landingPage,hero,ourProducts,mainBox,pC,relatedProduct,relatedProductSection,userSchema],
}