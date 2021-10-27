import React, { useState } from "react";
import "./App.css";
import { BtnFetch } from "./components/BtnFetch";
import { ImgGallery } from "./components/ImgGallery";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <BtnFetch setData={setData} />
      <br />
      <ImgGallery data={data} />
    </div>
  );
}

export default App;
