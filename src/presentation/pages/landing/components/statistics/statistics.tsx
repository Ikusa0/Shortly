import {
  BrandRecognitionIconSVG,
  DetailedRecordsIconSVG,
  FullyCustomizableIconSVG
} from '@/presentation/images'
import React from 'react'
import Styles from './statistics-styles.module.scss'

const Statistics: React.FC = () => {
  return (
    <section className={Styles.statistics}>
      <div className={Styles.textWrapper}>
        <h2>{`Advanced Statistics`}</h2>
        <p>{`Track how your links are performing across the web with our advanced statistics dashboard.`}</p>
      </div>
      <article className={Styles.card}>
        <div className={Styles.iconWrapper}>
          <BrandRecognitionIconSVG className={Styles.icon} />
        </div>
        <div className={Styles.textWrapper}>
          <h3>{`Brand Recognition`}</h3>
          <p>{`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.`}</p>
        </div>
      </article>
      <article className={Styles.card}>
        <div className={Styles.iconWrapper}>
          <DetailedRecordsIconSVG className={Styles.icon} />
        </div>
        <div className={Styles.textWrapper}>
          <h3>{`Detailed Records`}</h3>
          <p>{`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}</p>
        </div>
      </article>
      <article className={Styles.card}>
        <div className={Styles.iconWrapper}>
          <FullyCustomizableIconSVG className={Styles.icon} />
        </div>
        <div className={Styles.textWrapper}>
          <h3>{`Fully Customizable`}</h3>
          <p>{`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}</p>
        </div>
      </article>
    </section>
  )
}

export default Statistics
