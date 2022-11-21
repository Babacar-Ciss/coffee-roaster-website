import styled from 'styled-components'

const HowItWorksStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    margin-bottom: 42px;
  }
`

const Description = styled.h2`
  color: ${(props) =>
    props.type === 'plan' ? 'var(--light-cream)' : 'var(--dark-grey-blue)'};
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 39px;
    padding-right: ${(props) => (props.type === 'plan' ? '10%' : '30%')};
  }

  @media (min-width: 1440px) {
    padding-right: ${(props) => (props.type === 'plan' ? '50%' : '20%')};
  }
`

const Details = styled.p`
  color: ${(props) =>
    props.type === 'plan' ? 'var(--light-cream)' : 'var(--dark-grey-blue)'};
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding-right: 15px;
  }

  @media (min-width: 1440px) {
    text-align: left;
    padding-right: 30%;
  }
`

const CirclePattern = styled.span`
  @media (min-width: 768px) {
    z-index: 2;
    background-color: ${(props) =>
      props.type === 'plan' ? 'transparent' : 'var(--light-cream)'};
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 2px solid var(--dark-cyan);
    margin-bottom: 45px;
  }

  @media (min-width: 1440px) {
    z-index: 2;
    background-color: ${(props) =>
      props.type === 'plan' ? 'transparent' : 'var(--light-cream)'};
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 2px solid var(--dark-cyan);
    margin-bottom: 45px;
  }
`

const LinePattern = styled.span`
  @media (min-width: 768px) {
    display: ${(props) => (props.index !== 2 ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    top: 13px;
    left: 14px;
    border: 2px solid var(--pale-orange);
    width: 100%;
    height: 0.5px;
  }

  @media (min-width: 1440px) {
    display: ${(props) => (props.index !== 2 ? 'block' : 'none')};
    z-index: 1;
    position: absolute;
    top: 13px;
    left: 14px;
    border: 2px solid var(--pale-orange);
    width: 100%;
    height: 2px;
  }
`

const HowItWorks = ({ number, description, details, index, type }) => {
  return (
    <HowItWorksStyle>
      <LinePattern index={index} />
      <CirclePattern type={type} />
      <Number>{number}</Number>
      <Description type={type}>{description}</Description>
      <Details type={type}>{details}</Details>
    </HowItWorksStyle>
  )
}

export default HowItWorks
