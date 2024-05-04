import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/footer";
import Content from "../views/content";
import BannerCookie from "../component/bannerCookie";

import "../App.css";

function MainLayout() {
  return (
    changeDocumentTitle(),
    <section id="main-Layout">
      <div id="Content-MainLayout">
        <Nav />
        <Content />
        <Footer />
      </div>
      <div id="Cookie-MainLayout">
        <BannerCookie/>
      </div>
    </section>
  );
}

var documentTitle = "Home - Teerakhawat Can Company limited ผู้ผลิต จำหน่าย แกลลอน ปี๊บ บรรจุภัณฑ์ แกลลอนเหลี่ยมฝาเกลียว แกลลอนเหลี่ยมฝาป๊อบอัพ ปี๊บทอง ปี๊บเหลียมฝาเกลียว";

function changeDocumentTitle() {
  if (document.title !== documentTitle) {
    document.title = documentTitle;
  }
}

export default MainLayout;
