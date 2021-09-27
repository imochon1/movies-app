import React, { useContext } from "react";
import { ChildrenContext } from "../ChildrenContext";
function ChildrenB() {
  const { globalName, setGlobalName } = useContext(ChildrenContext);

  const changeData = () => {
    setGlobalName("Nombre Global 2 ");
  };

  return (
    <div>
      Children B Works {globalName}
      <button onClick={changeData}>Cambiar Valor</button>
    </div>
  );
}

export { ChildrenB };
