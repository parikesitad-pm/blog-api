const express = require('express')

const app = express()

app.use(() => {
  console.log('Hollow World!')
  console.log('Hollow Server!')
  console.log('Server stato!')

})

app.listen(4000)