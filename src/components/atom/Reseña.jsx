import './Reseña.css';

function reseña(props) {
  const { image, text2, image2, text } = props;

  return ( 
    <div className="reseña-container">
      <div className="reseña-container3">
        <img src={image} alt="icon" className="reseña-image3" />
        <p className="spam2">{text2}</p>
      </div>

      <div className="reseña-container2">
        <p className="spam">{text}</p>
        <img src={image2} alt="icon" className="reseña-image2" />
      </div>
    </div>
  );
}

export default reseña;
