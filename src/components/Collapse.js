import Button from "./Button";
import React, { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse-container">
      <div className="collapse" onClick={() => setIsOpen(false)}>
        <h2 className="collapse-titre">{title}</h2>
        <Button />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div className="collapse-container">
      <div className="collapse" onClick={() => setIsOpen(true)}>
        <h2 className="button-toggle">{title}</h2>
        <Button />
      </div>
    </div>
  );
};

export default Collapse;
