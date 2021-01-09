import React, { useEffect } from "react";
import Chart from "chart.js";
import { addMore, addLess } from "../redux/actions/addTicket";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

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

  useEffect(() => {
    var ctx = cr.current.getContext("2d");
    new Chart(ctx, {
      type: "pie", //pie o bar
      data: {
        labels: ["LIMPIEZA", "COMIDA", "ROPA", "BEBIDA"],
        datasets: [
          {
            label: "Estadisticas de la compra",
            data: porcentajeFinal,
            backgroundColor: [
              "#ffa600",
              "#ff6361",
              "#58508d",
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
      <Paper
        elevation={3}
        style={{
          margin: "95px 0px 0px 270px",
          maxWidth: "35%",
        }}
      >
        <canvas
          ref={cr}
          width="50%"
          height="50%"
          style={{
            margin: "0px 0px -100% 5px",
            maxWidth: "648px",
            maxHeight: "594px",
          }}
        ></canvas>
      </Paper>
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
