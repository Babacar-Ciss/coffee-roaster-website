import styled from 'styled-components'
import CardContainer from '../components/pages/CreateYourPlan/CardContainer'

const PlanStyle = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`

const Plan = () => {
  return (
    <PlanStyle>
      <CardContainer />
    </PlanStyle>
  )
}

export default Plan
