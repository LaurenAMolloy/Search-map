import express from "express";
import cors from "cors";
import axios from "axios";

//Port for server
const PORT = 8080;
//Initialise express
const app = express();

//Enable cors
app.use(cors());

//HTTP Request
app.get("/", (req, res) => {
    const options = {
        method: "GET",
        url: "https://nominatim.openstreetmap.org/search",
        params : {
            q:req.query.q,
            format:"json",
            addressdetails: 1,
            limit: 5,
        }
    }

    axios
    .request(options)
    .then((response) => {
    res.json(response.data);
    })
    .catch((error) => {
        res.json(error)
    });
});

//Listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on  ${PORT}`)
})
