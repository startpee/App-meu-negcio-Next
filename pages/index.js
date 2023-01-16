import React from 'react'
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
          <title>App meu negócio</title>
          <meta property="og:title" content="App meu negócio" />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-no9b-1500h.png"
                className="home-logo"
              />
              <div className="home-links">
                <span className="Link">Solutions</span>
                <span className="Link">How it works</span>
                <span className="Link">Prices</span>
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
                    src="/playground_assets/appmn%20%5B2%5D-1200w.png"
                    className="home-logo1"
                  />
                  <div className="home-links1">
                    <span className="Link">Soluções</span>
                    <span className="Link">Fale conosco</span>
                    <a
                      href="https://open.spotify.com/show/6v5Qp09reNLm5gWmySugNz"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link Link"
                    >
                      Podcast
                    </a>
                  </div>
                </div>
                <div className="home-right">
                  <span className="home-sign-in Link">Sign in</span>
                  <div className="home-get-started">
                    <span className="home-text005">Contratar</span>
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
            <h1 className="home-text006">Esteja no controle do seu negócio</h1>
            <p className="home-text007">
              Gerenciar o próprio negócio se tornou muito mais fácil 
            </p>
          </header>
          <div className="home-dashboard-preview">
            <iframe
              src="https://www.youtube.com/embed/DeQkMK5LME4"
              className="home-iframe"
            ></iframe>
            <div className="home-get-started1">
              <span className="home-text008">Get started</span>
            </div>
          </div>
        </section>
        <section className="home-features">
          <div className="home-title">
            <span className="home-text009">
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
            <span className="home-text013">
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
                <span className="home-text016">Schedule</span>
                <span className="home-text017">
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
                <span className="home-text018">Publish</span>
                <span className="home-text019">
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
                <span className="home-text020">Analyze</span>
                <span className="home-text021">
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
                <span className="home-text022">Get leads</span>
                <span className="home-text023">
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
                <span className="home-text024">—  Francisco júnior</span>
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
                <span className="home-text027 title">
                  Manage all your platforms in just one place.
                </span>
                <span className="home-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started2 template-button">
                  <span className="home-text029">Get started</span>
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
                <h2 className="home-text031 title">
                  Advanced analytics, easy to understand.
                </h2>
                <div className="home-category">
                  <span className="home-text032">Power reports</span>
                  <span className="home-text033">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                  <span className="home-text034">Example -&gt;</span>
                </div>
                <div className="home-category1">
                  <span className="home-text035">Power reports</span>
                  <span className="home-text036">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                  <span className="home-text037">Example -&gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container5">
              <div className="home-left2">
                <span className="home-text038">Improve Scheduling</span>
                <h2 className="home-text039 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="home-text040">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started3 template-button">
                  <span className="home-text041">Get started</span>
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
              <span className="home-text044">
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
              <span className="home-text045">How it works</span>
              <span className="home-text046 title">
                Nós te ajudamos a começar ou a melhorar o seu negócio em apenas
                3 passos 
              </span>
            </div>
            <div className="home-category2">
              <div className="home-headng">
                <span className="home-text047">1 — Escolher um serviço</span>
                <span className="home-text048">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started4 template-button">
                  <span className="home-text049">Get started</span>
                </div>
              </div>
              <div className="home-container8">
                <img
                  alt="pastedImage"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-row">
              <div className="home-category3">
                <div className="home-headng1">
                  <span className="home-text050">2 — reuinão </span>
                  <span className="home-text051">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="home-pasted-image1"
                />
              </div>
              <div className="home-category4">
                <div className="home-headng2">
                  <span className="home-text052">2 — Proposta</span>
                  <span className="home-text053">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-pricing">
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
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="home-get-started5 template-button">
                  <span className="home-text058">Saiba mais </span>
                </div>
                <span className="home-text059">What&apos;s included</span>
                <div className="home-bullet-points">
                  <div className="home-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text060">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text061">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <span className="home-text062">Plano de negócios</span>
                <span className="home-text063">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="home-get-started6 template-button">
                  <span className="home-text067">
                    <span>Saiba mais</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text070">What&apos;s included</span>
                <div className="home-bullet-points1">
                  <div className="home-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text071">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text072">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text073">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text074">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text075">Marketing</span>
                <span className="home-text076">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="home-get-started7 template-button">
                  <span className="home-text079">
                    <span>Saiba mais</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text082">What&apos;s included</span>
                <div className="home-bullet-points2">
                  <div className="home-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text083">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text084">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text085">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text086">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonals">
          <div className="home-left3">
            <span className="home-text087">Testimonals</span>
            <span className="home-text088 title">
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
          <span className="home-text089">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="home-action-bar">
          <div className="home-action">
            <div className="home-heading3">
              <span className="home-text092 title">
                Comece o seu negócio sem medo!
              </span>
              <span className="home-text093">
                Te ajudamos a planejar da forma mais simples 
              </span>
              <div className="home-get-started8 template-button">
                <span className="home-text094">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="home-image"
              />
            </div>
          </div>
        </section>
        <section className="home-f-a-q">
          <div className="home-heading4">
            <span className="home-text097 title">Perguntas frequentes</span>
            <span className="home-text098">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text099">
                  — Pra que serve o app meu negócio?
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
                <span className="home-text100">
                  serve para dar um direcionamento de acordo com a realidade do
                  empreendedor com planejamentos com metodologias que
                  transformar um pequeno negócio em uma empresa.
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header2">
                <span className="home-text101">
                  — Quanto custa o plano de negócios?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text102">
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
                <span className="home-text113">
                  — quais serviços o app oferece?
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
                <span className="home-text114">
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
                <span className="home-text125">Soluções </span>
                <div className="home-links2">
                  <span className="home-text126">Plano de negócios</span>
                  <span className="home-text127">Vendas online</span>
                  <span className="home-text128">Marketing</span>
                  <span className="home-text129">Instagram shop</span>
                  <span className="home-text130">Automatizar</span>
                </div>
              </div>
              <div className="home-category6">
                <span className="home-text131">Empresa</span>
                <div className="home-links3">
                  <span className="home-text132">Sobre</span>
                  <span className="home-text133">Aplicativo</span>
                  <span className="home-text134">Reclame aqui</span>
                  <span className="home-text135">Localização</span>
                  <span className="home-text136">trabalhe aqui</span>
                  <span className="home-text137">Fale conosco</span>
                </div>
              </div>
              <div className="home-category7">
                <span className="home-text138">Conteúdos </span>
                <div className="home-links4">
                  <span className="home-text139">Youtube</span>
                  <span className="home-text140">Linkedin</span>
                  <span className="home-text141">Pinterest</span>
                  <span className="home-text142">Instagram</span>
                  <span className="home-text143">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/playground_assets/appmn%20%5B2%5D-1200w.png"
              className="home-branding"
            />
            <span className="home-text144">
              Copyright © App meu negócio - 2022
            </span>
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
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
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
          .home-link {
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
          .home-text005 {
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
          .home-text006 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text007 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-dashboard-preview {
            top: 550px;
            left: 231px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #633df6;
            border-width: 0px;
            border-radius: 100px;
            flex-direction: column;
            background-color: #775cfc;
          }
          .home-iframe {
            width: 705px;
            height: 349px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started1 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text008 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-features {
            width: 100%;
            display: flex;
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
          .home-text009 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-text013 {
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
          .home-publish {
            height: initial;
          }
          .home-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text018 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text019 {
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
          .home-text020 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text021 {
            line-height: 24px;
          }
          .home-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text022 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text023 {
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
            color: rgb(151, 126, 249);
            width: 100%;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text024 {
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
            display: flex;
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
          .home-text027 {
            text-align: left;
          }
          .home-text028 {
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
          .home-text029 {
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
            display: flex;
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
          .home-text031 {
            text-align: left;
          }
          .home-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text032 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text033 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text034 {
            color: #5228f5;
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .home-text034:hover {
            color: #000000;
          }
          .home-category1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text035 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text036 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text037 {
            color: #5228f5;
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .home-text037:hover {
            color: #000000;
          }
          .home-banner {
            width: 100%;
            display: flex;
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
          .home-text038 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text039 {
            text-align: left;
          }
          .home-text040 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started3 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text041 {
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
            display: flex;
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
          .home-text044 {
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
          .home-text045 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text046 {
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
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text047 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text048 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-get-started4 {
            margin-bottom: 0px;
          }
          .home-get-started4:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text049 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
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
            width: 100%;
            height: 100%;
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
            height: 555px;
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
          .home-text050 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text051 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .home-pasted-image1 {
            width: 100%;
          }
          .home-category4 {
            flex: 1;
            color: white;
            height: 555px;
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
          .home-text052 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text053 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .home-pasted-image2 {
            width: 100%;
            object-fit: contain;
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
            height: 100%;
            display: flex;
            align-items: flex-start;
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
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text057 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started5 {
            transition: 0.3s;
          }
          .home-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text058 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text059 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon06 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text060 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text061 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card1 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text062 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text063 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started6 {
            transition: 0.3s;
          }
          .home-get-started6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text067 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text070 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text071 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text072 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text073 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text074 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-text075 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text076 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started7 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .home-get-started7:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text079 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text082 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text083 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text084 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text085 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text086 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
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
          .home-text087 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text088 {
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
          .home-text089 {
            cursor: pointer;
            display: none;
          }
          .home-action-bar {
            width: 100%;
            display: flex;
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
          .home-text092 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .home-text093 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started8 {
            margin-bottom: 0px;
          }
          .home-text094 {
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
            display: flex;
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
          .home-text097 {
            text-align: center;
          }
          .home-text098 {
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
          .home-text099 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text100 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text101 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text102 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text113 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text114 {
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
          .home-text125 {
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
          .home-text126 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .home-text127 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text128 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text129 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text130 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category6 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text131 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text132 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text133 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text134 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text135 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text136 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text137 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category7 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .home-text138 {
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
          .home-text139 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text140 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text141 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text142 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text143 {
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
          .home-text144 {
            color: #686868;
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
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
            .home-dashboard-preview {
              left: 0px;
              right: 0px;
              margin: auto;
              align-items: center;
              border-width: 0px;
              background-color: #775cfc;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text009 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-text013 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text017 {
              line-height: 21px;
            }
            .home-text019 {
              line-height: 21px;
            }
            .home-text021 {
              line-height: 21px;
            }
            .home-text022 {
              font-size: 24px;
            }
            .home-text023 {
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
            .home-text059 {
              font-size: 16px;
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
            .home-text088 {
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
            .home-text092 {
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
            .home-text144 {
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
            .home-text006 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text007 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-dashboard-preview {
              top: 520px;
              width: 90%;
              border-width: 10px;
              border-radius: 45px;
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text009 {
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
            .home-text016 {
              font-size: 24px;
            }
            .home-text017 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text018 {
              font-size: 24px;
            }
            .home-text019 {
              font-size: 14px;
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text020 {
              font-size: 24px;
            }
            .home-text021 {
              font-size: 14px;
            }
            .home-text023 {
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
            .home-text027 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text028 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text029 {
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
            .home-text031 {
              font-size: 28px;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text032 {
              font-size: 20px;
            }
            .home-text033 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text035 {
              font-size: 20px;
            }
            .home-text036 {
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
            .home-text044 {
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
            .home-text046 {
              margin-bottom: 0px;
            }
            .home-headng {
              padding-bottom: 0px;
            }
            .home-get-started4 {
              display: none;
            }
            .home-container8 {
              width: 100%;
            }
            .home-row {
              height: auto;
              flex-direction: column;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text056 {
              font-size: 28px;
            }
            .home-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text062 {
              font-size: 28px;
            }
            .home-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text075 {
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
            .home-text089 {
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
            .home-text092 {
              font-size: 28px;
              text-align: left;
            }
            .home-text094 {
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
            .home-text097 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-text098 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text102 {
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
            .home-text007 {
              color: #eee9fe;
            }
            .home-dashboard-preview {
              left: 32px;
              bottom: -307px;
              height: 756px;
              border-width: 0px;
            }
            .home-iframe {
              width: 385px;
              height: 291px;
            }
            .home-get-started1 {
              width: 100%;
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
              color: rgb(151, 126, 249);
              font-size: 14px;
            }
            .home-text024 {
              font-style: normal;
              font-weight: 600;
            }
            .home-statistics {
              height: 500px;
            }
            .home-text028 {
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
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-get-started7 {
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
            .home-text102 {
              line-height: 24px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-branding {
              width: 100%;
            }
            .home-text144 {
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
