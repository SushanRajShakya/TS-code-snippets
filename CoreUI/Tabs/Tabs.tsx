import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { FlexContainer } from 'Components'

import styles from './Tabs.module.scss'

interface FieldTypeTabList {
    label: string,
    hrefUrl: string,
}

interface TabsProps {
    tabList: FieldTypeTabList[]
    defaultTab?: string,
    tabWrapperStyle?: string,
}

const Tabs: FC<TabsProps> = ({ tabList, defaultTab, tabWrapperStyle = '' }) => {

  const [activeTab, setActiveTab] = useState<string>('')
    
  useEffect(() => {
    setActiveTab(defaultTab || tabList[0].hrefUrl)
  }, [defaultTab, tabList])
    
  return (
    <div className={styles.tabContainer}>
      <FlexContainer justify="center" classList={classNames(styles.tabNavigation, tabWrapperStyle)}>
        {tabList?.map(tab => (
          <Link
            to={tab.hrefUrl}
            key={tab.label}
          >
            <span
              onClick={() => setActiveTab(tab.hrefUrl)}
              className={classNames(styles.tabSpan, tab.hrefUrl === activeTab ? styles.activeTab : '')}
            >
              {tab.label}
            </span>
          </Link>
        ))}</FlexContainer>
    </div>
  )
}

export { Tabs }
