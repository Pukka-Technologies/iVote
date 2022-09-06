import Axios from "./axios"

export const fetchData = async (route, callback) => {
    try {
        const { data } = await Axios({
            method: "GET",
            url: route,
        })

        callback(data)

    } catch (error) {
        console.log(error)
    }

}