import styled from 'styled-components'
import CardContainer from './CardContainer'

const HowMuchWouldYouLikeDatas = {
  name: 'How much would you like?',
  datas: [
    {
      title: '250g',
      description:
        'Perfect for the solo drinker. Yields about 12 delicious cups.',
      value: '250g',
    },
    {
      title: '500g',
      description:
        'Perfect option for a couple. Yields about 40 delectable cups.',
      value: '500g',
    },
    {
      title: '1000g',
      description:
        'Perfect for offices and events. Yields about 90 delightful cups.',
      value: '1000g',
    },
  ],
}

const { name, datas } = HowMuchWouldYouLikeDatas

const HowMuchWouldYouLikeStyle = styled.div``

const HowMuchWouldYouLike = () => {
  return (
    <HowMuchWouldYouLikeStyle>
      <CardContainer name={name} datas={datas} />
    </HowMuchWouldYouLikeStyle>
  )
}

export default HowMuchWouldYouLike
