import React from 'react'
import './style.css'

export default function Section({ children, className, ...restProps }) {
  const classes = ['section', className && `${className}`].join(' ').trim()
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  )
}
