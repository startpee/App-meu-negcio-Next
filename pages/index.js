import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Startpee</title>
          <meta
            name="description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta property="og:title" content="Startpee" />
          <meta
            property="og:description"
            content="Somos uma startup desenvolvedora de novos negócios"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db3eb164-debe-4ab3-9f10-ac025b773942/73f729d7-91dd-4017-818e-368aee5329a4?org_if_sml=1"
          />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/startpee-1200w.png"
                className="home-logo"
              />
              <div className="home-links">
                <span className="home-text">Sobre</span>
                <span className="home-text001">Aplicativo</span>
                <a
                  href="https://www.reclameaqui.com.br/empresa/startpee/"
                  className="home-link"
                >
                  Reclame aqui
                </a>
                <span className="home-text002">Localização</span>
                <span className="home-text003">trabalhe aqui</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="home-link01"
                >
                  Fale conosco
                </a>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/startpee-1200w.png"
                    className="home-logo1"
                  />
                  <div className="home-links1">
                    <a href="#servi" className="home-link02 Link">
                      Soluções
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="home-link03 Link"
                    >
                      Fale conosco
                    </a>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      className="home-link04 Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="home-right">
                  <span className="home-sign-in Link">Sign in</span>
                  <div className="home-get-started">
                    <span className="home-text004">Contratar</span>
                  </div>
                  <div id="open-mobile-menu" className="home-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-yxbd.svg"
                      className="home-mobile-menu-button"
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
          <header className="home-header">
            <h1 className="home-text005">Nosso diferencial </h1>
            <p className="home-text006">
              Se você não tem dinheiro podemos mesmo assim te ajudar
            </p>
          </header>
          <iframe
            src="https://www.youtube.com/embed/tk6ZiAca-8Y"
            allowFullScreen
            className="home-iframe"
          ></iframe>
        </section>
        <section className="home-features">
          <div className="home-title">
            <span className="home-text007">
              <span>
                Let&apos;s grow your social media
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>presence</span>
            </span>
            <span className="home-text011">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>eiusmod tempor incididunt.</span>
            </span>
          </div>
          <div className="home-cards">
            <div className="home-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="home-icon02"
                />
                <span className="home-text014">Schedule</span>
                <span className="home-text015">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="home-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="home-icon03"
                />
                <span className="home-text016">Publish</span>
                <span className="home-text017">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="home-container2">
              <div className="card home-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="home-icon04"
                />
                <span className="home-text018">Analyze</span>
                <span className="home-text019">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="home-icon05"
                />
                <span className="home-text020">Get leads</span>
                <span className="home-text021">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-quote-container">
          <div className="home-quote">
            <span className="home-message">
              “vai chegar um dia na qual você descobri que Existe infinitas
              possibilidades que as pessoas não estão enxergando,que só você
              consegue enxergar”
            </span>
            <div className="home-author">
              <img
                alt="image"
                src="/playground_assets/lopj-200w.png"
                className="home-avatar"
              />
              <span className="home-quote1">
                <span className="home-text022">—  Francisco júnior</span>
                <span>, Fundador CEO, App meu negócio</span>
              </span>
            </div>
          </div>
        </section>
        <section className="home-statistics">
          <div className="home-container3">
            <ActiveUsers
              Caption="— Active users"
              Statistic="3.5M"
            ></ActiveUsers>
            <ActiveUsers Caption="— Brands" Statistic="50k"></ActiveUsers>
            <ActiveUsers
              Caption="— Accounts Managed"
              Statistic="250K"
            ></ActiveUsers>
            <ActiveUsers Caption="— Active leads" Statistic="30M"></ActiveUsers>
          </div>
        </section>
        <section className="home-banners">
          <div className="home-banner-manage">
            <div className="home-container4">
              <div className="home-left1">
                <span className="sub-title">Content Management</span>
                <span className="home-text025 title">
                  Manage all your platforms in just one place.
                </span>
                <span className="home-text026">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started1 template-button">
                  <span className="home-text027">Get started</span>
                </div>
              </div>
              <div className="home-image-container">
                <img
                  alt="pastedImage"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-cards-image"
                />
              </div>
            </div>
          </div>
          <div className="home-banner-advanced-analytics">
            <div className="home-centered-container">
              <div className="home-image-container1">
                <img
                  alt="pastedImage"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-cards-image1"
                />
              </div>
              <div className="home-right1">
                <span className="sub-title">
                  Reporting Metrics
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h2 className="home-text029 title">
                  Advanced analytics, easy to understand.
                </h2>
                <div className="home-category">
                  <span className="home-text030">Power reports</span>
                  <span className="home-text031">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                  <span className="home-text032">Example -&gt;</span>
                </div>
                <div className="home-category1">
                  <span className="home-text033">Power reports</span>
                  <span className="home-text034">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                  <span className="home-text035">Example -&gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container5">
              <div className="home-left2">
                <span className="home-text036">Improve Scheduling</span>
                <h2 className="home-text037 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="home-text038">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started2 template-button">
                  <span className="home-text039">Get started</span>
                </div>
              </div>
              <div className="home-image-container2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                  className="home-cards-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-integrations">
          <div className="home-centered-container1">
            <div className="home-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="home-text042">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="home-pills-container">
              <div className="home-pills">
                <div className="home-container6">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="home-container7">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-how-it-works">
          <div className="home-centered-container2">
            <div className="home-heading1">
              <span className="home-text043">Nosso serviço</span>
              <span className="home-text044 title">
                Para contratar é apenas 3 passos 
              </span>
            </div>
            <div className="home-category2">
              <div className="home-headng">
                <span className="home-text045">1 . Escolher um serviço</span>
                <span className="home-text046">
                  Plano de negócios, Marketing, Vendas online
                </span>
              </div>
              <div className="home-container8">
                <img
                  alt="pastedImage"
                  src="/playground_assets/self-service-400h.png"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-row">
              <div className="home-category3">
                <div className="home-headng1">
                  <span className="home-text047">2 . reunião </span>
                  <span className="home-text048">
                    <span>
                      essa conversa é importante para entender as suas
                      necessidades é bem rápido pelo whatsapp por uma ligação.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-category4">
                <div className="home-headng2">
                  <span className="home-text051">3 . Proposta</span>
                  <span className="home-text052">
                    Apartir da conversa criamos uma proposta de serviço de
                    acordo com a sua realidade.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-get-started3 template-button">
            <span className="home-text053">Começar</span>
          </div>
        </section>
        <section id="servi" className="home-pricing">
          <div className="home-centered-container3">
            <div className="home-heading2">
              <span className="home-text054 title">
                Nosso principais serviços
              </span>
              <span className="home-text055">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
            </div>
            <div className="home-cards1">
              <div className="home-card">
                <span className="home-text056">Vendas online</span>
                <span className="home-text057">
                  <span className="home-text058">
                    Não dependa mais de plataformas de vendas
                  </span>
                  <br></br>
                </span>
                <Link href="/e-commerce">
                  <a className="home-link05">
                    <div className="home-get-started4 template-button">
                      <span className="home-text060">Ver video</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="home-card1">
                <span className="home-text061">Plano de negócios</span>
                <span className="home-text062">
                  <span>Descubra o ponto fraco da concorrência</span>
                  <br></br>
                </span>
                <div className="home-get-started5 template-button">
                  <Link href="/plano-de-negocio">
                    <a className="home-link06">
                      <span>Ver video</span>
                      <br></br>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text067">Marketing</span>
                <span className="home-text068">
                  <span>
                    não precisa pagar nenhum gestor de tráfego
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text070"></br>
                  <br></br>
                  <br className="home-text072"></br>
                  <br></br>
                  <br></br>
                </span>
                <Link href="/marketing">
                  <a className="home-link07">
                    <div className="home-get-started6 template-button">
                      <span className="home-text075">
                        <span>Ver video</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonals">
          <div className="home-left3">
            <span className="home-text078">Testimonals</span>
            <span className="home-text079 title">
              What people say about Active
            </span>
          </div>
          <div className="home-right2">
            <div className="home-column">
              <Testimonal
                Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
                Avatar_src="/playground_assets/image552912-e3yq-200h.png"
              ></Testimonal>
              <Testimonal
                From="Social Club"
                Name="Jessica Smith"
                Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
                Avatar_src="/playground_assets/image312912-mvsg-200h.png"
              ></Testimonal>
              <Testimonal
                From="BeMe"
                Name="Logan Boy"
                Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
                Avatar_src="/playground_assets/image502912-6wy-200h.png"
              ></Testimonal>
              <Testimonal
                From="Hello W."
                Name="Laraine Summers"
                Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
                Avatar_src="/playground_assets/image202912-zekh-200h.png"
              ></Testimonal>
            </div>
            <div className="home-column1">
              <Testimonal
                From="Handsly"
                Name="William McPau"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                Avatar_src="/playground_assets/image572912-0d3-200h.png"
              ></Testimonal>
              <Testimonal
                From="Share"
                Name="Mariah Mae"
                Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                Avatar_src="/playground_assets/image632913-swij-200h.png"
              ></Testimonal>
              <Testimonal
                From="Gather"
                Name="John Finati"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
                Avatar_src="/playground_assets/image102913-x4z8-200h.png"
              ></Testimonal>
              <Testimonal
                From="Zigo"
                Name="Mary Pau"
                Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
                Avatar_src="/playground_assets/image562913-ycff-200h.png"
              ></Testimonal>
            </div>
          </div>
          <span className="home-text080">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="home-action-bar">
          <div className="home-action">
            <div className="home-heading3">
              <span className="home-text083 title">
                Comece o seu negócio sem medo!
              </span>
              <span className="home-text084">
                Te ajudamos a planejar da forma mais simples 
              </span>
              <div className="home-get-started7 template-button">
                <span className="home-text085">
                  <span>Acessar</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-images">
              <img
                alt="image"
                src="/playground_assets/nmm%20%5B1%5D-1200w.png"
                className="home-image"
              />
            </div>
          </div>
        </section>
        <section className="home-f-a-q">
          <div className="home-heading4">
            <span className="home-text088 title">Perguntas frequentes</span>
            <span className="home-text089">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text090">
                  — Quanto custa o serviço ?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text091">
                  serve para dar um direcionamento de acordo com a realidade do
                  empreendedor com planejamentos com metodologias que
                  transformar um pequeno negócio em uma empresa.
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header2">
                <span className="home-text092">
                  — Quanto custa o plano de negócios?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text093">
                  <span>o preço é de acordo com a realidade da pessoa.</span>
                  <br></br>
                  <span>
                    desenvolvemos em 3 fases o plano de negócios:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>1- plano para negócio existir</span>
                  <br></br>
                  <span>2- o plano para o negócio sobreviver</span>
                  <br></br>
                  <span>3- o plano tornar empresa. </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header3">
                <span className="home-text104">
                  — quais serviços oferece?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text105">
                  <span>
                    Nosso foco está apenas na base de todo negócio que é o
                    business plan
                  </span>
                  <br></br>
                  <span>atualmente oferecemos 3 serviços:</span>
                  <br></br>
                  <span>- plano de negócio</span>
                  <br></br>
                  <span>- e-commerce</span>
                  <br></br>
                  <span>- marketing </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></DangerousHTML>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-right3">
              <div className="home-category5">
                <span className="home-text116">Soluções </span>
                <div className="home-links2">
                  <Link href="/plano-de-negocio">
                    <a className="home-link08">Plano de negócios</a>
                  </Link>
                  <Link href="/e-commerce">
                    <a className="home-link09">Vendas online</a>
                  </Link>
                  <Link href="/marketing">
                    <a className="home-link10">Marketing</a>
                  </Link>
                  <Link href="/instagram-shop">
                    <a className="home-link11">Instagram shop</a>
                  </Link>
                  <Link href="/automatizar">
                    <a className="home-link12">Automatizar</a>
                  </Link>
                </div>
              </div>
              <div className="home-category6">
                <span className="home-text117">Empresa</span>
                <div className="home-links3">
                  <span className="home-text118">Sobre</span>
                  <span className="home-text119">Aplicativo</span>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="home-link13"
                  >
                    Reclame aqui
                  </a>
                  <span className="home-text120">Localização</span>
                  <span className="home-text121">trabalhe aqui</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="home-link14"
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
              <div className="home-category7">
                <span className="home-text122">Conteúdos </span>
                <div className="home-links4">
                  <span className="home-text123">Youtube</span>
                  <a
                    href="https://www.linkedin.com/company/startpee"
                    className="home-link15"
                  >
                    Linkedin
                  </a>
                  <span className="home-text124">Pinterest</span>
                  <a
                    href="https://www.instagram.com/appmeunegocio/"
                    className="home-link16"
                  >
                    Instagram
                  </a>
                  <span className="home-text125">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/startpee-1200w.png"
              className="home-branding"
            />
            <span className="home-text126">
              CNPJ 20.369.543/0001-98 São Paulo- SP
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text127">Copyright © Startpee- 2023</span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
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
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
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
          .home-logo {
            width: 64px;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text001 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text002 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text003 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link01 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-close-mobile-menu {
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
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
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
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-logo1 {
            width: auto;
            height: 57px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-link04 {
            text-decoration: none;
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-sign-in {
            display: none;
            margin-right: 20px;
          }
          .home-get-started {
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
          .home-get-started:hover {
            background-color: #5228f5;
          }
          .home-text004 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .home-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .home-text005 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text006 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-iframe {
            width: 618px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-features {
            width: 100%;
            display: none;
            z-index: 1;
            align-items: center;
            padding-top: 400px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: EFF0F2;
          }
          .home-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text007 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-text011 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text014 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text015 {
            line-height: 24px;
          }
          .home-publish {
            height: initial;
          }
          .home-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text016 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text017 {
            line-height: 24px;
          }
          .home-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .home-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text018 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text019 {
            line-height: 24px;
          }
          .home-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text020 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text021 {
            line-height: 24px;
          }
          .home-quote-container {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: #000000;
          }
          .home-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            flex-direction: column;
            justify-content: center;
          }
          .home-message {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 31px;
          }
          .home-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
          }
          .home-quote1 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text022 {
            font-style: normal;
            font-weight: 600;
          }
          .home-statistics {
            width: 100%;
            height: 264px;
            display: none;
            align-items: center;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            justify-content: center;
            background-color: #5228f5;
          }
          .home-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-banner-manage {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text025 {
            text-align: left;
          }
          .home-text026 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started1 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text027 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-image-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cards-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .home-banner-advanced-analytics {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            justify-content: center;
          }
          .home-image-container1 {
            flex: 1;
            display: flex;
          }
          .home-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text029 {
            text-align: left;
          }
          .home-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text030 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text031 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text032 {
            color: #5228f5;
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .home-text032:hover {
            color: #000000;
          }
          .home-category1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text033 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text034 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text035 {
            color: #5228f5;
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .home-text035:hover {
            color: #000000;
          }
          .home-banner {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text036 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text037 {
            text-align: left;
          }
          .home-text038 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started2 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text039 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image2 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text042 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-container6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .home-container7 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-how-it-works {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #5847ab;
          }
          .home-centered-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text043 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text044 {
            color: var(--dl-color-gray-white);
          }
          .home-category2 {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: #51b6fa;
          }
          .home-headng {
            flex: 1;
            display: flex;
            align-self: flex-end;
            align-items: center;
            margin-left: var(--dl-space-space-fiveunits);
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text045 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text046 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-container8 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-pasted-image {
            flex: 0 0 auto;
            width: 328px;
            height: 330px;
            display: none;
            object-fit: contain;
          }
          .home-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .home-category3 {
            flex: 1;
            color: white;
            height: 301px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text047 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text048 {
            color: rgb(30, 30, 30);
            font-size: 18px;
            line-height: 24px;
          }
          .home-category4 {
            flex: 1;
            color: white;
            height: 325px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .home-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text051 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text052 {
            color: rgb(238, 233, 254);
            font-size: 18px;
            line-height: 24px;
          }
          .home-get-started3 {
            width: 201px;
            height: 71px;
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: 0px;
          }
          .home-get-started3:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text053 {
            width: 100%;
            height: 100%;
            font-size: 25px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-pricing {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #51b6fa;
          }
          .home-centered-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text054 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text055 {
            color: #eee9fe;
            width: 600px;
            display: none;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-card {
            flex: 1;
            height: 461px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text056 {
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text057 {
            color: rgb(0, 0, 0);
            text-align: center;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link05 {
            display: contents;
          }
          .home-get-started4 {
            align-self: center;
            margin-top: 82px;
            transition: 0.3s;
            margin-bottom: 36px;
            text-decoration: none;
          }
          .home-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text060 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-card1 {
            flex: 1;
            height: 463px;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text061 {
            font-size: 32px;
            font-style: normal;
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text062 {
            color: rgb(0, 0, 0);
            text-align: center;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started5 {
            height: 56px;
            align-self: center;
            margin-top: 58px;
            transition: 0.3s;
          }
          .home-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-link06 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            text-decoration: none;
          }
          .home-card2 {
            flex: 1;
            height: 463px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-text067 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text068 {
            color: rgb(255, 255, 255);
            text-align: center;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text070 {
            color: #ffffff;
            line-height: 24px;
          }
          .home-text072 {
            color: #ffffff;
            line-height: 24px;
          }
          .home-link07 {
            display: contents;
          }
          .home-get-started6 {
            color: var(--dl-color-gray-black);
            align-self: center;
            transition: 0.3s;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-get-started6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text075 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-left3 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text078 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text079 {
            text-align: left;
          }
          .home-right2 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .home-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-text080 {
            cursor: pointer;
            display: none;
          }
          .home-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #765cfb;
          }
          .home-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .home-text083 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .home-text084 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started7 {
            margin-bottom: 0px;
          }
          .home-text085 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .home-f-a-q {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-heading4 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .home-text088 {
            text-align: center;
          }
          .home-text089 {
            color: rgb(0, 0, 0);
            width: 100%;
            display: none;
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: 505px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text090 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text091 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text092 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text093 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text104 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text105 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-footer {
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
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-right3 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category5 {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-text116 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link08 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
          }
          .home-link09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link10 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-category6 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text117 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            height: 206px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text118 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text119 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link13 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text120 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text121 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-category7 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .home-text122 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text123 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text124 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text125 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-branding {
            width: auto;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text126 {
            color: var(--dl-color-gray-900);
            font-size: 14px;
            line-height: 30px;
          }
          .home-text127 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-space-space-unit);
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo1 {
              width: auto;
            }
            .home-links1 {
              display: none;
            }
            .home-sign-in {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-mobile-menu-button {
              display: flex;
            }
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-iframe {
              width: 621px;
              height: 347px;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text007 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-text011 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text015 {
              line-height: 21px;
            }
            .home-text017 {
              line-height: 21px;
            }
            .home-text019 {
              line-height: 21px;
            }
            .home-text020 {
              font-size: 24px;
            }
            .home-text021 {
              line-height: 21px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .home-message {
              width: 100%;
              max-width: 800px;
            }
            .home-author {
              width: 100%;
              max-width: 800px;
            }
            .home-statistics {
              height: 800px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              height: 100%;
              flex-direction: column;
            }
            .home-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-left1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-cards-image {
              width: 360px;
            }
            .home-banner-advanced-analytics {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container7 {
              margin-left: 0px;
            }
            .home-category2 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-headng {
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-container8 {
              width: 100%;
            }
            .home-pasted-image {
              height: auto;
            }
            .home-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-text055 {
              width: 100%;
              max-width: 600px;
            }
            .home-cards1 {
              display: flex;
              flex-direction: column;
            }
            .home-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text057 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text058 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .home-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .home-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .home-left3 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .home-text079 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-right2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-action {
              flex-direction: column;
            }
            .home-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text083 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-right3 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
            }
            .home-links3 {
              gap: var(--dl-space-space-unit);
            }
            .home-links4 {
              gap: var(--dl-space-space-unit);
            }
            .home-branding {
              width: 100%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text126 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .home-text127 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: #775cfc;
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-logo1 {
              width: auto;
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-sign-in {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text005 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text006 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-iframe {
              right: 205px;
              width: 347px;
              bottom: -41px;
              height: 242px;
              position: absolute;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text007 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text014 {
              font-size: 24px;
            }
            .home-text015 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text016 {
              font-size: 24px;
            }
            .home-text017 {
              font-size: 14px;
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text018 {
              font-size: 24px;
            }
            .home-text019 {
              font-size: 14px;
            }
            .home-text021 {
              font-size: 14px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-message {
              font-size: 24px;
              line-height: 31px;
            }
            .home-author {
              width: 100%;
            }
            .home-avatar {
              width: 40px;
              height: 40px;
            }
            .home-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-statistics {
              height: 100%;
            }
            .home-container3 {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container4 {
              flex-direction: column;
            }
            .home-left1 {
              margin-right: 0px;
            }
            .home-text025 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text026 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text027 {
              font-size: 16px;
            }
            .home-image-container {
              justify-content: center;
            }
            .home-cards-image {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-centered-container {
              flex-direction: column-reverse;
            }
            .home-right1 {
              margin-left: 0px;
            }
            .home-text029 {
              font-size: 28px;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text030 {
              font-size: 20px;
            }
            .home-text031 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text033 {
              font-size: 20px;
            }
            .home-text034 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container5 {
              flex-direction: column;
            }
            .home-left2 {
              margin-right: 0px;
            }
            .home-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text042 {
              line-height: 24px;
            }
            .home-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text044 {
              margin-bottom: 0px;
            }
            .home-headng {
              align-self: center;
              padding-bottom: 0px;
            }
            .home-container8 {
              width: 100%;
            }
            .home-row {
              height: auto;
              flex-direction: column;
            }
            .home-headng1 {
              height: 185px;
              align-self: center;
            }
            .home-headng2 {
              align-self: center;
              margin-bottom: 30px;
            }
            .home-text051 {
              color: rgb(255, 255, 255);
              font-size: 27px;
              font-style: normal;
              font-weight: 700;
            }
            .home-get-started3 {
              display: none;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              align-items: center;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text056 {
              font-size: 28px;
            }
            .home-card1 {
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text061 {
              font-size: 28px;
            }
            .home-card2 {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text067 {
              font-size: 28px;
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .home-right2 {
              width: 100%;
              flex-direction: column;
            }
            .home-column1 {
              display: none;
            }
            .home-text080 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .home-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-action {
              align-items: center;
            }
            .home-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text083 {
              font-size: 28px;
              text-align: left;
            }
            .home-text085 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-images {
              justify-content: center;
            }
            .home-image {
              width: 100%;
            }
            .home-f-a-q {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading4 {
              width: 100%;
            }
            .home-text088 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-text089 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text093 {
              line-height: 24px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-branding {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 892px;
              padding-bottom: 160px;
              background-color: #775cfc;
            }
            .home-logo {
              margin-left: 0px;
            }
            .home-links {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-icon {
              align-items: center;
              justify-content: center;
            }
            .home-logo1 {
              width: auto;
            }
            .home-header {
              height: 203px;
            }
            .home-text005 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text006 {
              color: rgb(238, 233, 254);
              width: 343px;
              padding-right: 39px;
            }
            .home-iframe {
              right: -328px;
              width: 385px;
              bottom: -90px;
              height: 291px;
              position: static;
            }
            .home-features {
              padding-top: 200px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-quote1 {
              color: var(--dl-color-gray-900);
              font-size: 14px;
            }
            .home-text022 {
              font-style: normal;
              font-weight: 600;
            }
            .home-statistics {
              height: 500px;
            }
            .home-text026 {
              line-height: 24px;
            }
            .home-cards-image {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .home-category2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text045 {
              font-size: 27px;
            }
            .home-headng1 {
              height: 307px;
            }
            .home-text047 {
              color: rgb(0, 0, 0);
              font-size: 27px;
              font-style: normal;
              font-weight: 700;
            }
            .home-headng2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text051 {
              color: rgb(255, 255, 255);
              font-size: 27px;
              font-style: normal;
              font-weight: 700;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text062 {
              color: rgb(0, 0, 0);
              line-height: 24px;
            }
            .home-get-started6 {
              background-color: var(--dl-color-gray-white);
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-get-started7 {
              align-self: center;
              align-items: flex-end;
              justify-content: center;
            }
            .home-text085 {
              text-align: center;
            }
            .home-text093 {
              line-height: 24px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-right3 {
              align-self: stretch;
            }
            .home-branding {
              width: 100%;
            }
            .home-text126 {
              color: rgb(104, 104, 104);
              font-size: 12px;
              line-height: 25px;
            }
            .home-text127 {
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

export default Home
