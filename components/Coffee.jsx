import styled from 'styled-components'

const CoffeeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-of-type(2) {
    margin-top: -30px;
  }
`

const CoffeeImage = styled.img`
  width: 200px;
  height: 151px;
  margin-bottom: 24px;
`

const CoffeeName = styled.h2`
  font-family: 'Fraunces';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  color: var(--dark-grey-blue);
  margin-bottom: 16px;
`

const CoffeeDescription = styled.p`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  padding-inline: 20px;
  color: var(--dark-grey-blue);
`

const Coffee = ({ path, alt, name, description }) => {
  return (
    <CoffeeStyle>
      <CoffeeImage src={path} alt={alt} />
      <CoffeeName>{name}</CoffeeName>
      <CoffeeDescription>{description}</CoffeeDescription>
    </CoffeeStyle>
  )
}

export default Coffee
