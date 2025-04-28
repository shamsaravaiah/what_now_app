import placesModel from '../model/places.model.js'
const controller ={}

controller.getPlace = async (req,res)=>{
    try{
        let {query, location,radius} = req.body
        if(!query || !location || !radius){
            return res.status(400).json({Error:"Not enough details provided"})
        }
        location = location.split(',')
        const result  = await placesModel.getPlaces(query, location,radius)
        res.status(200).json({result})
    }catch(err){
        console.log("error: " + err)
        res.status(500).json({Error: "Internal server error"})
    }
}

export default controller