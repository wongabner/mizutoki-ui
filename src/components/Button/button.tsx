import React, { FC } from 'react'
import classNames from 'classnames'

interface BaseButtonProps {
  className?: string;
  /** 设置 Button 的禁用 */
  disabled?: boolean;
  /** 设置 Button 的尺寸 */
  size?: 'lg' | 'sm';
  /** 设置 Button 的类型 */
  btnType?: 'default' | 'primary' | 'danger' | 'link';
  children: any;
  /** 设置超链接路径 */
  href?: string;
  [key:string]: any;
}
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: FC<BaseButtonProps> = (props:any) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn','test', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  size: 'sm'
}

export default Button;
