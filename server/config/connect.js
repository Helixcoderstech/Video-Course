const { connect } = require('mongoose')

const connection = async () => {
    try {
        const uri = process.env.MONGO_URI

        const client =  await connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${client.connection.host}`);
        return { client }
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connection