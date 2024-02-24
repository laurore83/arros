import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import Collapse from "./Collapse";

export default function Cards({ image, title, text }) {
  return (
    <MDBCard className="h-65 col">
      <MDBCardImage src={image} alt="..." position="top" />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{text}</MDBCardText>

        <Collapse />
      </MDBCardBody>
    </MDBCard>
  );
}
Cards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
