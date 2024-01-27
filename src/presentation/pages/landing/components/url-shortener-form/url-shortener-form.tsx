import { RoundedButton } from '@/presentation/components'
import React from 'react'
import Styles from './url-shortener-form-styles.module.scss'

const UrlShortenerForm: React.FC = () => {
  return (
    <section className={Styles.urlShortenerForm}>
      <form action="">
        <input
          type="text"
          placeholder="Shorten a link here..."
        />
        <RoundedButton className={Styles.submitButton}>{`Shorten it!`}</RoundedButton>
      </form>
    </section>
  )
}

export default UrlShortenerForm
