import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

import { ReactComponent as ArrowBackIcon } from '../../assets/svg/arrow-back.svg'
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg'

export default function Header() {
  const location = useLocation()
  const renderBackButton = location.pathname !== '/'

  return (
    <header className="header">
      <div className="header__logo">Recipe App</div>
      {renderBackButton && (
        <Link to="/" className="header__link">
          <ArrowBackIcon width={20} height={20} fill="#64ffda" />
          <span>go back</span>
        </Link>
      )}
    </header>
  )
}
