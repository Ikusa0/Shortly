import Footer from '@/presentation/components/footer/footer'
import Header from '@/presentation/components/header/header'
import React from 'react'
import Presentation from './components/presentation/presentation'
import SmallPresentation from './components/small-presentation/small-presentation'
import Statistics from './components/statistics/statistics'
import UrlShortenerForm from './components/url-shortener-form/url-shortener-form'
import Styles from './landing-styles.module.scss'

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <article className={Styles.landing}>
        <Presentation />
        <UrlShortenerForm />
        <Statistics />
        <SmallPresentation />
      </article>
      <Footer />
    </>
  )
}

export default Landing
