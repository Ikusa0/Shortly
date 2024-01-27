import Header from '@/presentation/components/header/header'
import {
  BrandRecognitionIconSVG,
  DetailedRecordsIconSVG,
  FullyCustomizableIconSVG,
  LogoSVG
} from '@/presentation/images'
import React from 'react'
import {
  IoLogoFacebook as FacebookICON,
  IoLogoInstagram as InstagramICON,
  IoLogoPinterest as PinterestICON,
  IoLogoTwitter as TwitterICON
} from 'react-icons/io'
import GetStartedButton from './components/get-started-button/get-started-button'
import Presentation from './components/presentation/presentation'
import UrlShortenerForm from './components/url-shortener-form/url-shortener-form'
import Styles from './landing-styles.module.scss'

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <article className={Styles.landing}>
        <Presentation />
        <UrlShortenerForm />
        <section className={Styles.statistics}>
          <div className={Styles.textWrapper}>
            <h2>{`Advanced Statistics`}</h2>
            <p>{`Track how your links are performing across the web with our advanced statistics dashboard.`}</p>
          </div>
          <article className={Styles.card}>
            <div className={Styles.iconWrapper}>
              <BrandRecognitionIconSVG className={Styles.icon} />
            </div>
            <div className={Styles.textWrapper}>
              <h3>{`Brand Recognition`}</h3>
              <p>{`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.`}</p>
            </div>
          </article>
          <article className={Styles.card}>
            <div className={Styles.iconWrapper}>
              <DetailedRecordsIconSVG className={Styles.icon} />
            </div>
            <div className={Styles.textWrapper}>
              <h3>{`Detailed Records`}</h3>
              <p>{`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}</p>
            </div>
          </article>
          <article className={Styles.card}>
            <div className={Styles.iconWrapper}>
              <FullyCustomizableIconSVG className={Styles.icon} />
            </div>
            <div className={Styles.textWrapper}>
              <h3>{`Fully Customizable`}</h3>
              <p>{`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}</p>
            </div>
          </article>
        </section>
        <section className={Styles.pageEnd}>
          <article className={Styles.smallPresentation}>
            <h2>{`Boost your links today`}</h2>
            <GetStartedButton />
          </article>
          <footer>
            <LogoSVG className={Styles.logo} />
            <section className={Styles.footerItem}>
              <h5>{`Features`}</h5>
              <ul>
                <li>
                  <a href="#">{`Link Shortening`}</a>
                </li>
                <li>
                  <a href="#">{`Branded Links`}</a>
                </li>
                <li>
                  <a href="#">{`Analytics`}</a>
                </li>
              </ul>
            </section>
            <section className={Styles.footerItem}>
              <h5>{`Resources`}</h5>
              <ul>
                <li>
                  <a href="#">{`Blog`}</a>
                </li>
                <li>
                  <a href="#">{`Developers`}</a>
                </li>
                <li>
                  <a href="#">{`Support`}</a>
                </li>
              </ul>
            </section>
            <section className={Styles.footerItem}>
              <h5>{`Company`}</h5>
              <ul>
                <li>
                  <a href="#">{`About`}</a>
                </li>
                <li>
                  <a href="#">{`Our Team`}</a>
                </li>
                <li>
                  <a href="#">{`Careers`}</a>
                </li>
                <li>
                  <a href="#">{`Contact`}</a>
                </li>
              </ul>
            </section>
            <section className={`${Styles.social} ${Styles.footerItem}`}>
              <FacebookICON className={Styles.icon} />
              <TwitterICON className={Styles.icon} />
              <PinterestICON className={Styles.icon} />
              <InstagramICON className={Styles.icon} />
            </section>
          </footer>
        </section>
      </article>
    </>
  )
}

export default Landing
