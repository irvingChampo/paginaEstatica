import LogoPio from '../../img/pio-logo.png';
import Servis from './Servis';
function Footer() {
    return ( 
        <div style={{display:"flex", "justify-content": "space-between", "flex-wrap": "wrap", "background-color": "gray",}}>
        <Servis></Servis>
            <p>© 2023 Kings League |</p>
            <img src={LogoPio} alt="logo" width={"3%"} style={{"margin": "10px"}}></img>
        </div>
    );
}

export default Footer;