import { LogoSVG } from '@/presentation/images'
import React from 'react'
import {
  IoLogoFacebook as FacebookICON,
  IoLogoInstagram as InstagramICON,
  IoLogoPinterest as PinterestICON,
  IoLogoTwitter as TwitterICON
} from 'react-icons/io'
import Styles from './footer-styles.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
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
  )
}

export default Footer
