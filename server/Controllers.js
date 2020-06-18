const Models = require('./Models.js');

function getPhotos(req, res) {
  const roomId = req.params.roomId;
  Models.getPhotos(roomId, (err, data) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}