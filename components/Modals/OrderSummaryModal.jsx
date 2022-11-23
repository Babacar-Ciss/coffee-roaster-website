import styled from 'styled-components'
import Order from '../pages/CreateYourPlan/Order'
import CheckoutBtn from '../utils/CheckoutBtn'
import useStore from '../../store'

const OrderSummaryModalStyle = styled.div`
  z-index: 1000000000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

const OrderSummaryContainer = styled.div`
  background-color: var(--light-cream);
  width: 87%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 540px;
  }

  & > * {
    padding-inline: 24px;

    @media (min-width: 768px) {
      padding-inline: 56px;
    }
  }
`

const Title = styled.h2`
  background-color: var(--bg-color-footer);
  color: var(--light-cream);
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 28px;
  line-height: 32px;
`

const Wrapper = styled.div`
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 57px;
  }
`

const InfoCaution = styled.p`
  font-family: 'Barlow';
  color: var(--dark-grey-blue);
  font-size: 15px;
  line-height: 26px;
  opacity: 0.8;
  margin-bottom: 24px;
  margin-top: 2px;

  @media (min-width: 768px) {
    margin-top: 7px;
    margin-bottom: 47px;
  }
`

const OrderSummaryModal = () => {
  const isOrderSummaryModalShown = useStore(
    (state) => state.isOrderSummaryModalShown,
  )
  const CloseOrderSummaryModal = useStore(
    (state) => state.CloseOrderSummaryModal,
  )
  return (
    isOrderSummaryModalShown && (
      <OrderSummaryModalStyle
        onClick={() => {
          CloseOrderSummaryModal()
        }}
      >
        <OrderSummaryContainer
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Title> Order Summary </Title>
          <Wrapper>
            <Order type="summary" />
            <InfoCaution>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{' '}
            </InfoCaution>
            <CheckoutBtn />
          </Wrapper>
        </OrderSummaryContainer>
      </OrderSummaryModalStyle>
    )
  )
}

export default OrderSummaryModal
