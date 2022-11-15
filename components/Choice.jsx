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

  &:last-child {
    margin-bottom: 0;
  }
`

const Picture = styled.img`
  margin-bottom: 56px;
`

const Description = styled.h2`
  font-family: 'Fraunces';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: var(--light-cream);
  margin-bottom: 24px;
`

const Details = styled.p`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--light-cream);
  padding-inline: 60px;
`

const Choice = ({ path, alt_picture, description, details }) => {
  return (
    <ChoiceStyle>
      <Picture src={path} alt={alt_picture} />
      <Description>{description}</Description>
      <Details>{details}</Details>
    </ChoiceStyle>
  )
}

export default Choice
