import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/footer'
import Content from '../views/content'

import '../App.css'

function MainLayout() {
  return <section id='main-Layout'>
    <Nav></Nav>
    <Content></Content>
    <Footer></Footer>
  </section>
}

export default MainLayout