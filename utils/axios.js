import axios from "axios"

export default axios.create({
    baseURL: "https://pvotes-backend.herokuapp.com/" || "http://localhost:8800/",
    withCredentials: true
})