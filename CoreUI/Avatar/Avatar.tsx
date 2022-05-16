import { FC } from 'react'
import { FlexContainer, Typography } from 'Components'
import styles from './Avatar.module.scss'
import { getCompleteImageUrl } from '../../../Utils/UtilFunctions'

interface AvatarProps {
    variant?: 'small' | 'medium' | 'large'
}

interface AvatarName {
    name: string
}

interface AvatarImage {
    image: string
}

export const Avatar:FC<AvatarProps & (AvatarImage | AvatarName)> = ({ variant = 'small', ...props }) => {

  const name = (props as AvatarName).name
  const image = (props as AvatarImage).image

  const splitArray = name && name.split(' ')
  const avatarText:string = name && (splitArray[0].charAt(0)+splitArray[splitArray.length - 1].charAt(0)).toUpperCase()

  return(
    <FlexContainer justify="center" classList={styles.avatarWrapper}>
      {name && <Typography variant={variant === 'small' ? 'h5' : variant === 'medium' ? 'h4' : 'h3'} weight="bold" classList={styles.avatarText}>{avatarText}</Typography>}
      {image && <img src={getCompleteImageUrl(image) || ''} alt="PP" />}
    </FlexContainer>
  )
}
