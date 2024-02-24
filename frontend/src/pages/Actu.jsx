import { MDBRow } from "mdb-react-ui-kit";
import Cards from "../components/Cards";

export default function Actu() {
  const actu = [
    {
      id: 1,
      title: "ACTU1",
      image: "./src/assets/actu/art1.png",
    },
    {
      id: 2,
      title: "ACTU2",
      image: "./src/assets/actu/art2.png",
    },
  ];
  return (
    <div>
      <div className="image-container">
        <div className="home-bg " />

        <div className=" visite">
          <div>NOTRE ACTUALITE</div>
        </div>
      </div>
      <div>
        <MDBRow className="row-cols-1 row-cols-md-3 g-0 grid">
          {actu.map((item) => (
            <Cards title={item.title} image={item.image} />
          ))}
        </MDBRow>
      </div>
    </div>
  );
}
