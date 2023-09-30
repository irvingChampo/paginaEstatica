import Reseña from '../atom/Reseña';
import reseñasData from './reseña';

function Reseñas() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '2%' }}>
      {reseñasData.map((reseña, index) => (
        <Reseña
          key={index}
          image={reseña.image}
          text2={reseña.text2}
          text={reseña.text}
          image2={reseña.image2}
        />
      ))}
    </div>
  );
}

export default Reseñas;
