import React, { useContext } from "react";
import { ChildrenContext } from "../ChildrenContext";
function ChildrenA() {
  const { globalName, setGlobalName } = useContext(ChildrenContext);

  const changeData = () => {
    setGlobalName("Nombre Global");
  };

  return (
    <div>
      Children A Works {globalName}
      <button onClick={changeData}>Cambiar Valor</button>
    </div>
  );
}

export { ChildrenA };
