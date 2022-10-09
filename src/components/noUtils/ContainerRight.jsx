
import { Content } from '../Content'
import { Dates } from '../Dates'
import { elementCard } from '../elementCard'

export function ContainerRight() {
  

  return (
    <div className="container right">
      <Dates />
      <i className={`icon fa fa-${elementCard.icone[1]}`}></i>
      <Content />
    </div>
  )
}
