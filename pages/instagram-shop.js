import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const InstagramShop = (props) => {
  return (
    <>
      <div className="instagram-shop-container">
        <Head>
          <title>instagram-shop - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="instagram-shop - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db3eb164-debe-4ab3-9f10-ac025b773942/73f729d7-91dd-4017-818e-368aee5329a4?org_if_sml=1"
          />
        </Head>
        <section className="instagram-shop-hero">
          <div className="instagram-shop-menu">
            <div id="mobile-menu" className="instagram-shop-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/startpee-1200w.png"
                className="instagram-shop-logo"
              />
              <div className="instagram-shop-links">
                <span className="instagram-shop-text">Sobre</span>
                <span className="instagram-shop-text01">Aplicativo</span>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startpee/"
                  className="instagram-shop-link"
                >
                  Reclame aqui
                </a>
                <span className="instagram-shop-text02">Localização</span>
                <span className="instagram-shop-text03">trabalhe aqui</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="instagram-shop-link1"
                >
                  Fale conosco
                </a>
              </div>
              <div
                id="close-mobile-menu"
                className="instagram-shop-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="instagram-shop-icon"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="instagram-shop-desktop-navigation">
              <nav className="instagram-shop-centered">
                <div className="instagram-shop-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/startpee-1200w.png"
                    className="instagram-shop-logo1"
                  />
                  <div className="instagram-shop-links1">
                    <a href="#servi" className="instagram-shop-link2 Link">
                      Soluções
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="instagram-shop-link3 Link"
                    >
                      Fale conosco
                    </a>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      className="instagram-shop-link4 Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="instagram-shop-right">
                  <span className="instagram-shop-sign-in Link">Sign in</span>
                  <div className="instagram-shop-get-started">
                    <span className="instagram-shop-text04">Contratar</span>
                  </div>
                  <div
                    id="open-mobile-menu"
                    className="instagram-shop-burger-menu"
                  >
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="instagram-shop-mobile-menu-button"
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></DangerousHTML>
            </div>
          </div>
          <header className="instagram-shop-header">
            <h1 className="instagram-shop-text05">Instagram shop</h1>
            <p className="instagram-shop-text06">
              ajudamos a transformar o seu perfil em uma loja virtual
            </p>
          </header>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="instagram-shop-iframe"
          ></iframe>
        </section>
        <footer className="instagram-shop-footer">
          <div className="instagram-shop-top">
            <div className="instagram-shop-right1">
              <div className="instagram-shop-category">
                <span className="instagram-shop-text07">Soluções </span>
                <div className="instagram-shop-links2">
                  <span className="instagram-shop-text08">
                    Plano de negócios
                  </span>
                  <span className="instagram-shop-text09">Vendas online</span>
                  <span className="instagram-shop-text10">Marketing</span>
                  <span className="instagram-shop-text11">Instagram shop</span>
                  <span className="instagram-shop-text12">Automatizar</span>
                </div>
              </div>
              <div className="instagram-shop-category1">
                <span className="instagram-shop-text13">Empresa</span>
                <div className="instagram-shop-links3">
                  <span className="instagram-shop-text14">Sobre</span>
                  <span className="instagram-shop-text15">Aplicativo</span>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="instagram-shop-link5"
                  >
                    Reclame aqui
                  </a>
                  <span className="instagram-shop-text16">Localização</span>
                  <span className="instagram-shop-text17">trabalhe aqui</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="instagram-shop-link6"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              <div className="instagram-shop-category2">
                <span className="instagram-shop-text18">Conteúdos </span>
                <div className="instagram-shop-links4">
                  <span className="instagram-shop-text19">Youtube</span>
                  <a
                    href="https://www.linkedin.com/company/startpee"
                    className="instagram-shop-link7"
                  >
                    Linkedin
                  </a>
                  <span className="instagram-shop-text20">Pinterest</span>
                  <a
                    href="https://www.instagram.com/appmeunegocio/"
                    className="instagram-shop-link8"
                  >
                    Instagram
                  </a>
                  <span className="instagram-shop-text21">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="instagram-shop-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/startpee-1200w.png"
              className="instagram-shop-branding"
            />
            <span className="instagram-shop-text22">
              CNPJ 20.369.543/0001-98 São Paulo- SP
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="instagram-shop-text23">
              Copyright © Startpee- 2023
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .instagram-shop-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .instagram-shop-hero {
            width: 100%;
            height: 1123px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #775cfc;
          }
          .instagram-shop-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .instagram-shop-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .instagram-shop-logo {
            width: 64px;
          }
          .instagram-shop-links {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .instagram-shop-text {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-link {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .instagram-shop-text02 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text03 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .instagram-shop-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .instagram-shop-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .instagram-shop-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .instagram-shop-centered {
            width: 100%;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .instagram-shop-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .instagram-shop-logo1 {
            width: auto;
            height: 57px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .instagram-shop-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .instagram-shop-link2 {
            text-decoration: none;
          }
          .instagram-shop-link3 {
            text-decoration: none;
          }
          .instagram-shop-link4 {
            text-decoration: none;
          }
          .instagram-shop-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .instagram-shop-sign-in {
            display: none;
            margin-right: 20px;
          }
          .instagram-shop-get-started {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .instagram-shop-get-started:hover {
            background-color: #5228f5;
          }
          .instagram-shop-text04 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .instagram-shop-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .instagram-shop-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .instagram-shop-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .instagram-shop-text05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .instagram-shop-text06 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .instagram-shop-iframe {
            width: 618px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .instagram-shop-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .instagram-shop-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .instagram-shop-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .instagram-shop-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .instagram-shop-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .instagram-shop-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .instagram-shop-text08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .instagram-shop-text09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .instagram-shop-text13 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .instagram-shop-links3 {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .instagram-shop-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .instagram-shop-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .instagram-shop-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .instagram-shop-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .instagram-shop-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .instagram-shop-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .instagram-shop-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-link8 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .instagram-shop-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .instagram-shop-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .instagram-shop-branding {
            width: auto;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .instagram-shop-text22 {
            color: var(--dl-color-gray-900);
            font-size: 14px;
            line-height: 30px;
          }
          .instagram-shop-text23 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .instagram-shop-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .instagram-shop-links {
              gap: var(--dl-space-space-unit);
            }
            .instagram-shop-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .instagram-shop-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .instagram-shop-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .instagram-shop-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .instagram-shop-logo1 {
              width: auto;
            }
            .instagram-shop-links1 {
              display: none;
            }
            .instagram-shop-sign-in {
              display: none;
            }
            .instagram-shop-get-started {
              display: none;
            }
            .instagram-shop-mobile-menu-button {
              display: flex;
            }
            .instagram-shop-header {
              width: 100%;
              max-width: 1200px;
            }
            .instagram-shop-iframe {
              width: 621px;
              height: 347px;
            }
            .instagram-shop-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .instagram-shop-top {
              flex-direction: column;
            }
            .instagram-shop-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .instagram-shop-links2 {
              gap: var(--dl-space-space-unit);
            }
            .instagram-shop-links3 {
              gap: var(--dl-space-space-unit);
            }
            .instagram-shop-links4 {
              gap: var(--dl-space-space-unit);
            }
            .instagram-shop-branding {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .instagram-shop-text22 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .instagram-shop-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .instagram-shop-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #775cfc;
            }
            .instagram-shop-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .instagram-shop-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .instagram-shop-left {
              margin-left: var(--dl-space-space-unit);
            }
            .instagram-shop-logo1 {
              width: auto;
            }
            .instagram-shop-right {
              margin-right: var(--dl-space-space-unit);
            }
            .instagram-shop-sign-in {
              display: none;
            }
            .instagram-shop-get-started {
              display: none;
            }
            .instagram-shop-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .instagram-shop-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .instagram-shop-text06 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .instagram-shop-iframe {
              right: 205px;
              width: 347px;
              bottom: -41px;
              height: 242px;
              position: absolute;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .instagram-shop-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .instagram-shop-branding {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .instagram-shop-hero {
              height: 892px;
              padding-bottom: 160px;
              background-color: #775cfc;
            }
            .instagram-shop-logo {
              margin-left: 0px;
            }
            .instagram-shop-icon {
              align-items: center;
              justify-content: center;
            }
            .instagram-shop-logo1 {
              width: auto;
            }
            .instagram-shop-header {
              height: 203px;
            }
            .instagram-shop-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .instagram-shop-text06 {
              color: rgb(238, 233, 254);
              width: 343px;
              padding-right: 39px;
            }
            .instagram-shop-iframe {
              right: -328px;
              width: 385px;
              bottom: -90px;
              height: 291px;
              position: static;
            }
            .instagram-shop-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .instagram-shop-right1 {
              align-self: stretch;
            }
            .instagram-shop-branding {
              width: 100%;
            }
            .instagram-shop-text22 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
            .instagram-shop-text23 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default InstagramShop
