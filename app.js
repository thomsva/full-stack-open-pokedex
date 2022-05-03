const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line no-console
  console.log('started in test mode')
}

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
