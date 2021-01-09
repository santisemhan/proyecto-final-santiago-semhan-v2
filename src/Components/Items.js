import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { category } from "../Constantes/Constantes";
import ItemsTable from "./ItemsTable";
import { Container, Row, Button } from "react-bootstrap";
import Ticket from "./Ticket";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Items = (props) => {
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

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [items, SetItems] = useState(ProductsData);
  const [agregandoItem, SetAgregandoItem] = useState(false);
  const [item, setItem] = useState({
    nombre: "",
    precio: 1,
    categoria: "",
    urlImagen: "",
  });
  const [error, setError] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registroItem = (e) => {
    e.preventDefault();
    const { nombre, precio, categoria, urlImagen } = item;
    const itemObject = { nombre, precio, categoria, urlImagen };

    addItems(itemObject);
    SetAgregandoItem(false);
  };

  const addItems = (item) => {
    item.id = uuidv4();
    item.precio = parseInt(item.precio);
    if (item.precio > 0) {
      SetItems([...items, item]);
      setItem({ nombre: "", precio: 1, categoria: "", urlImagen: "" });
      SetAgregandoItem(false);
    } else {
      handleClickOpen();
      setTitulo("PRODUCTO NO AGREGADO!");
      setTexto(
        "El producto no ha sido agregado ya que el precio es invalido. Recuerda que debe ser mayor que $0 y en el formulario debe ir sin el signo $."
      );
    }
  };

  const handlerInput = (e) => {
    const { value: input } = e.target;
    setItem({
      ...item,
      [e.target.name]: input,
    });
  };

  const deleteItem = (id) => {
    SetItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      {agregandoItem == false ? (
        <>
          {error === true ? (
            <>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {texto}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cerrar
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          ) : (
            <p></p>
          )}

          <Container>
            <Row>
              <div className="col-5 mt-5">
                <ItemsTable
                  items={items}
                  agregandoItem={SetAgregandoItem}
                  deleteItem={deleteItem}
                />
              </div>
              <div className="col-5 mt-5">
                <Ticket props={props} />
              </div>
            </Row>
          </Container>
        </>
      ) : (
        <Container>
          <div className="row justify-content-center h-150">
            <Card style={{ marginTop: "15%", maxWidth: "50%" }}>
              <center>
                <strong>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ marginTop: "10px" }}
                  >
                    Agregar Producto
                  </Typography>
                </strong>
              </center>
              <form
                onSubmit={registroItem}
                className="mb-3"
                style={{ padding: "20px" }}
              >
                <div className="form-group">
                  <TextField
                    required
                    id="nombre"
                    label="Nombre"
                    style={{ width: "380px", marginTop: "5px" }}
                    type="text"
                    className="form-control"
                    onChange={handlerInput}
                    value={item.nombre}
                    name="nombre"
                    required
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    required
                    id="precio"
                    label="Precio"
                    style={{ width: "380px", marginTop: "5px" }}
                    type="text"
                    className="form-control"
                    onChange={handlerInput}
                    value={item.precio}
                    name="precio"
                    required
                    placeholder="$"
                  />
                </div>
                <div className="form-group">
                  <FormControl className="mt-2">
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Categoria
                    </InputLabel>
                    <Select
                      style={{ width: "380px" }}
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      onChange={handlerInput}
                      displayEmpty
                      className={classes.selectEmpty}
                      name="categoria"
                      value={item.categoria}
                      required
                    >
                      <MenuItem value={1}>COMIDA</MenuItem>
                      <MenuItem value={3}>BEBIDA</MenuItem>
                      <MenuItem value={2}>ROPA</MenuItem>
                      <MenuItem value={0}>LIMPIEZA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="form-group">
                  <TextField
                    required
                    id="urlImagen"
                    label="Imagen URL"
                    style={{ width: "380px", marginTop: "-11px" }}
                    type="text"
                    className="form-control"
                    onChange={handlerInput}
                    value={item.urlImagen}
                    name="urlImagen"
                  />
                </div>
                <Button
                  onClick={() => {
                    SetAgregandoItem(false);
                  }}
                  style={{ marginTop: "25px", marginLeft: "20%" }}
                >
                  Volver
                </Button>
                <Button
                  type="submit"
                  className="btn btn-success ml-5"
                  style={{ marginTop: "25px" }}
                >
                  Agregar Item
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      )}
    </>
  );
};

export default Items;
