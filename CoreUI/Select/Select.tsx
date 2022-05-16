import React, { ChangeEventHandler, FC, ReactElement, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import styles from './Select.module.scss'
import { FlexContainer } from '../FlexContainer'
import { ClassNameScrollBar } from 'Utils/enum'
import classNames from 'classnames'
import { FunctionWithParam, FunctionWithParamAndReturn, Nullable } from 'Utils/Types'

interface SelectProps {
  children: Nullable<ReactElement[] | ReactElement>,
  name: string,
  error: Nullable<string>,
  ref?: RefObject<HTMLInputElement>,
  placeholder?: string,
  wrapperStyle?: string,
  inputStyle?: string,
  onFilter?: FunctionWithParam<string>,
  readOnly?: boolean,
  label?: string
}

export interface SelectOptionSingleParam {
  name: string,
  value: string
}

export interface SelectOptionMultipleParam {
  name: string,
  value: string[]
}

interface SelectPropsSingle {
  mode: 'single',
  value: string,
  onChange: FunctionWithParam<SelectOptionSingleParam>
}

interface SelectPropsMultiple {
  mode: 'multiple',
  value: string[],
  onChange: FunctionWithParam<SelectOptionMultipleParam>
}

export interface OptionListType {
  displayName: string,
  value: string,
}

export const Select:FC<SelectProps & (SelectPropsSingle | SelectPropsMultiple)> = props => {

  const { children, onFilter: propHandleFilter, error, inputStyle, wrapperStyle, label, placeholder, ref, name, mode, readOnly, ...remainingProps } = props

  const { value: sValue, onChange: sOnChange } = remainingProps as SelectPropsSingle
  const { value: mValue, onChange: mOnChange } = remainingProps as SelectPropsMultiple

  const [optionList, setOptionList] = useState<OptionListType[]>([])
  const [selectedValues, setSelectedValues] = useState<OptionListType[]>([])
  const [showFilteredList, setShowFilteredList] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const optionWrapperRef = useRef<HTMLDivElement>(null)

  const getOptionDisplayName:FunctionWithParamAndReturn<string, string> = useCallback(val => optionList.reduce((acc, curr) => curr.value === val ? curr.displayName : acc, val), [optionList])

  useEffect(() => {
    setOptionList(children && Array.isArray(children) ? children.map(child => ({ displayName: child.props.children, value: child.props.value })) : [])
  }, [children])

  useEffect(() => {
    if(showFilteredList)
      openOptionList(optionList.length)
  }, [optionList, showFilteredList])

  useEffect(() => {
    if(sValue && optionList.length > 0 && !isLoaded){
      const getName = (val: string) => optionList.reduce((acc, curr) => curr.value === val ? curr.displayName : acc, val)
      setSelectedValues([{ displayName: getName(sValue), value: sValue }])
      setIsLoaded(optionList.length > 0)
    }
  },[sValue, getOptionDisplayName, optionList, isLoaded])

  const handleSelect = (val: string) => {
    if(mode === 'multiple'){
      if(mValue.includes(val)){
        setSelectedValues(prevState => prevState.filter(prev => prev.value !== val))
        mOnChange({ name, value: mValue.filter(v => v !== val) })
      }
      else{
        setSelectedValues(prevState => ([...prevState, { displayName: getOptionDisplayName(val), value: val }]))
        mOnChange({ name, value: [...mValue, val] })
      }
    }
    if(mode === 'single'){
      setSelectedValues([{ displayName: getOptionDisplayName(val), value: val }])
      sOnChange({ name, value: val })
    }
    setShowFilteredList(false)
  }

  const handleInputFilter:ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    if(!propHandleFilter){
      const newArr = children && Array.isArray(children) ? (children as ReactElement[]).reduce((acc: {displayName: string, value: string}[], curr) => curr.props.children.toLowerCase().includes(value.toLowerCase()) ? [...acc, { displayName: curr.props.children, value: curr.props.value }] : acc, []) : []
      setOptionList(newArr)
      openOptionList(newArr.length)
      openOptionList(newArr.length)
    }else{
      setShowFilteredList(true)
      propHandleFilter(value)
    }
    if(mode === 'single')
      sOnChange({ name, value })
  }

  const openOptionList = (length: number) => {
    if(!readOnly){
      const hideOptionList:EventListener = e => {
        const isParentElement = (e.target as HTMLElement).offsetParent === null || (e.target as HTMLElement).offsetParent === wrapperRef.current || (mode === 'multiple' && (e.target as HTMLElement).offsetParent === optionWrapperRef.current)
        if(!isParentElement){
          if(optionWrapperRef && optionWrapperRef.current){
            optionWrapperRef.current.style.height = '0px'
            optionWrapperRef.current.style.overflow = 'hidden'
          }
          window.removeEventListener('click', hideOptionList)
        }
      }
      window.addEventListener('click', hideOptionList)
      if(optionWrapperRef && optionWrapperRef.current){
        optionWrapperRef.current.style.height = `${40 * (length > 5 ? 5 : length)}px`
        optionWrapperRef.current.style.overflow = 'auto'
      }
    }
  }

  const getDisplayName:FunctionWithParamAndReturn<string, string> = val => selectedValues.reduce((acc: string, curr) => curr.value === val ? curr.displayName : acc, val)
  return (
    <div>
      {label && <div className={classNames(styles.labelText, error ? styles.labelError : '')}>{label}</div>}
      <div className={classNames(styles.selectWrapper, wrapperStyle, error ? styles.selectError : '')} ref={wrapperRef}>
        <FlexContainer classList={classNames(styles.selectInput, inputStyle)} fill wrap>
          {mode === 'multiple' && mValue.length > 0
            ? mValue?.map(val => <div key={val} className={styles.selectedOptionTag}>{getDisplayName(val)}<span className={styles.selectedOptionCross} onClick={() => handleSelect(val)}>X</span></div>)
            : null}
          <input readOnly={readOnly} ref={ref} placeholder={error || placeholder} {...Object.assign({}, mode === 'single' ? { value: getDisplayName(sValue) } : null)} onFocus={() => openOptionList(optionList.length)} onChange={handleInputFilter}/>
        </FlexContainer>
        <div className={classNames(styles.optionWrapper, ClassNameScrollBar.Y)} ref={optionWrapperRef}>
          {children && Array.isArray(children)
            ? (children as ReactElement[]).filter(child => optionList.findIndex(opt => opt.value === child.props.value) > -1).map((child, ind) =>
              <FlexContainer key={ind} onClick={() => handleSelect(child.props.value)} classList={classNames(styles.optionItemWrapper, (mode === 'multiple' ? mValue?.includes(child.props.value) : sValue === child.props.value) ? styles.optionItemSelected : '', (child.props.className || ''))}>
                {child}
              </FlexContainer>)
            : null}
        </div>
      </div>
    </div>
  )
}

interface OptionProps{
  value: string,
  className?: string
}

export const Option:FC<OptionProps> = ({ children }) => <>{children}</>
