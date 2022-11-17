import styled from 'styled-components'
import CreateYourPlanCTA from '../../utils/CreateYourPlanCTA'

const HeroContainer = styled.section`
  width: 100%;
  height: 498px;
  padding-inline: 24px;
  padding-top: 100px;
  border-radius: 10px;
  background-image: url('/assets/home/mobile/image-hero-coffeepress.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url('/assets/home/tablet/image-hero-coffeepress.jpg');
    align-items: flex-start;
    padding-left: 58px;
    margin-bottom: 144px;
  }

  @media (min-width: 1440px) {
    height: 600px;
    background-image: url('/assets/home/desktop/image-hero-coffeepress.jpg');
    align-items: flex-start;
    padding-left: 58px;
    margin-bottom: 136px;
    padding-top: 117px;
  }

  & h1 {
    font-family: 'Fraunces';
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #fefcf7;
    margin-bottom: 24px;

    @media (min-width: 768px) and (max-width: 1439px) {
      font-size: 48px;
      line-height: 48px;
      padding-right: 250px;
      text-align: left;
    }

    @media (min-width: 1440px) {
      font-size: 72px;
      line-height: 72px;
      padding-right: 55%;
      text-align: left;
      margin-bottom: 32px;
    }
  }

  & p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    color: #fefcf7;
    opacity: 0.8;
    padding-inline: 10px;
    margin-bottom: 39px;

    @media (min-width: 768px) and (max-width: 1439px) {
      padding-right: 200px;
      padding-left: 0;
      text-align: left;
    }

    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 26px;
      padding-right: 65%;
      text-align: left;
      margin-bottom: 56px;
    }
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Great coffee made simple.</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <CreateYourPlanCTA />
    </HeroContainer>
  )
}

export default Hero
