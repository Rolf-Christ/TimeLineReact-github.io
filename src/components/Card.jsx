import { Content } from './Content'
import { Dates } from './Dates'

import { Icon } from './Icon'

export function Card({ position, date, icone }) {
  return (
    <div className={`container ${position}`}>
      <Dates date={date} />
      <Icon icone={icone}/>
      <Content icone={icone} />
    </div>
  )
}

/* import { ContainerLeft } from './ContainerLeft'
import { ContainerRight } from './ContainerRight' */

/*  const positionFinale =
    position === 'left' ? <ContainerLeft /> : <ContainerRight />

  return positionFinale */

  /* import { elementCard } from './elementCard' */