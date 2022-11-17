import styled from 'styled-components'

const CoffeeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    padding-inline: 15%;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 42px;
  }

  &:nth-of-type(2) {
    margin-top: -30px;

    @media (min-width: 768px) and (max-width: 1439px) {
      margin-top: -55px;
    }

    @media (min-width: 1440px) {
      margin-top: -60px;
    }
  }

  @media (min-width: 1440px) {
    margin-top: -60px;
  }
`

const CoffeeImage = styled.img`
  width: 200px;
  height: 151px;
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    scale: 1.28;
    margin-bottom: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 45%;
    margin-left: 50px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const CoffeeName = styled.h2`
  font-family: 'Fraunces';
  font-size: 24px;
  line-height: 32px;
  color: var(--dark-grey-blue);
  margin-bottom: 16px;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 24px;
  }
`

const CoffeeDescription = styled.p`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  padding-inline: 20px;
  color: var(--dark-grey-blue);

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-left: 0;
  }

  @media (min-width: 1440px) {
    padding-inline: 40px;
  }
`

const Coffee = ({ path, alt, name, description }) => {
  return (
    <CoffeeStyle>
      <CoffeeImage src={path} alt={alt} />
      <Wrapper>
        <CoffeeName>{name}</CoffeeName>
        <CoffeeDescription>{description}</CoffeeDescription>
      </Wrapper>
    </CoffeeStyle>
  )
}

export default Coffee
