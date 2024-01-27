import React from 'react'
import { RoundedButton } from '..'
import Styles from './navigation-header-styles.module.scss'

const NavigationHeader: React.FC = () => {
  return (
    <nav className={Styles.navigationHeader}>
      <ul className={Styles.shortcuts}>
        <li>
          <a href="#">{`Features`}</a>
        </li>
        <li>
          <a href="#">{`Pricing`}</a>
        </li>
        <li>
          <a href="#">{`Resources`}</a>
        </li>
      </ul>
      <ul className={Styles.authentication}>
        <li>
          <a href="#">{`Login`}</a>
        </li>
        <li>
          <RoundedButton className={Styles.signUpButton}>{`Sign Up`}</RoundedButton>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationHeader
