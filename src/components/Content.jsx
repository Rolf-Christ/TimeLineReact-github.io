import React, { useState } from 'react'
import { elementCard } from './elementCard'

export function Content({icone}) {
  const [show, setShow] = useState(false)

  return show ? (
    <React.Fragment>
      <i className="icon" onClick={() => setShow(!show)}></i>
      <div className="content">
        <h2>{elementCard.titleH2}</h2>
        <p>{elementCard.textP}</p>
      </div>
    </React.Fragment>
  ) : (
    <i
      className={`icon fa fa-${icone}`}
      onClick={() => setShow(!show)}
    ></i>
  )
}
