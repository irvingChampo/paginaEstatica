import Catalogue from "../molecule/Catalogue";
import Footer from "../molecule/Footer";
import Galery from "../molecule/Galery";
import Header from "../molecule/Header";
import Reseñas from "../molecule/Reseñas";
function Home() {
    return (
    <div>
    <Header></Header>
    <Catalogue></Catalogue>
    <Reseñas></Reseñas>
    <Galery></Galery>
    <Footer></Footer>
    </div>
    );
}

export default Home;