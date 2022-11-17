import styled from 'styled-components'

const ChoiceStyle = styled.div`
  padding-top: 72px;
  padding-bottom: 51px;
  background-color: var(--dark-cyan);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    padding: 41px 48px 41px 70px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 0;
    margin-bottom: 0;
    flex-basis: 32.4%;
    justify-content: center;
  }

  img[alt='lorry logo'] {
    @media (min-width: 768px) and (max-width: 1439px) {
      width: 56px;
      height: 39px;
    }
  }
`

const Picture = styled.img`
  margin-bottom: 56px;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 0;
    margin-right: 55px;
    width: 56px;
    height: 56px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    align-items: left;
    text-align: left;
  }
`

const Description = styled.h2`
  font-family: 'Fraunces';
  font-size: 24px;
  line-height: 32px;
  color: var(--light-cream);
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 16px;
    align-self: flex-start;
  }
`

const Details = styled.p`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  color: var(--light-cream);
  padding-inline: 40px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-inline: 0;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`

const Choice = ({ path, alt_picture, description, details }) => {
  return (
    <ChoiceStyle>
      <Picture src={path} alt={alt_picture} />
      <Wrapper>
        <Description>{description}</Description>
        <Details>{details}</Details>
      </Wrapper>
    </ChoiceStyle>
  )
}

export default Choice
