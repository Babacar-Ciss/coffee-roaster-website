import styled from 'styled-components'

const HowItWorksStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
`

const Number = styled.p`
  font-family: 'Fraunces';
  font-weight: 900;
  font-size: 72px;
  line-height: 72px;
  color: var(--pale-orange);
  margin-bottom: 24px;
`

const Description = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: var(--dark-grey-blue);
  margin-bottom: 24px;
`

const Details = styled.p`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--dark-grey-blue);
`

const HowItWorks = ({ number, description, details }) => {
  return (
    <HowItWorksStyle>
      <Number>{number}</Number>
      <Description>{description}</Description>
      <Details>{details}</Details>
    </HowItWorksStyle>
  )
}

export default HowItWorks
