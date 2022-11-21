import styled from 'styled-components'
import CardContainer from './CardContainer'

const WantUsToGridThemDatas = {
  name: 'Want us to grind them?',
  datas: [
    {
      title: 'Wholebean',
      description: 'Best choice if you cherish the full sensory experience',
      value: 'Wholebean',
    },
    {
      title: 'Filter',
      description:
        'For drip or pour-over coffee methods such as V60 or Aeropress',
      value: 'Filter',
    },
    {
      title: 'Cafetiére',
      description:
        'Course ground beans specially suited for french press coffee',
      value: 'Cafetiére',
    },
  ],
}

const { name, datas } = WantUsToGridThemDatas

const WantUsToGridThemStyle = styled.div``

const WantUsToGridThem = () => {
  return (
    <WantUsToGridThemStyle>
      <CardContainer name={name} datas={datas} />
    </WantUsToGridThemStyle>
  )
}

export default WantUsToGridThem
