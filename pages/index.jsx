import styled from 'styled-components'

import ChoiceContainer from '../components/pages/Home/ChoiceContainer'
import Hero from '../components/pages/Home/Hero'
import Collection from '../components/pages/Home/Collection'
import HowItWorksContainer from '../components/pages/Home/HowItWorksContainer'

const HomeStyle = styled.div`
  padding-top: 40px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-top: 53px;
  }

  @media (min-width: 1440px) {
    padding-top: 43px;
  }
`

export default function Home() {
  return (
    <HomeStyle>
      <Hero />
      <Collection />
      <ChoiceContainer />
      <HowItWorksContainer />
    </HomeStyle>
  )
}
