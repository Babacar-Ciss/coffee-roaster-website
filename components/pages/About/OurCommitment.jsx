import styled from 'styled-components'

const OurCommitmentStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 198px;

  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    margin-bottom: 256px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 208px;
    margin-left: 85px;
  }
`

const OurCommitmentHero = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 48px;
  background-image: url('/assets/about/mobile/image-commitment.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url('/assets/about/tablet/image-commitment.jpg');
    height: 470px;
    flex-basis: 41%;
    margin-right: 69px;
  }

  @media (min-width: 1440px) {
    background-image: url('/assets/about/desktop/image-commitment.jpg');
    height: 520px;
    flex-basis: 35%;
    margin-right: 125px;
  }
`

const CommitSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    flex-basis: 49%;
  }

  @media (min-width: 1440px) {
    flex-basis: 50%;
    margin-top: 90px;
  }

  h2 {
    color: var(--dark-grey-blue);
    font-weight: 900;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 30px;

    @media (min-width: 768px) and (max-width: 1439px) {
      align-self: flex-start;
    }

    @media (min-width: 1440px) {
      align-self: flex-start;
    }
  }

  p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: var(--dark-grey-blue);
    opacity: 0.8;

    @media (min-width: 768px) and (max-width: 1439px) {
      text-align: left;
    }

    @media (min-width: 1440px) {
      text-align: left;
      padding-right: 94px;
    }
  }
`

const OurCommitment = () => {
  return (
    <OurCommitmentStyle>
      <OurCommitmentHero />

      <CommitSection>
        <h2>Our commitment</h2>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </CommitSection>
    </OurCommitmentStyle>
  )
}

export default OurCommitment
