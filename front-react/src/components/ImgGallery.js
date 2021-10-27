import React, { useEffect, useState } from "react";
import GalleryGrid from "../utils/ImgList";

export const ImgGallery = (props) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (props.data.length > 0) {
      setFilteredData(filterBadPaths());
    }
  }, [props.data]);

  function filterBadPaths() {
    let re = RegExp("^https://via.placeholder.com/[0-9]{3}/[a-zA-Z0-9]+$");

    let filtered = [];
    if (props.data.length > 0) {
      props.data.forEach((pic) => {
        if (re.test(pic.path)) {
          filtered.push(pic);
        }
      });
    }
    return filtered;
  }

  return (
    <div>
      {filteredData.length > 0 ? <GalleryGrid data={filteredData} /> : ""}
    </div>
  );
};
