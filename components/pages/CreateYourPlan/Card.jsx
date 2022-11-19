import styled from 'styled-components'

const CardStyle = styled.div`
  width: 100%;
  background-color: var(--dark-cyan);
  border-radius: 10px;
  padding: 24px 25px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 32px 57px 84px 25px;
    margin-right: 10px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    padding: 32px 28px 84px 28px;
    margin-right: 23px;
  }
`

const Title = styled.h2`
  color: var(--light-cream);
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`

const Description = styled.p`
  /* color: var(--dark-grey-blue); */
  font-family: 'Barlow';
  font-size: 16px;
  line-height: 26px;
  color: var(--light-cream);

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
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
