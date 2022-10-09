import {
  ContainerInfo,
  FirstInfoLeft,
  SecondInfoLeft,
  ThirdInfoLeft,
  FirstInfoRight,
  SecondInfoRight,
  ThirdInfoRight,
  A,
  B
} from '../style/InfoLineStyle'

export function InfoLine() {
  return (
    <ContainerInfo>
      <A>
        <FirstInfoLeft></FirstInfoLeft>
        <SecondInfoLeft></SecondInfoLeft>
        <ThirdInfoLeft></ThirdInfoLeft>
      </A>

      <B>
        <FirstInfoRight></FirstInfoRight>
        <SecondInfoRight></SecondInfoRight>
        <ThirdInfoRight></ThirdInfoRight>
      </B>
    </ContainerInfo>
  )
}
