require('dotenv').config();
const express = require('express');
// const routerApi = require('./routes');
const cors = require('cors');
const { errorHandler, boomErrorHandler } = require('./middleware/error.handler');
const dbCon = require('./config/mongo');

// se puede colocar una whitelist para que solo ciertas direcciones puedan acceder a la api
// const whitelist = ['http://example1.com', 'http://example2.com'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// app.use(cors(corsOptions));
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
// const API_VERSION = process.env.API_VERSION;

app.use(express.json());
// routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  // console.log(`http://localhost:${port}/api/${API_VERSION}/`);
});

dbCon();
