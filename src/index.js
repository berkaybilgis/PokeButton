import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  // type değerinin durumuna göre button tip değişikliği tanımlandı
  if (props.type === 'primary') {
    return <button className={styles.primary}>{props.text}</button>
  } else if (props.type === 'dashed') {
    return <button className={styles.dashed}>{props.text}</button>
  } else if (props.type === 'text') {
    return <button className={styles.text}>{props.text}</button>
  } else if (props.type === 'link') {
    return <button className={styles.link}>{props.text}</button>
  } else return <button className={styles.default}>{props.text}</button>
}
