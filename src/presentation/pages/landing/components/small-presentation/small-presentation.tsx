import React from 'react'
import GetStartedButton from '../get-started-button/get-started-button'
import Styles from './small-presentation-styles.module.scss'

const SmallPresentation: React.FC = () => {
  return (
    <section className={Styles.smallPresentation}>
      <h2>{`Boost your links today`}</h2>
      <GetStartedButton />
    </section>
  )
}

export default SmallPresentation
