const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const jsonfile = require('jsonfile')


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

//handles a post request from client
//Tip : You can test this by editting the call to request in form.jsx
app.post('/update', checkJwt, function(req, res){
  update(req.body);
  res.send("OK");
})

//Expect data to be formatted like testData
//handle cases of with missing or empty fields
async function update(data) {
  if(!data
      || !data.hasOwnProperty("meetingroom") || !data.hasOwnProperty("meetingday") || !data.hasOwnProperty("meetingtime")
      || !data.hasOwnProperty("about")) {
    throw new Error("Missing a required property.");
  }

  const file = './src/content.json'
   
  jsonfile.writeFileSync(file, data, function (err) {
    if (err) console.error(err)
  })
   
}

app.listen(process.env.PORT || 3000);
