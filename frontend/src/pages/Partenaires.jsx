import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Cards from "../components/Cards";

export default function Partenaires() {
  const partenaires = [
    {
      id: 1,
      title: "Mairie de Soulac",
      image: "./src/assets/partenaires/logo-soulac.png",
    },
    {
      id: 2,
      title: "Office Nationale des forêts",
      image: "./src/assets/partenaires/Office_national_des_forêts_logo.svg.png",
    },
  ];
  return (
    <div>
      <div className="image-container">
        <div className="home-bg " />

        <div className=" visite">
          <div>NOS PARTENAIRES</div>
        </div>
      </div>
      <div className="container-grid">
        <MDBRow className="row-cols-1 row-cols-md-3 g-0 grid">
          {partenaires.map((item) => (
            <MDBCol key={item.id}>
              <Cards title={item.title} image={item.image} />
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </div>
  );
}
