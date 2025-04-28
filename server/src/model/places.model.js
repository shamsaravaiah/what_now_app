import axios from 'axios';
import {config} from 'dotenv'
config()
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
console.log("Google API Key:", GOOGLE_API_KEY);

const model={}

model.getPlaces = async (query, location,radius) => {
    try {
       
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
            params: {
                query: query,
                location: location,
                radius: radius, 
                key: GOOGLE_API_KEY
            }
        });

     
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching places from Google Places API');
    }
};

export default model