const express = require('express')
const port = process.env.PORT || 4001;
const app = express()
const employees = reqire('./routes/employees')

// app.get("/", (req, res) => {
  // res.send('Welcome to our API');
// });

app.use(employees);


app.listen(port, () => {
  console.log(`Hackathon listening on port ${port}`)
})