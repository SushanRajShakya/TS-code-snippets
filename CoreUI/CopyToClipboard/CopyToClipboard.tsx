import React, { FC, useState } from 'react'
import classNames from 'classnames'

import './CopyToClipboard.module.scss'
import { SvgIcons } from '../../Icons'
import { SvgIconName } from '../../../Utils/enum'

import styles from './CopyToClipboard.module.scss'
import { toast } from 'react-toastify'

enum CopyToClipboardType {
  FULL= 'full',
  HALF= 'half',
  ICON= 'icon',
}

interface CopyToClipboardProps {
  text: string,
  type?: CopyToClipboardType
}

const CopyToClipboard:FC<CopyToClipboardProps> = ({ text, type = CopyToClipboardType.ICON }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyText = async () => {
    if (text) {
      /* Create input element and append to document */
      const input = document.body.appendChild(document.createElement('input'))

      /* Set value to input and styles */
      input.value = text
      input.setAttribute('readonly', '')
      // @ts-ignore
      input.style = { position: 'absolute', left: '-9999px' }

      /* Select the text field */
      input.select()
      input.setSelectionRange(0, 99999) /* For mobile devices */

      /* Copy the text inside the text field */
      await navigator.clipboard.writeText(input.value)

      setIsCopied(true)
      const copiedTimeout = setTimeout(() => {
        setIsCopied(false)
        clearTimeout(copiedTimeout)
      }, 1000)

      /* Remove the input element from the document */
      input.parentNode?.removeChild(input)

      toast.info('Copied to clipboard.', { autoClose: 1000 })
    }
  }

  const content = () => {
    switch (type) {
    case CopyToClipboardType.FULL:
      return (
        <span title="Click to copy">
            Copy to Clipboard <SvgIcons iconName={SvgIconName.COPY} />
        </span>
      )
    case CopyToClipboardType.HALF:
      return (
        <span title="Click to copy">
            Copy <SvgIcons iconName={SvgIconName.COPY} />
        </span>
      )
    case CopyToClipboardType.ICON:
      return <span title="Click to copy"><SvgIcons iconName={SvgIconName.COPY} /></span>
    default:
      return <></>
    }
  }

  return (
    <>
      <span
        title={'Copy to clipboard'}
        className={classNames(styles.copy_to_clipboard, isCopied ? styles.copied_to_clipboard : '')}
        onClick={copyText}>
        {content()}
      </span>
    </>
  )
}

export { CopyToClipboard, CopyToClipboardType }
