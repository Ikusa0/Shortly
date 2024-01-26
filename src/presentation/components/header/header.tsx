import { LogoSVG } from '@/presentation/images'
import React from 'react'
import { AiOutlineMenu as MenuICON } from 'react-icons/ai'
import Styles from './header-styles.module.scss'

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <LogoSVG className={Styles.logo} />
      <MenuICON className={Styles.icon} />
    </header>
  )
}

export default Header
