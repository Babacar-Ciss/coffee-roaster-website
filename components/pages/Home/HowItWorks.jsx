import styled from 'styled-components'

const HowItWorksStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;

  @media (min-width: 768px) and (max-width: 1439px) {
    position: relative;
    margin-bottom: 47px;
    align-items: flex-start;
    justify-content: center;
    flex-basis: 30%;
    flex-grow: 1;
  }

  @media (min-width: 1440px) {
    position: relative;
    margin-bottom: 47px;
    align-items: flex-start;
    justify-content: center;
    flex-basis: 25.5%;
  }
`

const Number = styled.p`
  color: var(--pale-orange);
  font-weight: 900;
  font-size: 72px;
  line-height: 72px;
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 42px;
  }
`

const Description = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: var(--dark-grey-blue);
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 39px;
    padding-right: 20px;
  }

  @media (min-width: 1440px) {
    padding-right: 30%;
  }
`

const Details = styled.p`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--dark-grey-blue);

  @media (min-width: 768px) and (max-width: 1439px) {
    text-align: left;
    padding-right: 15px;
  }

  @media (min-width: 1440px) {
    text-align: left;
    padding-right: 30%;
  }
`

const CirclePattern = styled.span`
  @media (min-width: 768px) and (max-width: 1439px) {
    z-index: 2;
    background-color: var(--light-cream);
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 2px solid var(--dark-cyan);
    margin-bottom: 45px;
  }

  @media (min-width: 1440px) {
    z-index: 2;
    background-color: var(--light-cream);
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 2px solid var(--dark-cyan);
    margin-bottom: 45px;
  }
`

const LinePattern = styled.span`
  @media (min-width: 768px) and (max-width: 1439px) {
    display: ${(props) => (props.index !== 2 ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    top: 13px;
    left: 0;
    border: 2px solid var(--pale-orange);
    width: 100%;
    height: 2px;
  }

  @media (min-width: 1440px) {
    display: ${(props) => (props.index !== 2 ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    top: 13px;
    left: 0;
    border: 2px solid var(--pale-orange);
    width: 100%;
    height: 2px;
  }
`

const HowItWorks = ({ number, description, details, index }) => {
  return (
    <HowItWorksStyle>
      <LinePattern index={index} />
      <CirclePattern />
      <Number>{number}</Number>
      <Description>{description}</Description>
      <Details>{details}</Details>
    </HowItWorksStyle>
  )
}

export default HowItWorks
