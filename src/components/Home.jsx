import React from "react";
import Product from "./Product";
import "../Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        // src="https://vapedille.com/wp-content/uploads/2020/01/sb45-um-demo.png"
        alt=""
        src="https://img.freepik.com/free-psd/black-friday-banner-mockup-with-image_23-2147982242.jpg?size=626&ext=jpg"
      />

      <div className="home_row">
        <Product
          id="1111"
          title=" adfafds f a dfa f adfa a faeraehaerhf aafajdkfsdfja afdja ja da"
          price={11.96}
          rating={5}
          image="https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg"
        />
        <Product
          id="1112"
          title="perro"
          price={11.96}
          rating={5}
          image="https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1113"
          title="perro"
          price={11.96}
          rating={5}
          image="https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg"
        />
        <Product
          id="1114"
          title="perro"
          price={11.96}
          rating={5}
          image="https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg"
        />
        <Product
          id="1115"
          title="perro"
          price={11.96}
          rating={5}
          image="https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="1116"
          title="perro"
          price={11.96}
          rating={5}
          image="https://s1.eestatic.com/2020/03/11/como/Coronavirus-Enfermedades_infecciosas-Infecciones-Mascotas-Como_hacer_473964995_147985150_1024x576.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
