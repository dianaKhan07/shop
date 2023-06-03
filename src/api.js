import { BASE_URL, API} from "./const";
const URL = "http://pythonuserdjango.pythonanywhere.com/api/v1/auth/register/";

export const FetchRegistration = (data) => {
    fetch(BASE_URL+API.register, {
        method : "POST",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(data=> console.log(data))
}

export const FetchAuth = async (data) => {
    try {
      const request = await fetch(BASE_URL+API.auth, {
            method : "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const FetchUser = async (data) => {
    try {
      const request = await fetch(BASE_URL+API.user, {
            method : "GET",
            headers: {
                "Content-type": 'application/json',
                "Authorization" : `Bearer ${data}`
            },

        })
        const response = await request.json()
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}