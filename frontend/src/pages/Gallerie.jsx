import { useState } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Modal from "../components/Modal";
import PhotoCard from "../components/PhotoCard.json";

export default function Gallerie() {
  const [basicModal, setBasicModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const toggleOpen = (url) => {
    setBasicModal(!basicModal);
    setModalImage(url);
  };

  // const gallerie = new Array(21);
  // for (let i = 0; i < gallerie.length; i += 1) {
  //   gallerie[i] = {
  //     url: `src/assets/galleriePhoto/gallerie (${i + 1}).JPG`,
  //     id: i + 1,
  //   };
  // }

  return (
    <div>
      <div className="image-container">
        <div className="home-bg " />

        <div className=" visite">
          <div>GALLERIE</div>
        </div>
      </div>
      <MDBRow className="mb-3 g-0">
        {PhotoCard.map((item) => (
          <MDBCol key={item.url} sm={6} md={4} className="g-4">
            <button
              type="button"
              className="gallerie-card"
              onClick={() => toggleOpen(item.url)}
            >
              <div>{item.title}</div>
              <div
                className="gallerie-preview"
                style={{
                  backgroundImage: `url("/${item.url}")`,
                }}
              >
                <div>{item.txt}</div>
              </div>
              {/* <img
                src={item.url}
                alt={item.url}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
              /> */}
              {/* <div>description</div> */}
            </button>
          </MDBCol>
        ))}
      </MDBRow>
      <Modal
        isOpen={basicModal}
        toggle={() => {
          toggleOpen();
        }}
        imageUrl={modalImage}
      />
    </div>
  );
}
