import './Servisios.css';

function servicios(props) {
    const {images, texts, texts2} = props;
    return ( 
        <>
        <div className='divs'>
            <div className='divs2'>
            <img src={images} alt="icon" className="servis-image" />
            <p className="servis-text">{texts}</p>
            <p className="servis2-text">{texts2}</p>
            </div>
        </div>
        </>
     );
}

export default servicios;