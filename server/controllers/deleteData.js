const axios = require('axios');

var newURL = 'http://localhost:3030';
var baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

exports.deleteCart = (req,res) => {

  const options = {
    method: 'DELETE',
    url: `${newURL}/cart`,
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

