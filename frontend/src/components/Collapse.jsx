import React, { useState } from "react";
import { MDBCollapse } from "mdb-react-ui-kit";

export default function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button type="button" className="infos" onClick={toggleOpen}>
        Link
      </button>
      <MDBCollapse open={isOpen}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse>
    </>
  );
}
