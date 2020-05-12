import React from "react";

const Spinner = () => {
  return (
    <div className="page restdocumentation--loader">
      <span>
        <i
          key="restdocumentation__loader"
          className="fas fa-circle-notch fa-spin fa-3x"
        ></i>
      </span>
    </div>
  );
};

export default Spinner;
