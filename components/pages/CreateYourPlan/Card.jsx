import styled from 'styled-components'

const CardStyle = styled.div`
  width: 100%;
  background-color: var(--dark-cyan);
  border-radius: 10px;
  padding: 24px 25px;
`

const Title = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  color: #fff;
  margin-bottom: 8px;
`

const Description = styled.p`
  color: var(--dark-grey-blue);
  font-family: 'Barlow';
  font-size: 16px;
  line-height: 26px;
  color: #fff;
`

const Card = () => {
  return (
    <CardStyle>
      <Title>Filter</Title>
      <Description>
        For pour over or drip methods like Aeropress, Chemex, and V60
      </Description>
    </CardStyle>
  )
}

export default Card
