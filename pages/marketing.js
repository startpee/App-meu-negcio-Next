import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Marketing = (props) => {
  return (
    <>
      <div className="marketing-container">
        <Head>
          <title>marketing - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="marketing - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db3eb164-debe-4ab3-9f10-ac025b773942/73f729d7-91dd-4017-818e-368aee5329a4?org_if_sml=1"
          />
        </Head>
        <section className="marketing-hero">
          <div className="marketing-menu">
            <div id="mobile-menu" className="marketing-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/startpee-1200w.png"
                className="marketing-logo"
              />
              <div className="marketing-links">
                <span className="marketing-text">Sobre</span>
                <span className="marketing-text01">Aplicativo</span>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startpee/"
                  className="marketing-link"
                >
                  Reclame aqui
                </a>
                <span className="marketing-text02">Localização</span>
                <span className="marketing-text03">trabalhe aqui</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="marketing-link1"
                >
                  Fale conosco
                </a>
              </div>
              <div
                id="close-mobile-menu"
                className="marketing-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="marketing-icon"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="marketing-desktop-navigation">
              <nav className="marketing-centered">
                <div className="marketing-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/startpee-1200w.png"
                    className="marketing-logo1"
                  />
                  <div className="marketing-links1">
                    <a href="#servi" className="marketing-link2 Link">
                      Soluções
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="marketing-link3 Link"
                    >
                      Fale conosco
                    </a>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      className="marketing-link4 Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="marketing-right">
                  <span className="marketing-sign-in Link">Sign in</span>
                  <div className="marketing-get-started">
                    <span className="marketing-text04">Contratar</span>
                  </div>
                  <div id="open-mobile-menu" className="marketing-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="marketing-mobile-menu-button"
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
          <header className="marketing-header">
            <h1 className="marketing-text05">Marketing</h1>
            <p className="marketing-text06">
              {' '}
              não precisa pagar nenhum gestor de tráfego 
            </p>
          </header>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="marketing-iframe"
          ></iframe>
        </section>
        <footer className="marketing-footer">
          <div className="marketing-top">
            <div className="marketing-right1">
              <div className="marketing-category">
                <span className="marketing-text07">Soluções </span>
                <div className="marketing-links2">
                  <span className="marketing-text08">Plano de negócios</span>
                  <span className="marketing-text09">Vendas online</span>
                  <span className="marketing-text10">Marketing</span>
                  <span className="marketing-text11">Instagram shop</span>
                  <span className="marketing-text12">Automatizar</span>
                </div>
              </div>
              <div className="marketing-category1">
                <span className="marketing-text13">Empresa</span>
                <div className="marketing-links3">
                  <span className="marketing-text14">Sobre</span>
                  <span className="marketing-text15">Aplicativo</span>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="marketing-link5"
                  >
                    Reclame aqui
                  </a>
                  <span className="marketing-text16">Localização</span>
                  <span className="marketing-text17">trabalhe aqui</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="marketing-link6"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              <div className="marketing-category2">
                <span className="marketing-text18">Conteúdos </span>
                <div className="marketing-links4">
                  <span className="marketing-text19">Youtube</span>
                  <a
                    href="https://www.linkedin.com/company/startpee"
                    className="marketing-link7"
                  >
                    Linkedin
                  </a>
                  <span className="marketing-text20">Pinterest</span>
                  <a
                    href="https://www.instagram.com/appmeunegocio/"
                    className="marketing-link8"
                  >
                    Instagram
                  </a>
                  <span className="marketing-text21">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="marketing-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/startpee-1200w.png"
              className="marketing-branding"
            />
            <span className="marketing-text22">
              CNPJ 20.369.543/0001-98 São Paulo- SP
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="marketing-text23">Copyright © Startpee- 2023</span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .marketing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .marketing-hero {
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
          .marketing-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .marketing-mobile-navigation {
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
          .marketing-logo {
            width: 64px;
          }
          .marketing-links {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .marketing-text {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-link {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .marketing-text02 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text03 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .marketing-close-mobile-menu {
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
          .marketing-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .marketing-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .marketing-centered {
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
          .marketing-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .marketing-logo1 {
            width: auto;
            height: 57px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .marketing-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .marketing-link2 {
            text-decoration: none;
          }
          .marketing-link3 {
            text-decoration: none;
          }
          .marketing-link4 {
            text-decoration: none;
          }
          .marketing-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .marketing-sign-in {
            display: none;
            margin-right: 20px;
          }
          .marketing-get-started {
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
          .marketing-get-started:hover {
            background-color: #5228f5;
          }
          .marketing-text04 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .marketing-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .marketing-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .marketing-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .marketing-text05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .marketing-text06 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .marketing-iframe {
            width: 618px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .marketing-footer {
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
          .marketing-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .marketing-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .marketing-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .marketing-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .marketing-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .marketing-text08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .marketing-text09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .marketing-text13 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .marketing-links3 {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .marketing-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .marketing-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .marketing-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .marketing-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .marketing-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .marketing-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .marketing-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-link8 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .marketing-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .marketing-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .marketing-branding {
            width: auto;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .marketing-text22 {
            color: var(--dl-color-gray-900);
            font-size: 14px;
            line-height: 30px;
          }
          .marketing-text23 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .marketing-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .marketing-links {
              gap: var(--dl-space-space-unit);
            }
            .marketing-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .marketing-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .marketing-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .marketing-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .marketing-logo1 {
              width: auto;
            }
            .marketing-links1 {
              display: none;
            }
            .marketing-sign-in {
              display: none;
            }
            .marketing-get-started {
              display: none;
            }
            .marketing-mobile-menu-button {
              display: flex;
            }
            .marketing-header {
              width: 100%;
              max-width: 1200px;
            }
            .marketing-iframe {
              width: 621px;
              height: 347px;
            }
            .marketing-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .marketing-top {
              flex-direction: column;
            }
            .marketing-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .marketing-links2 {
              gap: var(--dl-space-space-unit);
            }
            .marketing-links3 {
              gap: var(--dl-space-space-unit);
            }
            .marketing-links4 {
              gap: var(--dl-space-space-unit);
            }
            .marketing-branding {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .marketing-text22 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .marketing-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .marketing-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #775cfc;
            }
            .marketing-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .marketing-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .marketing-left {
              margin-left: var(--dl-space-space-unit);
            }
            .marketing-logo1 {
              width: auto;
            }
            .marketing-right {
              margin-right: var(--dl-space-space-unit);
            }
            .marketing-sign-in {
              display: none;
            }
            .marketing-get-started {
              display: none;
            }
            .marketing-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .marketing-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .marketing-text06 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .marketing-iframe {
              right: 205px;
              width: 347px;
              bottom: -41px;
              height: 242px;
              position: absolute;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .marketing-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .marketing-branding {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .marketing-hero {
              height: 892px;
              padding-bottom: 160px;
              background-color: #775cfc;
            }
            .marketing-logo {
              margin-left: 0px;
            }
            .marketing-icon {
              align-items: center;
              justify-content: center;
            }
            .marketing-logo1 {
              width: auto;
            }
            .marketing-header {
              height: 203px;
            }
            .marketing-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .marketing-text06 {
              color: rgb(238, 233, 254);
              width: 343px;
              padding-right: 39px;
            }
            .marketing-iframe {
              right: -328px;
              width: 385px;
              bottom: -90px;
              height: 291px;
              position: static;
            }
            .marketing-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .marketing-right1 {
              align-self: stretch;
            }
            .marketing-branding {
              width: 100%;
            }
            .marketing-text22 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
            .marketing-text23 {
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

export default Marketing
