import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";

export default function Modal({ isOpen, toggle, imageUrl }) {
  return (
    <div>
      <MDBModal open={isOpen} tabIndex="-1">
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalBody>
              <button
                type="button"
                className="cross-close"
                color="none"
                onClick={toggle}
              >
                Fermer
              </button>
              <div>
                <img className="img-modal" src={imageUrl} alt="gal" />
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
