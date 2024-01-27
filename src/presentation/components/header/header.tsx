import Navigation from '@/presentation/components/navigation/navigation'
import { LogoSVG } from '@/presentation/images'
import React, { useState } from 'react'
import { AiOutlineMenu as MenuICON } from 'react-icons/ai'
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
      <button onClick={toggleNavigation}>
        <MenuICON className={Styles.icon} />
      </button>
      {state.navigation && <Navigation />}
    </header>
  )
}

export default Header
