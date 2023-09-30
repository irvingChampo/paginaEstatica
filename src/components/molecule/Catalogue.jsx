import Card from '../atom/Card';
import catalogueData from './CatalogueData';

function Catalogue() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '2%' }}>
      {catalogueData.map((item, index) => (
        <Card key={index} image={item.image} text={item.text} text2={item.price} />
      ))}
    </div>
  );
}

export default Catalogue;
