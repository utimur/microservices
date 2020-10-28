const express = require('express');
const authRouter = require('./authRoutes')
const cors = require('cors')
const morgan = require('morgan')
const sequalize = require('./db')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use('/api', authRouter)

const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync({ alter: true });
        app.listen(PORT, () => console.log('server started on port', PORT))
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start()
