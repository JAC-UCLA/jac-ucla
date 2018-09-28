const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const writeJson = require('write-json-file');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://jacatucla.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://jacatucla.auth0.com/api/v2/',
  issuer: `https://jacatucla.auth0.com/`,
  algorithms: ['RS256']
});

app.use(express.static(path.join(__dirname, 'build')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/ping', function (req, res, next) {
 return res.send('pong');
});

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//test update function using dummy data
let testData = {
  "meetingroom" : "fek",
  "meetingday" : "alsofek",
  "meetingtime" : "please don't push this to production",
  "about" : ["weebs", "jk i just appreaciate %d% %t% %r% japan", "line", "ye idek", "alsdkjf"]
}

//handles a post request from client
//Tip : You can test this by editting the call to request in form.jsx
app.post('/update', checkJwt, function(req, res){
  console.log("req", req.body);
  // // TODO : call the update function here (using testData)
  // update( req.data );
  // // TODO : send a response with appropriate error or success messages.
})

//Expect data to be formatted like testData
//handle cases of with missing or empty fields
function update( data ) {
//TODO : create update function that writes to content.json using data
//Tip : use write-json-file (or your library of choice)
  // console.log(data);
}

app.listen(process.env.PORT || 3000);