import React from "react";
import Nav from "../component/Nav";
import Contact from "../views/contact";
import Footer from "../component/footer";

function ContactLayout() {
  return (
    changeDocumentTitle(),
    (
      <>
        <Nav></Nav>
        <Contact></Contact>
        <Footer></Footer>
      </>
    )
  );
}

var documentTitle =
  "Contact - Teerakhawat Can Company limited ผู้ผลิต จำหน่าย แกลลอน ปี๊บ บรรจุภัณฑ์ แกลลอนเหลี่ยมฝาเกลียว แกลลอนเหลี่ยมฝาป๊อบอัพ ปี๊บทอง ปี๊บเหลียมฝาเกลียว";

function changeDocumentTitle() {
  if (document.title !== documentTitle) {
    document.title = documentTitle;
  }
}

export default ContactLayout;
