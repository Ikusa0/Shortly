import { NavigationPopup } from '@/presentation/components'
import { LogoSVG } from '@/presentation/images'
import React, { useState } from 'react'
import { AiOutlineMenu as MenuICON } from 'react-icons/ai'
import NavigationHeader from '../navigation-header/navigation-header'
import Styles from './header-styles.module.scss'

type StateTypes = {
  navigation: boolean
}

const Header: React.FC = () => {
  const [state, setState] = useState<StateTypes>({
    navigation: false
  })

  const toggleNavigation = (): void => {
    setState({ navigation: !state.navigation })
  }

  return (
    <header className={Styles.header}>
      <LogoSVG className={Styles.logo} />
      <button
        onClick={toggleNavigation}
        className={Styles.menu}
      >
        <MenuICON className={Styles.icon} />
      </button>
      {state.navigation && <NavigationPopup />}
      <NavigationHeader />
    </header>
  )
}

export default Header
