import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IconProps {
  theme? : 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
  [key:string]: any;
}

const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })

  const iconProps:any = {
    className: classes
  }

  return (
    <FontAwesomeIcon {...iconProps} {...restProps} />
  )
}

export default Icon
