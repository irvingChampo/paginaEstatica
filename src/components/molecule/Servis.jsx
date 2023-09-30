import Servicios from '../atom/Servisios';
import serviciosData from './servicio';
function Servis() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '2%' }}>
      {serviciosData.map((servicio, index) => (
        <Servicios key={index} images={servicio.image} texts={servicio.text1} texts2={servicio.text2} />
      ))}
    </div>
  );
}

export default Servis;
