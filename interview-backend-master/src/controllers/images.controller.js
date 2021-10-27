const catchAsync = require("../utils/catchAsync");

const photosUrl =
  "https://my-json-server.typicode.com/coing-dev/photo-api/photos";

const imagesUrl =
  "https://my-json-server.typicode.com/coing-dev/photo-api/images";

function format(resImg, resPhoto) {
  let data = [];
  resImg.data[0].forEach((picture) => {
    data.push(picture);
  });
  resPhoto.data[0].forEach((picture) => {
    template = {
      albumId: picture.id,
      id: picture.id,
      title: picture.title,
      path: picture.url,
    };
    data.push(template);
  });
  return {
      status: 1,
      data: data
  }
}

const getImages = catchAsync(async (req, res) => {
  /**
   * TODO CALL TO OUTSIDE API
   * AND RETURN THE VALID RESPONSE
   */
});

module.exports = {
  getImages,
};
