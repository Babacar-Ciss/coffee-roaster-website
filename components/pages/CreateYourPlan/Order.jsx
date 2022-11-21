import styled from 'styled-components'

const OrderStyle = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 40px;
  color: ${(props) =>
    props.type === 'summary' ? 'var(--grey)' : 'var(--light-cream)'};

  span {
    color: var(--dark-cyan);
  }
`

const Order = ({ type }) => {
  return (
    <OrderStyle type={type}>
      “I drink my coffee as <span>Filter</span> , with a <span>Decaf</span> type
      of bean. <span>250g</span> ground ala <span>Cafetiare</span>, sent to me{' '}
      <span>Every Week</span>.”
    </OrderStyle>
  )
}

export default Order
