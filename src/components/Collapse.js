import Button from "./Button";
import React, { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse-box">
      <div className="collapse" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <Button />
      </div>
      <div className="description">
        <p className="pDescription">{description}</p>
      </div>
    </div>
  ) : (
    <div className="collapse-box">
      <div className="collapse" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <Button />
      </div>
    </div>
  );
};

export default Collapse;
