import { WorkingIllustrationSVG } from '@/presentation/images'
import React from 'react'
import GetStartedButton from '../get-started-button/get-started-button'
import Styles from './presentation-styles.module.scss'

const Presentation: React.FC = () => {
  return (
    <section className={Styles.presentation}>
      <div className={Styles.imageWrapper}>
        <WorkingIllustrationSVG className={Styles.image} />
      </div>
      <div className={Styles.textWrapper}>
        <h1>{`More than just shorter links`}</h1>
        <p>
          {`Build your brand's recognition and get detailed insights on how your links are
            performing`}
        </p>
        <GetStartedButton />
      </div>
    </section>
  )
}

export default Presentation
