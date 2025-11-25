import axios from "axios";
import type { Place } from './Place'


interface SearchResponse {
        data: {
            place_id: number,
            display_name: string,
            lat: string,
            lon: string,
        }[]
    };


export const search = async ( term: string ) => {
    try {
        const response: SearchResponse = await axios.get("http://localhost:8080", {
            params: {q: term }
        });

        //How do we get rid of type any?
        //By using an interface to tell typescript what to expect
        const data: SearchResponse = response;
        console.log(data);

        //We are trying to turn data objects into place objects
        const places: Place[] = data.data.map((place) => {
            return {
                id: place.place_id,
                name: place.display_name,
                longitude: Number(place.lon),
                latitude: Number(place.lat),
            };
        });

        return places;

    } catch(err) {
        console.log(err)
        throw err
    }
}
      