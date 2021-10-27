const catchAsync = require("../utils/catchAsync");
const getData = require("../utils/newApi");

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
    data: data,
  };
}

const getImages = catchAsync(async (req, res) => {
  getData(imagesUrl).then((resImg) => {
    getData(photosUrl).then((resPhoto) => {
      if (resImg.status == 1 && resPhoto.status == 1) {
        let finalRes = format(resImg, resPhoto);
        res.send(finalRes);
      } else {
        let finalRes = {
          status: 0,
          data: [],
        };
        res.send(finalRes);
      }
    });
  });
});

console.log(format)

module.exports = {
  getImages,
};

//! new formated data that I get from newAPI (checked with postman)
// {
//     "status": 1,
//     "data": [
//         {
//             "albumId": 2,
//             "id": 0,
//             "title": "reprehenderit est deserunt velit ipsam",
//             "path": "https://via.placeholder.com/771796"
//         },
//         {
//             "albumId": 2,
//             "id": 1,
//             "title": "accusamus ea aliquid et amet sequi nemo",
//             "path": "https://via.placeholder.com/600/56a8c2"
//         },
//         {
//             "albumId": 2,
//             "id": 2,
//             "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//             "path": "https://via.placeholder.com/600/b0f7cc"
//         },
//         {
//             "albumId": 2,
//             "id": 3,
//             "title": "aut porro officiis laborum odit ea laudantium corporis",
//             "path": "https://via.placeholder.com/600/54176f"
//         },
//         {
//             "albumId": 2,
//             "id": 4,
//             "title": "qui eius qui autem sed",
//             "path": "https://via.placeholder.com/600/51aa97"
//         },
//         {
//             "albumId": 2,
//             "id": 5,
//             "title": "beatae et provident et ut vel",
//             "path": "https://via.placeholder.com/600/ff7890"
//         },
//         {
//             "albumId": 0,
//             "id": 0,
//             "title": "reprehenderit est deserunt velit ipsam",
//             "path": "https://via.placeholder.com/600/771796"
//         },
//         {
//             "albumId": 1,
//             "id": 1,
//             "title": "officia porro iure quia iusto qui ipsa ut modi",
//             "path": "https://via.placeholder.com/600/24f355"
//         },
//         {
//             "albumId": 2,
//             "id": 2,
//             "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//             "path": "https://via.placeholder.com/600/d32776"
//         },
//         {
//             "albumId": 3,
//             "id": 3,
//             "title": "natus nisi omnis corporis facere molestiae rerum in",
//             "path": "https://via.placeholder.com/f66b97"
//         },
//         {
//             "albumId": 4,
//             "id": 4,
//             "title": "qui eius qui autem sed",
//             "path": "https://via.placeholder.com/600/51aa97"
//         }
//     ]
// }
