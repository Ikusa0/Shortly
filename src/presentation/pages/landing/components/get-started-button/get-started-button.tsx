import { RoundedButton } from '@/presentation/components/'
import React from 'react'
import Styles from './get-started-button-styles.module.scss'

const GetStartedButton: React.FC = () => {
  return <RoundedButton className={Styles.getStartedButton}>{`Get Started`}</RoundedButton>
}

export default GetStartedButton
