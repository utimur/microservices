const express = require('express');
const authRouter = require('./authRoutes')
const cors = require('cors')
const morgan = require('morgan')
const sequalize = require('./db')
const requestIp = require('request-ip');
const authService = require('./authService')
const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(requestIp.mw())
app.use(express.json())
app.use('/api', authRouter)

const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync({force:true});
        await authService.createAdmin("admin", "admin")
        app.listen(PORT, () => console.log('server started on port', PORT))
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start()
