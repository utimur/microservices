const express = require('express');
const authRouter = require('./authRoutes')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use('/api', authRouter)


app.listen(PORT, () => console.log('server started on port', PORT))
