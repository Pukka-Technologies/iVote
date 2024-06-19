import axios from "axios"

export default axios.create({
    baseURL: "https://ivote-backend-0bxf.onrender.com/",
    withCredentials: true
})
