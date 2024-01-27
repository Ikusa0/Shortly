import React from 'react'
import Styles from './rounded-button-styles.module.scss'

type PropsType = {
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const RoundedButton: React.FC<PropsType> = (props: PropsType) => {
  const { className, ...rest } = props

  return (
    <button
      {...rest}
      className={`${Styles.roundedButton} ${className}`}
    />
  )
}

export default RoundedButton
