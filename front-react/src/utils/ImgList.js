import React from "react";
import Grid from "@material-ui/core/Grid";

export default function GalleryGrid(props) {
  return (
    <Grid container>
      {props.data.map((pic, idx) => {
        return (
          <Grid key={idx} item xs={4}>
            <div
              style={{
                textAlign: "center",
                padding: "2px",
              }}
            >
              <img
                alt={pic.title}
                src={pic.path}
                key={pic.path}
                height="200px"
              />
              <br />
              <label className={"picture-lable"}>{pic.title}</label>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
