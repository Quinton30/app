const express = require('express')
const cors = require('cors')
const studentRoutes = require('./src/movie/routes')
const app = express()
const port = 3000

// Enable CORS for all origins
app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/api/v1/movies', studentRoutes)

app.listen(port, () => console.log(`App listening on port ${port}`))
