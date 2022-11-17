import styled from 'styled-components'
import Coffee from './Coffee'
const CoffeeItems = [
  {
    picture: '/assets/home/desktop/image-gran-espresso.png',
    alt_picture: 'gran espresso picture',
    name: 'Gran Espresso',
    details:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    picture: '/assets/home/desktop/image-planalto.png',
    alt_picture: 'planalto',
    name: 'Planalto',
    details:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    picture: '/assets/home/desktop/image-piccollo.png',
    alt_picture: 'piccollo',
    name: 'Piccollo',
    details:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
  },
  {
    picture: '/assets/home/desktop/image-danche.png',
    alt_picture: 'danche',
    name: 'Danche',
    details:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
]

const CollectionContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 72px repeat(4, auto);
  row-gap: 48px;
  margin-bottom: 120px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-template-rows: 118px repeat(4, auto);
    text-align: left;
    row-gap: 32px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 196px auto;
    row-gap: 0;
    margin-bottom: 200px;
  }
`

const OurCollectionIMGContainer = styled.div`
  background: url('/assets/home/desktop/our-collection.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) and (max-width: 1439px) {
    background: url('/assets/home/tablet/our-collection-tablet.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 1440px) {
    background: url('/assets/home/desktop/our-collection-desktop.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    grid-row: 1 / 2;
    grid-column: 1 / 5;
  }
`

const Collection = () => {
  return (
    <CollectionContainer>
      <OurCollectionIMGContainer />
      {CoffeeItems.map((item, index) => (
        <Coffee
          key={index}
          path={item.picture}
          alt={item.alt_picture}
          name={item.name}
          description={item.details}
        />
      ))}
    </CollectionContainer>
  )
}

export default Collection
