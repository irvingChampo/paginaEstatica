import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Galery.css';

import k from '../../img/1k.avif';
import ani from '../../img/aniquilador.webp';
import buyer from '../../img/buyer.avif';
import jantes from '../../img/jantes.avif';
import rayo from '../../img/rayo.avif';
import sayans from '../../img/sayans.avif';
import ultimate from '../../img/ultimate.webp';

function Gallery() {
  const carouselStyle = {
    width: '33%',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '25%',
  };

  return (
    <Carousel style={carouselStyle} className='Galery'>
      <div>
        <img src={k} alt="logo" style={imageStyle} />
      </div>
      <div>
        <img src={ani} alt="logo" style={imageStyle} />
      </div>
      <div>
        <img src={buyer} alt="logo" style={imageStyle} />
      </div>
      <div>
        <img src={jantes} alt="logo" style={imageStyle} />
      </div>
      <div>
        <img src={rayo} alt="logo" style={imageStyle} />
      </div>
      <div>
        <img src={sayans} alt="logo" style={imageStyle} />
      </div>
      <div>
        <img src={ultimate} alt="logo" style={imageStyle} />
      </div>
    </Carousel>
  );
}

export default Gallery;
