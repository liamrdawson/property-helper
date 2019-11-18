import express from 'express';

const app = express();

app.listen(5678, () =>
  console.log(`example app running on port http://localhost:5678`)
);
