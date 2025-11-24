import axios from 'axios'
export const search = async(term: string) => {

    try {
        const response = await axios.get("http://localhost:8080/", {
           params: {q: term}, 
        })
        console.log(response);
    } catch (error) {
        console.log(error);
        throw error;
    }

};
      