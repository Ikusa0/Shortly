import { RoundedButton } from '@/presentation/components'
import React from 'react'
import Styles from './navigation-styles.module.scss'

const Navigation: React.FC = () => {
  return (
    <nav className={Styles.navigation}>
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

export default Navigation
