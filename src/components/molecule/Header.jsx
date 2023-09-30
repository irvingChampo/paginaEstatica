import instagram from '../../img/instagram.png';
import logoKings from '../../img/logoKings.avif';
import pioCartel from '../../img/pioCartel.png';
import tikTok from '../../img/tikTok.png';
import twitter from '../../img/x.png';
import youtube from '../../img/youtube.png';


function Header() {
    return (
        <>
        <div style={{display:"flex", "justify-content": "space-between", "flex-wrap": "wrap", "background-color": "#FF9B26",}}>
            <img src={logoKings} alt="logo" width={"10%"} style={{"margin": "10px"}}></img>
            <samp style={{display:"flex"}}><p>PRODUCTO OFICIAL DE KINGS LIGUE INFOJOBS</p></samp>
            <div style={{"margin": "5px"}}>
                <img src={twitter} alt="logo" width={"15px"} style={{"margin": "5px"}}></img>
                <img src={instagram} alt={"logo"} width={"15px"} style={{"margin": "5px"}}></img>
                <img src={youtube} alt={"logo"} width={"15px"} style={{"margin": "5px"}}></img>
                <img src={tikTok} alt={"logo"} width={"15px"} style={{"margin": "5px"}}></img>
            </div>
        </div>
        <div>
                <img src={pioCartel} alt={"logo"} width={"100%"}></img>
            </div>
        </>
    );
}

export default Header;