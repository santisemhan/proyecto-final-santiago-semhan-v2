import React, { useEffect } from "react";
import Chart from "chart.js";
import { addMore, addLess } from "../redux/actions/addTicket";
import { connect } from "react-redux";
import { category } from "../Constantes/Constantes";
import Typography from "@material-ui/core/Typography";

const EstadisticasCompra = (props) => {
  const cr = React.createRef();

  var categorias = [0, 0, 0, 0];
  props.state.addTicket.items.forEach((item) => {
    ++categorias[item.categoria];
  });
  let total = categorias.reduce((a, b) => a + b, 0);
  var porcentajeFinal = [0, 0, 0, 0];
  for (let i = 0; i < categorias.length; i++) {
    porcentajeFinal[i] = Math.round((categorias[i] / total) * 100);
  }
  console.log(categorias);

  useEffect(() => {
    var ctx = cr.current.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["LIMPIEZA", "COMIDA", "ROPA", "BEBIDA"],
        datasets: [
          {
            label: "Estadisticas de la compra",
            data: porcentajeFinal,
            backgroundColor: [
              "rgb(226, 70, 46)",
              "rgb(73, 162, 66)",
              "rgb(194, 190, 46)",
              "rgb(192, 63, 215)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {},
      },
    });
  });

  return (
    <>
      <canvas
        ref={cr}
        width="300px"
        height="100vh"
        style={{
          paddingTop: "2%",
          margin: "30px 0px -32%",
          marginLeft: "-400px",
        }}
      ></canvas>
    </>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addMore: () => {
      dispatch(addMore(props.props));
    },
    addLess: () => {
      dispatch(addLess(props.props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EstadisticasCompra);
