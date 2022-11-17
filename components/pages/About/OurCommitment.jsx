import styled from 'styled-components'

const OurCommitmentStyle = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 198px;
`

const OurCommitmentHero = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 48px;
`

const CommitSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--dark-grey-blue);
    font-weight: 900;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 30px;
  }

  p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: var(--dark-grey-blue);
    opacity: 0.8;
  }
`

const OurCommitment = () => {
  return (
    <OurCommitmentStyle>
      <OurCommitmentHero
        src="/assets/about/mobile/image-commitment.jpg"
        alt="image commitmen"
      />

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
