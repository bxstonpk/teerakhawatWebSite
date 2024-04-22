import React from "react";
import Nav from "../component/Nav";
import About from "../views/about";
import Footer from "../component/footer";

function AboutLayout() {
  return (
    changeDocumentTitle(),
    <>
      <Nav></Nav>
      <About></About>
      <Footer></Footer>
    </>
  );
}

var documentTitle = "About - Teerakhawat Can Company limited ผู้ผลิต จำหน่าย แกลลอน ปี๊บ บรรจุภัณฑ์ แกลลอนเหลี่ยมฝาเกลียว แกลลอนเหลี่ยมฝาป๊อบอัพ ปี๊บทอง ปี๊บเหลียมฝาเกลียว";

function changeDocumentTitle() {
  if (document.title !== documentTitle) {
    document.title = documentTitle;
  }
}

export default AboutLayout;
