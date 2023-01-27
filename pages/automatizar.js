import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Automatizar = (props) => {
  return (
    <>
      <div className="automatizar-container">
        <Head>
          <title>automatizar - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="automatizar - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db3eb164-debe-4ab3-9f10-ac025b773942/73f729d7-91dd-4017-818e-368aee5329a4?org_if_sml=1"
          />
        </Head>
        <section className="automatizar-hero">
          <div className="automatizar-menu">
            <div id="mobile-menu" className="automatizar-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/startpee-1200w.png"
                className="automatizar-logo"
              />
              <div className="automatizar-links">
                <span className="automatizar-text">Sobre</span>
                <span className="automatizar-text01">Aplicativo</span>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startpee/"
                  className="automatizar-link"
                >
                  Reclame aqui
                </a>
                <span className="automatizar-text02">Localização</span>
                <span className="automatizar-text03">trabalhe aqui</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="automatizar-link1"
                >
                  Fale conosco
                </a>
              </div>
              <div
                id="close-mobile-menu"
                className="automatizar-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="automatizar-icon"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="automatizar-desktop-navigation">
              <nav className="automatizar-centered">
                <div className="automatizar-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/startpee-1200w.png"
                    className="automatizar-logo1"
                  />
                  <div className="automatizar-links1">
                    <a href="#servi" className="automatizar-link2 Link">
                      Soluções
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="automatizar-link3 Link"
                    >
                      Fale conosco
                    </a>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      className="automatizar-link4 Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="automatizar-right">
                  <span className="automatizar-sign-in Link">Sign in</span>
                  <div className="automatizar-get-started">
                    <span className="automatizar-text04">Contratar</span>
                  </div>
                  <div
                    id="open-mobile-menu"
                    className="automatizar-burger-menu"
                  >
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="automatizar-mobile-menu-button"
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
          <header className="automatizar-header">
            <h1 className="automatizar-text05">Automatizar ferramentas</h1>
            <p className="automatizar-text06">
              O serviço mais pedido é whatsapp business  
            </p>
          </header>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="automatizar-iframe"
          ></iframe>
        </section>
        <footer className="automatizar-footer">
          <div className="automatizar-top">
            <div className="automatizar-right1">
              <div className="automatizar-category">
                <span className="automatizar-text07">Soluções </span>
                <div className="automatizar-links2">
                  <span className="automatizar-text08">Plano de negócios</span>
                  <span className="automatizar-text09">Vendas online</span>
                  <span className="automatizar-text10">Marketing</span>
                  <span className="automatizar-text11">Instagram shop</span>
                  <span className="automatizar-text12">Automatizar</span>
                </div>
              </div>
              <div className="automatizar-category1">
                <span className="automatizar-text13">Empresa</span>
                <div className="automatizar-links3">
                  <span className="automatizar-text14">Sobre</span>
                  <span className="automatizar-text15">Aplicativo</span>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="automatizar-link5"
                  >
                    Reclame aqui
                  </a>
                  <span className="automatizar-text16">Localização</span>
                  <span className="automatizar-text17">trabalhe aqui</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="automatizar-link6"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              <div className="automatizar-category2">
                <span className="automatizar-text18">Conteúdos </span>
                <div className="automatizar-links4">
                  <span className="automatizar-text19">Youtube</span>
                  <a
                    href="https://www.linkedin.com/company/startpee"
                    className="automatizar-link7"
                  >
                    Linkedin
                  </a>
                  <span className="automatizar-text20">Pinterest</span>
                  <a
                    href="https://www.instagram.com/appmeunegocio/"
                    className="automatizar-link8"
                  >
                    Instagram
                  </a>
                  <span className="automatizar-text21">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="automatizar-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/startpee-1200w.png"
              className="automatizar-branding"
            />
            <span className="automatizar-text22">
              CNPJ 20.369.543/0001-98 São Paulo- SP
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="automatizar-text23">
              Copyright © Startpee- 2023
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .automatizar-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .automatizar-hero {
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
          .automatizar-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .automatizar-mobile-navigation {
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
          .automatizar-logo {
            width: 64px;
          }
          .automatizar-links {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .automatizar-text {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-link {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .automatizar-text02 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text03 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .automatizar-close-mobile-menu {
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
          .automatizar-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .automatizar-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .automatizar-centered {
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
          .automatizar-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .automatizar-logo1 {
            width: auto;
            height: 57px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .automatizar-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .automatizar-link2 {
            text-decoration: none;
          }
          .automatizar-link3 {
            text-decoration: none;
          }
          .automatizar-link4 {
            text-decoration: none;
          }
          .automatizar-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .automatizar-sign-in {
            display: none;
            margin-right: 20px;
          }
          .automatizar-get-started {
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
          .automatizar-get-started:hover {
            background-color: #5228f5;
          }
          .automatizar-text04 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .automatizar-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .automatizar-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .automatizar-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .automatizar-text05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .automatizar-text06 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .automatizar-iframe {
            width: 618px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .automatizar-footer {
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
          .automatizar-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .automatizar-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .automatizar-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .automatizar-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .automatizar-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .automatizar-text08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .automatizar-text09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .automatizar-text13 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .automatizar-links3 {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .automatizar-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .automatizar-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .automatizar-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .automatizar-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .automatizar-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .automatizar-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .automatizar-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-link8 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .automatizar-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .automatizar-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .automatizar-branding {
            width: auto;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .automatizar-text22 {
            color: var(--dl-color-gray-900);
            font-size: 14px;
            line-height: 30px;
          }
          .automatizar-text23 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .automatizar-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .automatizar-links {
              gap: var(--dl-space-space-unit);
            }
            .automatizar-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .automatizar-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .automatizar-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .automatizar-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .automatizar-logo1 {
              width: auto;
            }
            .automatizar-links1 {
              display: none;
            }
            .automatizar-sign-in {
              display: none;
            }
            .automatizar-get-started {
              display: none;
            }
            .automatizar-mobile-menu-button {
              display: flex;
            }
            .automatizar-header {
              width: 100%;
              max-width: 1200px;
            }
            .automatizar-iframe {
              width: 621px;
              height: 347px;
            }
            .automatizar-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .automatizar-top {
              flex-direction: column;
            }
            .automatizar-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .automatizar-links2 {
              gap: var(--dl-space-space-unit);
            }
            .automatizar-links3 {
              gap: var(--dl-space-space-unit);
            }
            .automatizar-links4 {
              gap: var(--dl-space-space-unit);
            }
            .automatizar-branding {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .automatizar-text22 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .automatizar-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .automatizar-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #775cfc;
            }
            .automatizar-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .automatizar-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .automatizar-left {
              margin-left: var(--dl-space-space-unit);
            }
            .automatizar-logo1 {
              width: auto;
            }
            .automatizar-right {
              margin-right: var(--dl-space-space-unit);
            }
            .automatizar-sign-in {
              display: none;
            }
            .automatizar-get-started {
              display: none;
            }
            .automatizar-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .automatizar-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .automatizar-text06 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .automatizar-iframe {
              right: 205px;
              width: 347px;
              bottom: -41px;
              height: 242px;
              position: absolute;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .automatizar-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .automatizar-branding {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .automatizar-hero {
              height: 892px;
              padding-bottom: 160px;
              background-color: #775cfc;
            }
            .automatizar-logo {
              margin-left: 0px;
            }
            .automatizar-icon {
              align-items: center;
              justify-content: center;
            }
            .automatizar-logo1 {
              width: auto;
            }
            .automatizar-header {
              height: 203px;
            }
            .automatizar-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .automatizar-text06 {
              color: rgb(238, 233, 254);
              width: 343px;
              padding-right: 39px;
            }
            .automatizar-iframe {
              right: -328px;
              width: 385px;
              bottom: -90px;
              height: 291px;
              position: static;
            }
            .automatizar-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .automatizar-right1 {
              align-self: stretch;
            }
            .automatizar-branding {
              width: 100%;
            }
            .automatizar-text22 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
            .automatizar-text23 {
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

export default Automatizar
