import React from 'react'
import './style.css'
import { ReactComponent as AnimatedLoader } from '../../assets/svg/ellipsis-loader.svg'

export default function Loader() {
  return (
    <div className="loading-container">
      <AnimatedLoader width={100} height={100} />
    </div>
  )
}
