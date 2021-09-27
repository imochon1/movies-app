import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cartel } from "../Cartel/";
import { ItemMovie } from "../ItemMovie/";
import { ChildrenProvider, ChildrenContext } from "../ChildrenContext";
import { Home } from "../Home";
import { Saluda } from "../Saluda";
import { ChildrenA } from "../ChildrenA";
import { ChildrenB } from "../ChildrenB";
import { FormMovies } from "../FormMovies"; //
import Movies from "../Movies";

function Dashboard() {
  //1 GLOBAL STATE
  const [movies, setMovies] = useState([]);
  //  GLOBAL STATE
  const [indicator, setIndicator] = useState("");
  // GLOBAL STATE
  const [flag, setFlag] = useState("n");

  //const [peliculasContext, setPeliculasContext ] = useContext("");
  const indicatorFn = (receivedIndicator) => {
    console.log("LLEGANDO - indicatorFn: ", receivedIndicator);
    receivedIndicator === "Buenas noches" ? setFlag("d") : setFlag("n");
    console.log("LLEGANDO flag: ", flag);
    setIndicator(receivedIndicator);
  };

  return (
    <Switch>
      <Route path="/context">
        <ChildrenProvider>
          <ChildrenContext.Consumer>
            {(value) => (
              <>
                <ChildrenA />
                <ChildrenB />
              </>
            )}
          </ChildrenContext.Consumer>
        </ChildrenProvider>
      </Route>
      <Route path="/saluda">
        <Saluda flag={flag} indicatorSended={indicatorFn} />
      </Route>
      <Route path="/movies">
        {/** 2 INFORMARLE A LOS COMPONENTES CUAL ES EL STATE Y EL SETSTATE GLOBAL */}
        <FormMovies movies={movies} setMovies={setMovies} />
        <Movies movies={movies} setMovies={setMovies} />
      </Route>
      <Route path="/">
        <Home name="Películas" patito={indicator} />
      </Route>
    </Switch>
  );
}
export { Dashboard };
