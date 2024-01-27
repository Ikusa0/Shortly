import { Footer, Header } from '@/presentation/components'
import React from 'react'
import { Presentation, SmallPresentation, Statistics, UrlShortenerForm } from './components'
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
