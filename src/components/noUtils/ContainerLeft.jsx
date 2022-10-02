import { Content } from '../Content'
import { Dates } from '../Dates'
import { elementCard } from '../elementCard'

export function ContainerLeft() {
  return (
    <div className="container left">
      <Dates />
      <i className={`icon fa fa-${elementCard.icone[0]}`}></i>
      <Content />
    </div>
  )
}
