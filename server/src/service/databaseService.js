import mongoose from 'mongoose';
import config from '../config/dataBase.js'

class DataBaseService {
    #connected=false

    async connect (){
        if(this.#connected) return
        try{
            await mongoose.connect(config.mongoURL,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            this.#connected= true
            consol.log("mongoDB conected")
        }catch(error){
            console.log("Found error while connecting to data base: " + error)
            throw error
        }
    }
    getConnection(){
        return mongoose.connection
    }

    async closeConnection () {
        try {
          await mongoose.connection.close()
          this.#connected = false
          console.log('MongoDB connection closed')
        } catch (error) {
          console.error('Error closing MongoDB connection:', error.message)
          throw error
        }
    }
}

export default new DataBaseService()