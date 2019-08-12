const express = require('express')
const bodyParser = require('body-parser')
const employeesRouter = require('./routes/employees')

const app = express()
const port = process.env.PORT || 4001;

app.use(employeesRouter);
app.use(bodyParser.json())

// app.get("/", (req, res) => {
//   res.send('Welcome to our API');
// });



app.listen(port, () => {
  console.log(`Hackathon listening on port ${port}`)
})