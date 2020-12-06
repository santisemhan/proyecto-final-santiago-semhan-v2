import React from "react";
import NavBar from "../Layout/NavBar";
import EstadisticasCompra from "../Common/EstadisticasCompra";

const Compra = () => {
  return (
    <>
      <div
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(115,194,209,1) 48%, rgba(0,212,255,1) 100%)",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <EstadisticasCompra />
      </div>
    </>
  );
};

export default Compra;
