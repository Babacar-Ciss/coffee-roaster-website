import styled from 'styled-components'
import Link from 'next/link'
import useStore from '../../store'
import shallow from 'zustand/shallow'
import { useState, useEffect } from 'react'
import CalculateTotalToPayPerMounth from '../../CalculateTotalToPayPerMounth'

const ContainerMobile = styled.div`
  width: 100%;
  height: 56px;
  background-color: var(--dark-cyan);
  border-radius: 6px;
  padding: 16px 31px;
  text-decoration: none;
  font-family: 'Fraunces';
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: none;
  }

  cursor: pointer;

  & a {
    text-decoration: none;
    color: var(--light-cream);
  }
`

const ContainerTabletandDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 56px;
  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    margin-bottom: 56px;
  }

  & a {
    text-decoration: none;
    height: 56px;
    background-color: var(--dark-cyan);
    border-radius: 6px;
    padding: 16px 64px;
    text-decoration: none;
    font-family: 'Fraunces';
    font-weight: 900;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: var(--light-cream);
  }
`

const TotalToPayStyle = styled.p`
  color: var(--dark-grey-blue);
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  margin-right: 13px;
`

const CheckoutBtn = () => {
  const [
    CloseOrderSummaryModal,
    HowMuchWouldYouLikeState,
    HowOftenShouldWeDeliverState,
  ] = useStore(
    (state) => [
      state.CloseOrderSummaryModal,
      state.HowMuchWouldYouLikeState,
      state.HowOftenShouldWeDeliverState,
    ],
    shallow,
  )

  const [TotalToPay, setTotalToPay] = useState(0)

  useEffect(() => {
    setTotalToPay(
      CalculateTotalToPayPerMounth(
        HowMuchWouldYouLikeState,
        HowOftenShouldWeDeliverState,
      ),
    )
  }, [])

  return (
    <>
      <ContainerMobile>
        <Link href="/" onClick={() => CloseOrderSummaryModal()}>
          Checkout - ${TotalToPay.toFixed(2)} / mo
        </Link>
      </ContainerMobile>

      <ContainerTabletandDesktop>
        <TotalToPayStyle>${TotalToPay.toFixed(2)} / mo</TotalToPayStyle>
        <Link href="/" onClick={() => CloseOrderSummaryModal()}>
          Checkout
        </Link>
      </ContainerTabletandDesktop>
    </>
  )
}

export default CheckoutBtn
