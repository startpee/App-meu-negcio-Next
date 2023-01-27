import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const PlanoDeNegocio = (props) => {
  return (
    <>
      <div className="plano-de-negocio-container">
        <Head>
          <title>plano-de-negocio - Startpee</title>
          <meta
            name="description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="plano-de-negocio - Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db3eb164-debe-4ab3-9f10-ac025b773942/73f729d7-91dd-4017-818e-368aee5329a4?org_if_sml=1"
          />
        </Head>
        <section className="plano-de-negocio-hero">
          <div className="plano-de-negocio-menu">
            <div
              id="mobile-menu"
              className="plano-de-negocio-mobile-navigation"
            >
              <img
                alt="pastedImage"
                src="/playground_assets/startpee-1200w.png"
                className="plano-de-negocio-logo"
              />
              <div className="plano-de-negocio-links">
                <span className="plano-de-negocio-text">Sobre</span>
                <span className="plano-de-negocio-text01">Aplicativo</span>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startpee/"
                  className="plano-de-negocio-link"
                >
                  Reclame aqui
                </a>
                <span className="plano-de-negocio-text02">Localização</span>
                <span className="plano-de-negocio-text03">trabalhe aqui</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="plano-de-negocio-link1"
                >
                  Fale conosco
                </a>
              </div>
              <div
                id="close-mobile-menu"
                className="plano-de-negocio-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="plano-de-negocio-icon"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="plano-de-negocio-desktop-navigation">
              <nav className="plano-de-negocio-centered">
                <div className="plano-de-negocio-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/startpee-1200w.png"
                    className="plano-de-negocio-logo1"
                  />
                  <div className="plano-de-negocio-links1">
                    <a href="#servi" className="plano-de-negocio-link2 Link">
                      Soluções
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="plano-de-negocio-link3 Link"
                    >
                      Fale conosco
                    </a>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      className="plano-de-negocio-link4 Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="plano-de-negocio-right">
                  <span className="plano-de-negocio-sign-in Link">Sign in</span>
                  <div className="plano-de-negocio-get-started">
                    <span className="plano-de-negocio-text04">Contratar</span>
                  </div>
                  <div
                    id="open-mobile-menu"
                    className="plano-de-negocio-burger-menu"
                  >
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="plano-de-negocio-mobile-menu-button"
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
          <header className="plano-de-negocio-header">
            <h1 className="plano-de-negocio-text05">Plano de negócio</h1>
            <p className="plano-de-negocio-text06">
              A única forma de ficar 100% no controle do negócio 
            </p>
          </header>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="plano-de-negocio-iframe"
          ></iframe>
        </section>
        <footer className="plano-de-negocio-footer">
          <div className="plano-de-negocio-top">
            <div className="plano-de-negocio-right1">
              <div className="plano-de-negocio-category">
                <span className="plano-de-negocio-text07">Soluções </span>
                <div className="plano-de-negocio-links2">
                  <span className="plano-de-negocio-text08">
                    Plano de negócios
                  </span>
                  <span className="plano-de-negocio-text09">Vendas online</span>
                  <span className="plano-de-negocio-text10">Marketing</span>
                  <span className="plano-de-negocio-text11">
                    Instagram shop
                  </span>
                  <span className="plano-de-negocio-text12">Automatizar</span>
                </div>
              </div>
              <div className="plano-de-negocio-category1">
                <span className="plano-de-negocio-text13">Empresa</span>
                <div className="plano-de-negocio-links3">
                  <span className="plano-de-negocio-text14">Sobre</span>
                  <span className="plano-de-negocio-text15">Aplicativo</span>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="plano-de-negocio-link5"
                  >
                    Reclame aqui
                  </a>
                  <span className="plano-de-negocio-text16">Localização</span>
                  <span className="plano-de-negocio-text17">trabalhe aqui</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="plano-de-negocio-link6"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              <div className="plano-de-negocio-category2">
                <span className="plano-de-negocio-text18">Conteúdos </span>
                <div className="plano-de-negocio-links4">
                  <span className="plano-de-negocio-text19">Youtube</span>
                  <a
                    href="https://www.linkedin.com/company/startpee"
                    className="plano-de-negocio-link7"
                  >
                    Linkedin
                  </a>
                  <span className="plano-de-negocio-text20">Pinterest</span>
                  <a
                    href="https://www.instagram.com/appmeunegocio/"
                    className="plano-de-negocio-link8"
                  >
                    Instagram
                  </a>
                  <span className="plano-de-negocio-text21">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="plano-de-negocio-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/startpee-1200w.png"
              className="plano-de-negocio-branding"
            />
            <span className="plano-de-negocio-text22">
              CNPJ 20.369.543/0001-98 São Paulo- SP
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="plano-de-negocio-text23">
              Copyright © Startpee- 2023
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .plano-de-negocio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .plano-de-negocio-hero {
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
          .plano-de-negocio-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .plano-de-negocio-mobile-navigation {
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
          .plano-de-negocio-logo {
            width: 64px;
          }
          .plano-de-negocio-links {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plano-de-negocio-text {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-link {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .plano-de-negocio-text02 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text03 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .plano-de-negocio-close-mobile-menu {
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
          .plano-de-negocio-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .plano-de-negocio-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .plano-de-negocio-centered {
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
          .plano-de-negocio-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .plano-de-negocio-logo1 {
            width: auto;
            height: 57px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .plano-de-negocio-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .plano-de-negocio-link2 {
            text-decoration: none;
          }
          .plano-de-negocio-link3 {
            text-decoration: none;
          }
          .plano-de-negocio-link4 {
            text-decoration: none;
          }
          .plano-de-negocio-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .plano-de-negocio-sign-in {
            display: none;
            margin-right: 20px;
          }
          .plano-de-negocio-get-started {
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
          .plano-de-negocio-get-started:hover {
            background-color: #5228f5;
          }
          .plano-de-negocio-text04 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .plano-de-negocio-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .plano-de-negocio-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .plano-de-negocio-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .plano-de-negocio-text05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .plano-de-negocio-text06 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .plano-de-negocio-iframe {
            width: 618px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .plano-de-negocio-footer {
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
          .plano-de-negocio-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .plano-de-negocio-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .plano-de-negocio-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .plano-de-negocio-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .plano-de-negocio-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plano-de-negocio-text08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .plano-de-negocio-text09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plano-de-negocio-text13 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .plano-de-negocio-links3 {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plano-de-negocio-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .plano-de-negocio-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .plano-de-negocio-category2 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .plano-de-negocio-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .plano-de-negocio-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plano-de-negocio-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .plano-de-negocio-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-link8 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .plano-de-negocio-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .plano-de-negocio-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .plano-de-negocio-branding {
            width: auto;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .plano-de-negocio-text22 {
            color: var(--dl-color-gray-900);
            font-size: 14px;
            line-height: 30px;
          }
          .plano-de-negocio-text23 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .plano-de-negocio-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .plano-de-negocio-links {
              gap: var(--dl-space-space-unit);
            }
            .plano-de-negocio-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .plano-de-negocio-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .plano-de-negocio-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .plano-de-negocio-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .plano-de-negocio-logo1 {
              width: auto;
            }
            .plano-de-negocio-links1 {
              display: none;
            }
            .plano-de-negocio-sign-in {
              display: none;
            }
            .plano-de-negocio-get-started {
              display: none;
            }
            .plano-de-negocio-mobile-menu-button {
              display: flex;
            }
            .plano-de-negocio-header {
              width: 100%;
              max-width: 1200px;
            }
            .plano-de-negocio-iframe {
              width: 621px;
              height: 347px;
            }
            .plano-de-negocio-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .plano-de-negocio-top {
              flex-direction: column;
            }
            .plano-de-negocio-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .plano-de-negocio-links2 {
              gap: var(--dl-space-space-unit);
            }
            .plano-de-negocio-links3 {
              gap: var(--dl-space-space-unit);
            }
            .plano-de-negocio-links4 {
              gap: var(--dl-space-space-unit);
            }
            .plano-de-negocio-branding {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .plano-de-negocio-text22 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .plano-de-negocio-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .plano-de-negocio-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #775cfc;
            }
            .plano-de-negocio-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .plano-de-negocio-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .plano-de-negocio-left {
              margin-left: var(--dl-space-space-unit);
            }
            .plano-de-negocio-logo1 {
              width: auto;
            }
            .plano-de-negocio-right {
              margin-right: var(--dl-space-space-unit);
            }
            .plano-de-negocio-sign-in {
              display: none;
            }
            .plano-de-negocio-get-started {
              display: none;
            }
            .plano-de-negocio-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .plano-de-negocio-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .plano-de-negocio-text06 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .plano-de-negocio-iframe {
              right: 205px;
              width: 347px;
              bottom: -41px;
              height: 242px;
              position: absolute;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .plano-de-negocio-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .plano-de-negocio-branding {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .plano-de-negocio-hero {
              height: 892px;
              padding-bottom: 160px;
              background-color: #775cfc;
            }
            .plano-de-negocio-logo {
              margin-left: 0px;
            }
            .plano-de-negocio-icon {
              align-items: center;
              justify-content: center;
            }
            .plano-de-negocio-logo1 {
              width: auto;
            }
            .plano-de-negocio-header {
              height: 203px;
            }
            .plano-de-negocio-text05 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .plano-de-negocio-text06 {
              color: rgb(238, 233, 254);
              width: 343px;
              padding-right: 39px;
            }
            .plano-de-negocio-iframe {
              right: -328px;
              width: 385px;
              bottom: -90px;
              height: 291px;
              position: static;
            }
            .plano-de-negocio-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .plano-de-negocio-right1 {
              align-self: stretch;
            }
            .plano-de-negocio-branding {
              width: 100%;
            }
            .plano-de-negocio-text22 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
            .plano-de-negocio-text23 {
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

export default PlanoDeNegocio
