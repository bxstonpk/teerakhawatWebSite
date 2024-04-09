import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/footer'
import ProductCard from '../views/product'

function ProductLayout() {
  return (
    <>
        <Nav></Nav>
        <ProductCard></ProductCard>
        <Footer></Footer>
    </>
  )
}

export default ProductLayout