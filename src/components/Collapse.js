import Button from "./Button";
import React, { useState } from "react";

const Collapse = ({title, description}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse-container">
      <div className="collapse">
        <h2 className="button-toggle">{title}</h2>
        <Button onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && <p>{description}</p>}
    </div>
  );
};

export default Collapse;
