import { RoundedButton } from '@/presentation/components'
import React from 'react'
import Styles from './navigation-popup-styles.module.scss'

const NavigationPopup: React.FC = () => {
  return (
    <nav className={Styles.navigationPopup}>
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
          <RoundedButton>{`Sign Up`}</RoundedButton>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationPopup
