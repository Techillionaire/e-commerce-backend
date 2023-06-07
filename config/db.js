const { default: mongoose } = require("mongoose")


const dbConnection = () => {
    try {
      const connection =  mongoose.connect(`mongodb://localhost:27017/e-commerce`, { useNewUrlParser: true })
        console.log(`DB connected successfully`)
    } catch(err){
        console.log(`DB Error`)
    }
}

module.exports = dbConnection