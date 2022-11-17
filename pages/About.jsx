import styled from 'styled-components'
import OurHeadquarter from '../components/pages/About/OurHeadquarter'
import HeroAboutUs from '../components/pages/About/HeroAboutUs'
import OurCommitment from '../components/pages/About/OurCommitment'
import UncompromissingQuality from '../components/pages/About/UncompromissingQuality'

import ChoiceContainer from '../components/pages/Home/ChoiceContainer'
import Collection from '../components/pages/Home/Collection'

const AboutStyle = styled.div`
  padding-top: 58px;

  /* @media (min-width: 768px) and (max-width: 1439px) {
    padding-top: 53px;
  }

  @media (min-width: 1440px) {
    padding-top: 43px;
  } */
`

export default function About() {
  return (
    <AboutStyle>
      <HeroAboutUs />
      <OurCommitment />
      <UncompromissingQuality />
      <OurHeadquarter />

      {/* <Collection />
      <ChoiceContainer /> */}
    </AboutStyle>
  )
}
