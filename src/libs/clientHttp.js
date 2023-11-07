import axios from "axios";


export const clientHttp = axios.create(
    {
        baseURL: "http://localhost:3001/",
        

    }
)
