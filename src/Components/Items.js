import { Category } from "@material-ui/icons";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { category } from "../Constantes/Constantes";
import ItemsTable from "./ItemsTable";
import { Container, Col, Row } from "react-bootstrap";

const Items = () => {
  const ProductsData = [
    { id: uuidv4(), nombre: "Jabón", precio: 50, categoria: category.LIMPIEZA },
    { id: uuidv4(), nombre: "Oreo", precio: 65, categoria: category.COMIDA },
    { id: uuidv4(), nombre: "Manteca", precio: 15, categoria: category.COMIDA },
    {
      id: uuidv4(),
      nombre: "Coca-Cola 600ml",
      precio: 35,
      categoria: category.BEBIDA,
    },
    {
      id: uuidv4(),
      nombre: "Bon o Bon",
      precio: 2,
      categoria: category.COMIDA,
    },
    {
      id: uuidv4(),
      nombre: "Carne 1kg",
      precio: 150,
      categoria: category.COMIDA,
    },
    {
      id: uuidv4(),
      nombre: "Pollo 1kg",
      precio: 125,
      categoria: category.COMIDA,
    },
    {
      id: uuidv4(),
      nombre: "Lavandina",
      precio: 20,
      categoria: category.LIMPIEZA,
    },
    { id: uuidv4(), nombre: "Trapo", precio: 14, categoria: category.LIMPIEZA },
    { id: uuidv4(), nombre: "Jordan", precio: 180, categoria: category.ROPA },
    { id: uuidv4(), nombre: "Remera", precio: 45, categoria: category.ROPA },
  ];

  const [items, SetItems] = useState(ProductsData);

  return (
    <>
      <div className="col-8">
        <ItemsTable />
      </div>
    </>
  );
};

export default Items;
