import styled from 'styled-components'
import CardContainer from './CardContainer'

const HowOftenShouldWeDeliverDatas = {
  name: 'How often should we deliver?',
  datas: [
    {
      title: 'Every week',
      description: '$7.20 per shipment. Includes free first-class shipping.',
      value: 'Every week',
    },
    {
      title: 'Every 2 weeks',
      description: '$9.60 per shipment. Includes free priority shipping.',
      value: 'Every 2 weeks',
    },
    {
      title: 'Every month',
      description: '$12.00 per shipment. Includes free priority shipping.',
      value: 'Every month',
    },
  ],
}

const { name, datas } = HowOftenShouldWeDeliverDatas

const HowOftenShouldWeDeliverStyle = styled.div``

const HowOftenShouldWeDeliver = () => {
  return (
    <HowOftenShouldWeDeliverStyle>
      <CardContainer name={name} datas={datas} />
    </HowOftenShouldWeDeliverStyle>
  )
}

export default HowOftenShouldWeDeliver
