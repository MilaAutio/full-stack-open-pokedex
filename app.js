const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5005

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
