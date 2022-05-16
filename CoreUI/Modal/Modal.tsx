import React, { FC, createRef, useEffect } from 'react'

import { Button, FlexContainer, Typography } from 'Components'

import styles from './Modal.module.scss'
import { FunctionWithNoParam } from '../../../Utils/Types'

interface ModalProps {
    title?: string,
    cancelButtonTitle: string,
    acceptButtonTitle: string,
    onClose: FunctionWithNoParam,
    onAccept: FunctionWithNoParam
}

export const Modal: FC<ModalProps> = props => {
    
  const { title, cancelButtonTitle, acceptButtonTitle, onClose, children, onAccept } = props
    
  const backgroundRef = createRef<HTMLDivElement>()
    
  const closeModal:EventListener = e => {
    backgroundRef.current?.isEqualNode(e.target as Node) && onClose()
  }
    
  useEffect(() => {
    backgroundRef.current?.addEventListener('click', closeModal)
    return () => document.removeEventListener('click', closeModal)
  }, [closeModal, backgroundRef])
    
    
  return (
    <FlexContainer ref={backgroundRef} classList={styles.modalBackground}>
      <FlexContainer direction="col" classList={styles.modalContainer}>
        <FlexContainer justify="center" fill classList={styles.modalHeader}>
          <button onClick={onClose} className={styles.modalCloseButton}>X</button>
          {title && <Typography variant="h4" classList={styles.modalTitle}>{title}</Typography>}
        </FlexContainer>
        <FlexContainer justify="start" fill classList={styles.modalBody}>
          {children}
        </FlexContainer>
        <FlexContainer justify="center" fill classList={styles.modalFooter}>
          <Button variant="secondary" onClick={onClose}>{cancelButtonTitle}</Button>
          <Button onClick={onAccept}>{acceptButtonTitle}</Button>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

