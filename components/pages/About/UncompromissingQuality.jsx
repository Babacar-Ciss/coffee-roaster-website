import styled from 'styled-components'

const UncompromissingQualityStyle = styled.section`
  display: grid;
  grid-template-columns: 7.5% 85% 7.5%;
  grid-template-rows: repeat(2, 78px) auto;
  margin-bottom: 120px;
`

const TextContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;

  width: 100%;
  padding-inline: 24px;
  padding-top: 142px;
  padding-bottom: 61px;
  border-radius: 10px;
  background-color: var(--bg-color-footer);
  display: flex;
  flex-direction: column;
  align-items: center;
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

  & h2 {
    color: var(--light-cream);
    font-weight: 900;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
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

const Hero = styled.img`
  z-index: 2;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  width: 100%;
  height: 156px;
  border-radius: 10px;
  transform: translateY(-50%);
`

const UncompromissingQuality = () => {
  return (
    <UncompromissingQualityStyle>
      <Hero src="/assets/about/mobile/image-quality.jpg" alt="Image Quality" />
      <TextContainer>
        <h2> Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </TextContainer>
    </UncompromissingQualityStyle>
  )
}

export default UncompromissingQuality
