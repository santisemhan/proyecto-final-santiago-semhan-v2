import { Category } from "@material-ui/icons";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { category } from "../Constantes/Constantes";
import ItemsTable from "./ItemsTable";
import { Container, Col, Row } from "react-bootstrap";
import Ticket from "./Ticket";

const Items = () => {
  const ProductsData = [
    {
      id: uuidv4(),
      nombre: "Jabón",
      precio: 50,
      categoria: category.LIMPIEZA,
      urlImagen:
        "https://http2.mlstatic.com/jabon-rexona-125g-pack-x-10u-D_Q_NP_858083-MLA42820345418_072020-F.webp",
    },
    {
      id: uuidv4(),
      nombre: "Oreo",
      precio: 65,
      categoria: category.COMIDA,
      urlImagen:
        "https://www.chedraui.com.mx/medias/762221089445-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MzkyMTM2fGltYWdlL2pwZWd8aDc3L2g2NS85Mjk5Mzg0MDA4NzM0LmpwZ3xlZmJkZmE5NjY2NWM0MmVlZDQ4ZDFiOTc2YWI5YmZkMTAwN2IxOWY3NThiYzA5ZDhkNDRkMGMzYmMwNzUxNDVl",
    },
    {
      id: uuidv4(),
      nombre: "Manteca",
      precio: 15,
      categoria: category.COMIDA,
      urlImagen:
        "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7790080010879_11.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Coca-Cola 600ml",
      precio: 35,
      categoria: category.BEBIDA,
      urlImagen:
        "https://www.newoffice.com.ar/facturacion/assets/uploads/6d24a507c7feaf76d6c48cf9fb84cb52.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Bon o Bon",
      precio: 2,
      categoria: category.COMIDA,
      urlImagen:
        "https://abasto.com/wp-content/uploads/2016/05/BON-BON-Peanut.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Carne 1kg",
      precio: 150,
      categoria: category.COMIDA,
      urlImagen:
        "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/7WB4R5EVZZEDZMYTNIZ6MRGFXU.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Pollo 1kg",
      precio: 125,
      categoria: category.COMIDA,
      urlImagen:
        "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/p/pollo-a-la-francesa.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Lavandina",
      precio: 20,
      categoria: category.LIMPIEZA,
      urlImagen:
        "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7793253000417_02.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Trapo",
      precio: 14,
      categoria: category.LIMPIEZA,
      urlImagen:
        "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2018/10/STAR-GRIS-2-e1506530202769.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Jordan",
      precio: 180,
      categoria: category.ROPA,
      urlImagen:
        "https://horasminutosysegundos.com/media/k2/items/cache/b88a066c55eab9737c73b04fcc6006a1_XL.jpg",
    },
    {
      id: uuidv4(),
      nombre: "Remera",
      precio: 45,
      categoria: category.ROPA,
      urlImagen:
        "https://d26lpennugtm8s.cloudfront.net/stores/615/862/products/cara-de-guazon21-0de9c313c6c009943515585616328435-1024-1024.jpg",
    },
  ];

  const [items, SetItems] = useState(ProductsData);

  return (
    <>
      <Container>
        <Row>
          <div className="col-5 mt-5">
            <ItemsTable items={items} />
          </div>
          <div className="col-5 mt-5">
            <Ticket />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Items;
