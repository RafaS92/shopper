import React from "react";
import Product from "./Product";
import "../Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        alt=""
        src="https://ginabjorvig.com/portfolio/wp-content/uploads/2018/04/Argos_0118_M020-23_jansale_tech_desktop.jpg"
      />

      <div className="home_row">
        <Product
          id="1111"
          title="Microsoft Xbox One 1TB Console"
          price={399.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51cOqbx5z3L._SL1000_.jpg"
        />
        <Product
          id="1112"
          title="Bose Home Speaker 300 (Triple Black)"
          price={449.65}
          rating={4}
          image="https://static.bhphoto.com/images/images1000x1000/1561383910_1478158.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1113"
          title="Apple iPhone 11 Pro (64GB)"
          price={784.99}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566960958082"
        />
        <Product
          id="1114"
          title="Sell Apple Earpods 2 Wireless & Get The Best Value of Earpod"
          price={135.29}
          rating={3}
          image="https://atlas-content-cdn.pixelsquid.com/stock-images/apple-airpods-earphones-exdGm2B-600.jpg"
        />
        <Product
          id="1115"
          title="Apple iPad Pro 1TB 11´"
          price={249.85}
          rating={4}
          image="https://www.techinn.com/f/13734/137343537/apple-ipad-pro-1tb-11.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="1116"
          title="Samsung UA-50KU6000 50 UHD 4K Smart Wifi Built in 110 220 240 volts pal ntsc secam led tv"
          price={599.99}
          rating={5}
          image="https://www.220-electronics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-ua60ku6000-ultra-hd-multi-system-led-tv_1_1.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1126"
          title="Apple 13 Macbook Pro Touch Bar (Space Grey)"
          price={999.99}
          rating={3}
          image="https://housesmile.co.nz/wp-content/uploads/2020/05/apple-13i-2.jpg"
        />
        <Product
          id="1136"
          title="Samsung 8.0 32GB Galaxy Tab A (2019, Wi-Fi Only, Black"
          price={557.99}
          rating={4}
          image="https://static.bhphoto.com/images/images2500x2500/1556412161_1462082.jpg"
        />
        <Product
          id="1146"
          title="Oculus Quest Set"
          price={399.99}
          rating={3}
          image="https://www.gamerdrive.net/44322-large_default/oculus-rift-s-virtual-reality-headset.jpg"
        />
        <Product
          id="1156"
          title="Samsung Galaxy S10 Lite G770F 8GB/128GB DS Prism Blue"
          price={447.69}
          rating={3}
          image="https://www.powerplanetonline.com/cdnassets/samsung_galaxy_s10_lite_g770f_6gb_128gb_ds_prism_blue_03_azul_ad_l.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1616"
          title="Nintendo switch"
          price={279.99}
          rating={5}
          image="https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/package_redblue.jpg"
        />
        <Product
          id="1716"
          title="Super Smash Bros Ultimate"
          price={59.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg"
        />
        <Product
          id="1816"
          title="Beats Pro Over-Ear Headphones - Black"
          price={289.19}
          rating={3}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHA22_AV6?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1465862222667"
        />
      </div>
      <div className="home_row">
        <Product
          id="1916"
          title="Nintendo switch"
          price={953.29}
          rating={5}
          image="data:image/jpeg;base64,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"
        />
        <Product
          id="2116"
          title="Drone X Pro EXTREME w/ Extra Batteries HD Camera Live Video WiFi FPV Voice Command"
          price={889.99}
          rating={3}
          image="https://cdn.shopify.com/s/files/1/0062/4364/7543/products/image_d267dd48-1b24-4885-97c1-7b807b956b74_800x.jpg?v=1590806733"
        />
      </div>
    </div>
  );
}

export default Home;
