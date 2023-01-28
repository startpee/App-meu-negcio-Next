import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const ECommerce = (props) => {
  return (
    <>
      <div className="e-commerce-container">
        <Head>
          <title>e-commerce - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="e-commerce - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db3eb164-debe-4ab3-9f10-ac025b773942/73f729d7-91dd-4017-818e-368aee5329a4?org_if_sml=1"
          />
        </Head>
        <section className="e-commerce-hero">
          <div className="e-commerce-menu">
            <div id="mobile-menu" className="e-commerce-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/startpee-1200w.png"
                className="e-commerce-logo"
              />
              <div className="e-commerce-links">
                <span className="e-commerce-text">Sobre</span>
                <span className="e-commerce-text01">Aplicativo</span>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startpee/"
                  className="e-commerce-link"
                >
                  Reclame aqui
                </a>
                <span className="e-commerce-text02">Localização</span>
                <span className="e-commerce-text03">trabalhe aqui</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="e-commerce-link1"
                >
                  Fale conosco
                </a>
              </div>
              <div
                id="close-mobile-menu"
                className="e-commerce-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="e-commerce-icon"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="e-commerce-desktop-navigation">
              <nav className="e-commerce-centered">
                <div className="e-commerce-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/startpee-1200w.png"
                    className="e-commerce-logo1"
                  />
                  <div className="e-commerce-links1">
                    <Link href="/">
                      <a className="e-commerce-link2 Link">Inicio</a>
                    </Link>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="e-commerce-link3 Link"
                    >
                      Fale conosco
                    </a>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      className="e-commerce-link4 Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="e-commerce-right">
                  <span className="e-commerce-sign-in Link">Sign in</span>
                  <div className="e-commerce-get-started">
                    <span className="e-commerce-text04">Contratar</span>
                  </div>
                  <div id="open-mobile-menu" className="e-commerce-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="e-commerce-mobile-menu-button"
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
          <header className="e-commerce-header">
            <h1 className="e-commerce-text05">E-commerce</h1>
            <p className="e-commerce-text06">
              Não dependa mais de plataformas vendas
            </p>
          </header>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="e-commerce-iframe"
          ></iframe>
        </section>
        <footer className="e-commerce-footer">
          <div className="e-commerce-top">
            <div className="e-commerce-right1">
              <div className="e-commerce-category">
                <span className="e-commerce-text07">Soluções </span>
                <div className="e-commerce-links2">
                  <span className="e-commerce-text08">Plano de negócios</span>
                  <span className="e-commerce-text09">Vendas online</span>
                  <span className="e-commerce-text10">Marketing</span>
                  <span className="e-commerce-text11">Instagram shop</span>
                  <span className="e-commerce-text12">Automatizar</span>
                </div>
              </div>
              <div className="e-commerce-category1">
                <span className="e-commerce-text13">Empresa</span>
                <div className="e-commerce-links3">
                  <span className="e-commerce-text14">Sobre</span>
                  <span className="e-commerce-text15">Aplicativo</span>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="e-commerce-link5"
                  >
                    Reclame aqui
                  </a>
                  <span className="e-commerce-text16">Localização</span>
                  <span className="e-commerce-text17">trabalhe aqui</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="e-commerce-link6"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              <div className="e-commerce-category2">
                <span className="e-commerce-text18">Conteúdos </span>
                <div className="e-commerce-links4">
                  <span className="e-commerce-text19">Youtube</span>
                  <a
                    href="https://www.linkedin.com/company/startpee"
                    className="e-commerce-link7"
                  >
                    Linkedin
                  </a>
                  <span className="e-commerce-text20">Pinterest</span>
                  <a
                    href="https://www.instagram.com/appmeunegocio/"
                    className="e-commerce-link8"
                  >
                    Instagram
                  </a>
                  <span className="e-commerce-text21">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="e-commerce-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/startpee-1200w.png"
              className="e-commerce-branding"
            />
            <span className="e-commerce-text22">
              CNPJ 20.369.543/0001-98 São Paulo- SP
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="e-commerce-text23">
              Copyright © Startpee- 2023
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .e-commerce-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .e-commerce-hero {
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
          .e-commerce-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .e-commerce-mobile-navigation {
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
          .e-commerce-logo {
            width: 64px;
          }
          .e-commerce-links {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .e-commerce-text {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-link {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .e-commerce-text02 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text03 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .e-commerce-close-mobile-menu {
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
          .e-commerce-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .e-commerce-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .e-commerce-centered {
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
          .e-commerce-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .e-commerce-logo1 {
            width: auto;
            height: 57px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .e-commerce-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .e-commerce-link2 {
            text-decoration: none;
          }
          .e-commerce-link3 {
            text-decoration: none;
          }
          .e-commerce-link4 {
            text-decoration: none;
          }
          .e-commerce-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .e-commerce-sign-in {
            display: none;
            margin-right: 20px;
          }
          .e-commerce-get-started {
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
          .e-commerce-get-started:hover {
            background-color: #5228f5;
          }
          .e-commerce-text04 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .e-commerce-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .e-commerce-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .e-commerce-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .e-commerce-text05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .e-commerce-text06 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .e-commerce-iframe {
            width: 618px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .e-commerce-footer {
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
          .e-commerce-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .e-commerce-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .e-commerce-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .e-commerce-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .e-commerce-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .e-commerce-text08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .e-commerce-text09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .e-commerce-text13 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .e-commerce-links3 {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .e-commerce-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .e-commerce-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .e-commerce-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .e-commerce-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .e-commerce-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .e-commerce-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .e-commerce-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-link8 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .e-commerce-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .e-commerce-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .e-commerce-branding {
            width: auto;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .e-commerce-text22 {
            color: var(--dl-color-gray-900);
            font-size: 14px;
            line-height: 30px;
          }
          .e-commerce-text23 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .e-commerce-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .e-commerce-links {
              gap: var(--dl-space-space-unit);
            }
            .e-commerce-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .e-commerce-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .e-commerce-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .e-commerce-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .e-commerce-logo1 {
              width: auto;
            }
            .e-commerce-links1 {
              display: none;
            }
            .e-commerce-sign-in {
              display: none;
            }
            .e-commerce-get-started {
              display: none;
            }
            .e-commerce-mobile-menu-button {
              display: flex;
            }
            .e-commerce-header {
              width: 100%;
              max-width: 1200px;
            }
            .e-commerce-iframe {
              width: 621px;
              height: 347px;
            }
            .e-commerce-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .e-commerce-top {
              flex-direction: column;
            }
            .e-commerce-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .e-commerce-links2 {
              gap: var(--dl-space-space-unit);
            }
            .e-commerce-links3 {
              gap: var(--dl-space-space-unit);
            }
            .e-commerce-links4 {
              gap: var(--dl-space-space-unit);
            }
            .e-commerce-branding {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .e-commerce-text22 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .e-commerce-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .e-commerce-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #775cfc;
            }
            .e-commerce-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .e-commerce-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .e-commerce-left {
              margin-left: var(--dl-space-space-unit);
            }
            .e-commerce-logo1 {
              width: auto;
            }
            .e-commerce-right {
              margin-right: var(--dl-space-space-unit);
            }
            .e-commerce-sign-in {
              display: none;
            }
            .e-commerce-get-started {
              display: none;
            }
            .e-commerce-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .e-commerce-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .e-commerce-text06 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .e-commerce-iframe {
              right: 205px;
              width: 347px;
              bottom: -41px;
              height: 242px;
              position: absolute;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .e-commerce-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .e-commerce-branding {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .e-commerce-hero {
              height: 892px;
              padding-bottom: 160px;
              background-color: #775cfc;
            }
            .e-commerce-logo {
              margin-left: 0px;
            }
            .e-commerce-icon {
              align-items: center;
              justify-content: center;
            }
            .e-commerce-logo1 {
              width: auto;
            }
            .e-commerce-header {
              height: 203px;
            }
            .e-commerce-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .e-commerce-text06 {
              color: rgb(238, 233, 254);
              width: 343px;
              padding-right: 39px;
            }
            .e-commerce-iframe {
              right: -328px;
              width: 385px;
              bottom: -90px;
              height: 291px;
              position: static;
            }
            .e-commerce-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .e-commerce-right1 {
              align-self: stretch;
            }
            .e-commerce-branding {
              width: 100%;
            }
            .e-commerce-text22 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
            .e-commerce-text23 {
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

export default ECommerce
