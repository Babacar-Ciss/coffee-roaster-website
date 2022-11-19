import styled from 'styled-components'
import Card from './Card'

const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const CardContainer = () => {
  return (
    <CardContainerStyle>
      <Card />
      <Card />
      <Card />
    </CardContainerStyle>
  )
}

export default CardContainer
