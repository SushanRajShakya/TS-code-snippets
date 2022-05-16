import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { FlexContainer } from 'Components'
import { FallBackImage } from 'Utils/enum'
import styles from './ListCard.module.scss'
import { getCompleteImageUrl } from '../../../Utils/UtilFunctions'
import { fallBackImages } from '../../../Utils/constants'

interface ListCardProps {
    redirection: string,
    imageUrl: string | undefined,
    fallBackImage: FallBackImage
}

export const ListCard:FC<ListCardProps> = ({ redirection, children, fallBackImage, imageUrl }) => {

  const navigate = useNavigate()

  return(
    <div className={styles.listCardWrapper} onClick={async () => await navigate(redirection)}>
      <FlexContainer justify="center" classList={styles.listCardImage}>
        <img src={getCompleteImageUrl(imageUrl) || fallBackImages[fallBackImage]} alt="fallback"  />
      </FlexContainer>
      <div className={styles.listCardBlur} />
      <FlexContainer justify="start" align="start" direction="col" classList={styles.listCardContentWrapper}>
        {children}
      </FlexContainer>
    </div>
  )
}
