import React, { useRef, useState, createContext, useContext } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

function FormMovies(props) {
  //RECUPERAR LOS DATOS DE LA PELICULA EN AUXILIAR
  const moviesLocal = useRef({});
  // 3CREAR UN ESTADO GENERICO   PARA PELICULAS(NAME.MOVIENAME) Y (TICKETS)
  const [peliculas, setPeliculas] = useState({});

  const [car, setCar] = useState("");

  // const { peliculasContext, setPeliculasContext } = useState("");

  const formContext = useContext("");

  const addMovie = () => {
    // OBTIENE LA PELICULA DESDE EL ESTADO DE PELICULAS LOCAL
    const movieAux = { ...peliculas };
    //EN EL MOVIES LOCAL CREA UN ARRAY CON LAS PELICULAS GLOBALES MAS LAS PELICULA GLOBAL
    moviesLocal.current = [...props.movies, movieAux];
    if (moviesLocal.current.length > 5) {
      moviesLocal.current.splice(0, 3);
    } //UNA VEZ QUE SE CORTA EL ESTADO LOCAL SE ENVIA AL ESTADO GLOBAL
    props.setMovies(moviesLocal.current);
  };

  const textAreaChange = (event) => {
    console.log("event", event.target.value);
  };

  const handleSelect = (e) => {
    const car = e.target.value;
    console.log("car", car);
    setCar(car);
  };
  // 4 RECUPERA EL NOMBRE Y TICKETS DESDE EL FORMULARIO PARA PASAR EL ESTADO A PELICULA

  const updateStatesForm = (e) => {
    const stateName = e.target.name;
    const val = e.target.value;
    setPeliculas({ ...peliculas, [stateName]: val });
    //console.log("statename", stateName);
    //console.log("val", val);
    //console.log("cambio de estado", peliculas);
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Película</Form.Label>
        <Form.Control
          type="text"
          name="movieName"
          placeholder="pelicula"
          onChange={(e) => updateStatesForm(e)}
        />
        <Form.Label>Boletos</Form.Label>
        <Form.Control
          type="text"
          name="tickets"
          placeholder="boletos"
          onChange={(e) => updateStatesForm(e)}
        />
      </Form.Group>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control
          controlId="floatingTextarea"
          as="textarea"
          placeholder="Leave a comment here"
          onChange={(e) => textAreaChange(e)}
        />
      </FloatingLabel>
      <FloatingLabel
        name="cars"
        id="cars"
        value={car}
        onChange={(e) => handleSelect(e)}
        controlId="floatingSelect"
        label="Works with selects"
      >
        <Form.Select>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>
      <Button variant="primary" onClick={() => addMovie()}>
        +
      </Button>
    </div>
  );
}

export { FormMovies };
