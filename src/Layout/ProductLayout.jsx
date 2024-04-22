import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/footer";
import ProductCard from "../views/product";

function ProductLayout() {
  return (
    changeDocumentTitle(),
    (
      <>
        <Nav></Nav>
        <ProductCard></ProductCard>
        <Footer></Footer>
      </>
    )
  );
}

var documentTitle =
  "Product - Teerakhawat Can Company limited ผู้ผลิต จำหน่าย แกลลอน ปี๊บ บรรจุภัณฑ์ แกลลอนเหลี่ยมฝาเกลียว แกลลอนเหลี่ยมฝาป๊อบอัพ ปี๊บทอง ปี๊บเหลียมฝาเกลียว";

function changeDocumentTitle() {
  if (document.title !== documentTitle) {
    document.title = documentTitle;
  }
}

export default ProductLayout;
