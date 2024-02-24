import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Caroussel from "../components/Caroussel";
import Cards from "../components/Cards";

export default function Home() {
  const actuHome = [
    {
      id: 1,
      title: "Entretient",
      image: "./src/assets/carrousel/carouselImg1.JPG",
    },
    {
      id: 2,
      title: "Devoir de Mémoire",
      image: "./src/assets/carrousel/carouselImg1.JPG",
    },
  ];
  return (
    <div>
      <div className="image-container">
        <div className="home-bg" />
        {/* <img
          className="home-bg"
          src="./src/assets/homeImg/accueil.jpg"
          alt="home-bg"
        /> */}
        <div className="home-title ">
          <h1 className="sous-title">BATTERIE DES ARROS</h1>
          <div className="slogan">
            Association Historique de la Poche du Nord Medoc
          </div>
        </div>
      </div>
      <div className="bt-arros">
        <div className="home-pres">
          {" "}
          <div className="txt">
            Une batterie française... La dune des Arros, à la sortie nord de
            Soulac-sur-mer mais située sur le territoire de la commune du
            Verdon-sur-mer est le site retenu par la marine française, dans les
            années 30, pour l'implantation d'une batterie de côte. Avec la
            batterie du Requin, installée quant à elle sur la rive charentaise
            (commune de La Coubre), elle doit assurer la protection de l'entrée
            de l'estuaire de la Gironde. Les travaux de construction des
            ouvrages constituant ces deux batteries sont réalisés en 1938 à
            1939. La batterie française des Arros se compose de quatre
            plateformes circulaires bétonnées, avec soutes à munitions
            attenantes, supportant des pièces d'artillerie de marine Mle 1887
            d'un calibre de 164,7 mm, d'un poste de télémétrie, d'un abri pour
            projecteur de 150 cm, d'un abri pour groupe électrogène et d'une
            habitation pour le logement d'un gardien. Les travaux achevés, les
            canons jusque-là stockés en attente au fort de la Pointe de Grave
            sont mis en place sur leurs plateformes puis des essais de tir
            permettent de valider les installations. La batterie des Arros est
            déclarée opérationnelle en août 1939.
          </div>
          <Caroussel />
          <div className="btn-plus">
            <MDBBtn className="rounded-pill" color="dark" href="/gallerie">
              Voir +
            </MDBBtn>
          </div>
        </div>
      </div>
      <div className="quisommesns">
        <img
          className="presimg"
          src="./src/assets/homeImg/president.jpg"
          alt="president"
        />
        <div>
          <h2 className="sous-title">QUI SOMMES NOUS</h2>
          <h3>Entretient et Préservation</h3>
        </div>
      </div>
      <div className="blk-asso">
        <div className="assos">
          <img
            className="logo"
            src="./src/assets/logo/LOGO AHPNM  - JPEG -   2023-modified.png"
            alt="logo"
          />
          <h2 className="sous-title">AHPNM</h2>
        </div>

        <div className="txt">
          L'Association Historique de la Poche du Nord Médoc (AHPNM) est une
          association régie par la loi du 1er juillet 1901 à vocation historique
          et culturelle. Elle a été créée dans le but de valoriser et de
          protéger le bâti militaire réalisé au 20ème siècle sur le site et aux
          abords des Arros, à la sortie nord de Soulac-sur-mer sur la commune du
          Verdon-sur-mer. Ce patrimoine, aujourd'hui étudié dans le cadre de
          l'archéologie contemporaine, regroupe des ouvrages français
          d'avant-guerre et des ouvrages allemands intégrés au réseau de défense
          des côtes appelé le "Mur de l'Atlantique". Hormis l'intérêt
          architectural et technique de ces constructions, nous avons également
          pour mission de mettre en avant leur valeur historique dans un cadre
          de devoir de mémoire, puisque ce secteur fut le théâtre de durs
          combats lors de la libération de la poche de résistance allemande en
          avril 1945...
        </div>
      </div>
      <div className="dark_bg">
        <h2 className="sous-title">NOS ACTIONS</h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-0 grid">
          {actuHome.map((item) => (
            <MDBCol key={item.id}>
              <Cards title={item.title} image={item.image} />
            </MDBCol>
          ))}
        </MDBRow>
      </div>

      <div className="dark_light">
        <h2 className="sous-title">NOTRE ACTU</h2>
        <Caroussel />
        <div className="btn-plus">
          <MDBBtn className="btn-dark rounded-pill" olor="dark" href="/actu">
            Voir +
          </MDBBtn>
        </div>
      </div>
    </div>
  );
}
