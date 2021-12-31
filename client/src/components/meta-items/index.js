import React from 'react'
import './style.css'

import { ReactComponent as ClockIcon } from '../../assets/svg/clock.svg'
import { ReactComponent as PersonIcon } from '../../assets/svg/person-outline.svg'

export default function MetaItems({ items }) {
  return (
    <React.Fragment>
      <div className="item__meta-item">
        <p>prep</p>
        <div className="item__icon-group">
          <ClockIcon width={20} height={20} fill="#a8b2d1" />
          <span>{items.prepTime}min</span>
        </div>
      </div>
      <div className="item__meta-item">
        <p>cook</p>
        <div className="item__icon-group">
          <ClockIcon width={20} height={20} fill="#a8b2d1" />
          <span>{items.cookTime}min</span>
        </div>
      </div>
      <div className="item__meta-item">
        <p>serves</p>
        <div className="item__icon-group">
          <PersonIcon width={20} height={20} fill="#a8b2d1" />
          <span>{items.servings}ppl</span>
        </div>
      </div>
    </React.Fragment>
  )
}
