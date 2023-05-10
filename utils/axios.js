import axios from "axios"

export default axios.create({
    baseURL: "https://ivote-api.onrender.com/",
    withCredentials: true
})
