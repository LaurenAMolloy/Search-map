import express from "express";
import cors from "cors";
import axios from "axios";

const PORT = 8080;
const app = express();

app.use(cors());

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

app.listen(PORT, () => {
    console.log(`Server is running on  ${PORT}`)
})
