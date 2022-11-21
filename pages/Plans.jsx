import styled from 'styled-components'
import CreateAPlanHero from '../components/pages/CreateYourPlan/CreateAPlanHero'

import HowDoYouDrinkYourCoffee from '../components/pages/CreateYourPlan/HowDoYouDrinkYourCoffee'
import HowItWorkContainerPlan from '../components/pages/CreateYourPlan/HowItWorkContainerPlan'
import HowMuchWouldYouLike from '../components/pages/CreateYourPlan/HowMuchWouldYouLike'
import HowOftenShouldWeDeliver from '../components/pages/CreateYourPlan/HowOftenShouldWeDeliver'
import OrderSummary from '../components/pages/CreateYourPlan/OrderSummary'
import SideNavigation from '../components/pages/CreateYourPlan/SideNavigation'
import WantUsToGridThem from '../components/pages/CreateYourPlan/WantUsToGridThem'
import WhatTypeOfCoffee from '../components/pages/CreateYourPlan/WhatTypeOfCoffee'
import CreateMyPlanBtn from '../components/utils/CreateMyPlanBtn'

const PlanStyle = styled.div`
  margin-top: 58px;
  margin-bottom: 120px;

  @media (min-width: 1440px) {
    margin-bottom: 165px;
  }
`

const Wrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 110px;

    @media (min-width: 768px) {
      margin-bottom: 100px;
    }

    @media (min-width: 1440px) {
      margin-bottom: 88px;
    }
  }
`

const OrderSectionWrapper = styled.div`
  display: flex;
`

const Plan = () => {
  return (
    <PlanStyle>
      <CreateAPlanHero />
      <HowItWorkContainerPlan />
      <OrderSectionWrapper>
        <SideNavigation />
        <Wrapper>
          <HowDoYouDrinkYourCoffee />
          <WhatTypeOfCoffee />
          <HowMuchWouldYouLike />
          <WantUsToGridThem />
          <HowOftenShouldWeDeliver />
          <OrderSummary />
          <CreateMyPlanBtn />
        </Wrapper>
      </OrderSectionWrapper>
    </PlanStyle>
  )
}

export default Plan
