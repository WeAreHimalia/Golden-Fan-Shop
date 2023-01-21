const axios = require('axios');


var ProductOverview_API_URL = 'http://localhost:3030';

exports.deleteCart = (req,res) => {

  const options = {
    method: 'DELETE',
    url: `${ProductOverview_API_URL}/cart`,
    headers: {Authorization: process.env.AUTH_SECRET}
  };

  axios(options)
  .then(results => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch(err => {
    console.log('Server error Delete cart:', err);
    res.status(500).send(err);
  })
}

