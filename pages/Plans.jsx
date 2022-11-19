import styled from 'styled-components'
import Card from '../components/pages/CreateYourPlan/Card'

const PlanStyle = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`

const Plan = () => {
  return (
    <PlanStyle>
      <div style={{ display: 'flex' }}>
        <Card />
        {/* <Card />
        <Card /> */}
      </div>
    </PlanStyle>
  )
}

export default Plan
