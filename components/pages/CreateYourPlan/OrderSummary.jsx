import styled from 'styled-components'
import Order from './Order'

const OrderSummaryStyle = styled.div`
  background-color: var(--bg-color-footer);
  padding: 32px 24px;
  border-radius: 10px;
  margin-bottom: 56px;

  @media (min-width: 768px) {
    padding: 27px 43px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    padding: 27px 64px;
    margin-bottom: 40px;
  }
`

const Title = styled.p`
  color: #ffffff;
  font-family: 'Barlow';
  font-size: 16px;
  line-height: 26px;
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 8px;
`

const OrderSummary = () => {
  return (
    <OrderSummaryStyle>
      <Title>Order Summary</Title>
      <Order type="OnPage" />
    </OrderSummaryStyle>
  )
}

export default OrderSummary
