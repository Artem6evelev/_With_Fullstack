import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { GetPics } from "../utils/data";

export const BtnFetch = (props) => {
  const [bttnPressed, setBttnPressed] = useState(false);

  async function handlePress() {
    if (!bttnPressed) {
      let photos = await GetPics();
      if (photos.status === 1) {
        props.setData(photos.data);
        setBttnPressed(true);
      }
    }
  }

  const btn_style = {
    backgroundColor: "#7FFFD4",
    padding: "50px 80px",
    fontSize: "30px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ paddingRight: "10px" }}>Coing </h1>
      <Button style={btn_style} onClick={handlePress}>
        {" "}
        Load images
      </Button>
    </div>
  );
};
