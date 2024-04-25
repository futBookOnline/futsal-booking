import hitApi from "../../../helpers/apiHelper";

const getFutsal = async () => {
    const apiCall = await hitApi("futsals", "GET", null)
    const data = await apiCall
    return data
}

const registerUser = async (payload) => {
    const result = await hitApi("users", "POST", payload)
}

export default getFutsal