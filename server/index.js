const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const conn = require('./config/connect')

const app = express()

//=======Middleware======//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

//=======Config========//
dotenv.config({ path: './config/config.env' })
conn()

//=======Routes========//
const user = require('./src/routes/user')
app.use('/api/user', user)

app.use('/', (req, res) => {
    res.status(200).send('Hi, This is still working')
})


//=======........========//
const port = process.env.PORT || 5000

app.listen(port, console.log(`Server started on port ${port}`))