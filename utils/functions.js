import Axios from "./axios"

export const fetchData = async (route, callback) => {
    try {
        const { data } = await Axios({
            method: "GET",
            url: route,
        })

        console.log(data)
        callback(data)

    } catch (error) {
        console.log(error)
    }

}
export const fetchLeaderboard = async (body, callback) => {
  try {
      const { data } = await Axios({
          method: "POST",
          url: "leaderboard",
          data: body
      })
      callback(data)

  } catch (error) {
      console.log(error)
  }

}

export const castVote = async (data, callback) => {
    try {
        const { data: res } = await Axios({
            method: "POST",
            url: "/vote",
            data,
        })

        callback(res)

    } catch (error) {
        console.log(error)
    }

}

