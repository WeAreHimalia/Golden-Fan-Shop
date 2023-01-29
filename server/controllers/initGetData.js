const axios = require('axios')


exports.redirectFromHome = (req, res) => {
  res.redirect('/ip/71704')
}

const originalURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const ProductOverview_API_URL = 'http://localhost:3030';
const QandA_API_URL = 'http://localhost:3030';

exports.getCurrentProductCardControl = (req, res) => {
  var incomingParamProductId = req.query.id;
  // var incomingParamProductId = req.params.id;
  // console.log("🚀 ~ file: initGetData.js:7 ~ incomingParamProductId", incomingParamProductId)

  const options = {
    method: 'GET',
    url: `${originalURL}/products/${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };

  axios(options)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
}

exports.getRelatedProductCardControl = (req, res) => {
  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `${originalURL}/products/${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };

  axios(options)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
}

exports.getProductStylesControl = (req, res) => {
  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `${originalURL}/products/${incomingParamProductId}/styles`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
}

exports.getProductRelatedControl = (req, res) => {
  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `${originalURL}/products/${incomingParamProductId}/related`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
    .then((result) => {
      // Logic code controller need to import function
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
};

exports.getProductReviewsControl = (req, res) => {
  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `${originalURL}/reviews?product_id=${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
};

exports.getProductReviewMeta = (req, res) => {
  var incomingParamProductId = req.query.id;
  const options = {
    method: 'GET',
    url: `${originalURL}/reviews/meta?product_id=${incomingParamProductId}`,
    // params: { product_id: incomingParamProductId },
    headers: { Authorization: process.env.AUTH_SECRET }
  };
  axios(options)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};


exports.getProductQnAControl = (req, res) => {
  var incomingParamProductId = req.query.id;

  const options = {
    method: 'GET',
    url: `${QandA_API_URL}/qa/questions?product_id=${incomingParamProductId}`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
}

exports.getCart = (req, res) => {
  const options = {
    method: 'GET',
    url: `${originalURL}/cart`,
    headers: { Authorization: process.env.AUTH_SECRET },
  };
  axios(options)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
}