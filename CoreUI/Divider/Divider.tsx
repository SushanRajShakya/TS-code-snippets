import React, { FC } from 'react'

import styles from './Divider.module.scss'

interface Props {
  text?: boolean
}

export const Divider: FC<Props> = ({ text = false }) =>
  !text ? (
    <div className={styles.divider}>
      <hr />
    </div>
  ) : (
    <div className={styles.divider}>
      <hr />
      <span>or</span>
      <hr />
    </div>
  )
