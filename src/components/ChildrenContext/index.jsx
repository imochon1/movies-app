import React, { useState, createContext } from "react";

const ChildrenContext = createContext();

function ChildrenProvider(props) {
  const [globalName, setGlobalName] = useState("sin nombre");

  return (
    <ChildrenContext.Provider
      value={{
        globalName,
        setGlobalName,
      }}
    >
      {props.children}
      {/**En este caso los props son   [globalName, setGlobalName] que setean los hijos??*/}
    </ChildrenContext.Provider>
  );
}

export { ChildrenProvider, ChildrenContext };
