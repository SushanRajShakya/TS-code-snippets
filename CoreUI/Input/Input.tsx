import { ComponentPropsWithoutRef, FC, Ref, forwardRef, useState } from 'react'
import classNames from 'classnames'

import { FlexContainer, SvgIcons } from 'Components'

import { ClassNameScrollBar, SvgIconName } from 'Utils/enum'
import { Nullable } from 'Utils/Types'

import styles from './Input.module.scss'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    error: Nullable<string>,
    type?: 'text' | 'email' | 'number' | 'password' | 'date'
    inputStyle?: string,
    wrapperStyle?: string,
    category?: 'small' | 'medium' | 'large',
    ref?: Ref<HTMLInputElement>,
    label?: string
}

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
    error: Nullable<string>,
    wrapperStyle?: string,
    category?: 'small' | 'medium' | 'large',
    textAreaStyle?: string,
    ref?: Ref<HTMLTextAreaElement>,
    label?: string

}

const Input:FC<InputProps> = forwardRef((props, ref) => {

  const { error, type = 'text', inputStyle, label, category = 'medium', wrapperStyle, ...remainingProps } = props

  const [textVisible, setTextVisible] = useState(false)

  return (
    <>
      {label && <div className={classNames(styles.labelText, error ? styles.labelError : '')}>{label}</div>}
      <FlexContainer direction="col" align="start" justify="center" classList={classNames(styles.inputWrapper, wrapperStyle, styles[category], error ? styles.inputError : '')}>
        <FlexContainer direction="row" classList={styles.inputFieldWrapper}>
          <input
            ref={ref}
            className={classNames(styles.inputField, inputStyle, type === 'password' ? '' : styles.hasNoIcon)}
            type={type === 'password' ? textVisible ? 'text' : 'password' : type}
            {...remainingProps}
          />
          {type === 'password' ?
            <FlexContainer justify={type === 'password' ? 'start' : 'center'} classList={classNames(styles.inputIconWrapper, type === 'password' ? styles.eyeWrapper : '')}>
              {type === 'password' ? <span onClick={() => setTextVisible(!textVisible)}>
                {textVisible
                  ? <SvgIcons iconName={SvgIconName.EYE} />
                  : <SvgIcons iconName={SvgIconName.EYE_SLASH} />
                }
              </span> : null }
            </FlexContainer>
            : null }
        </FlexContainer>
        {error ? <span className={styles.errorText}>{error}</span> : null }
      </FlexContainer>
    </>
  )
})

const TextArea:FC<TextAreaProps> = forwardRef((props, ref) => {
  const { error, wrapperStyle, category = 'medium', label, textAreaStyle = '', ...remainingProps } = props
  return(
    <div>
      {label && <div className={classNames(styles.labelText, error ? styles.labelError : '')}>{label}</div>}

      <FlexContainer direction="col" align="start" justify="center" classList={classNames(styles.inputWrapper, styles.textAreaWrapper, wrapperStyle, styles[category])}>
        <FlexContainer direction="row" classList={styles.inputFieldWrapper}>
          <textarea
            className={classNames(styles.inputField, textAreaStyle, styles.hasNoIcon, ClassNameScrollBar.Y)}
            ref={ref} {...remainingProps}
          />
        </FlexContainer>
        {error ? <span className={styles.errorText}>{error}</span> : null }
      </FlexContainer>
    </div>
  )
})

export { Input, TextArea }
