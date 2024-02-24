import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function Caroussel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imgEquipePedago = [
    { id: 1, img: "./src/assets/carrousel/carouselImg1.JPG" },
    { id: 2, img: "./src/assets/carrousel/carousel2.JPG" },
    { id: 3, img: "./src/assets/carrousel/carousel3.JPG" },
  ];
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplayDelay="700"
        //  autoplay="true"
        delay="200"
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            border: "none",
            backgroundColor: "#272727",
            borderRadius: "50%",
            color: "rgb(218 190 144)",
            cursor: "pointer",
            fontSize: "30px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "#272727",
            color: "rgb(218 190 144)",
            cursor: "pointer",
            fontSize: "30px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={600}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {imgEquipePedago.map((img) => (
          <div
            key={img.id}
            className="slide"
            style={{ width: 200, height: 300 }}
          >
            <img
              src={img.img}
              alt={`Slide${img.id}`}
              style={{
                width: "200px", // Largeur fixe de 200px
                height: "260px", // Hauteur fixe de 300px
                objectFit: "cover", // Pour ajuster les images sans déformer leur aspect
              }}
            />
            <div className="carousel-txt">
              <h3>titre carousel</h3>
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Caroussel;
