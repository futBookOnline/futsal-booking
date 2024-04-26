import useRelatedApi from "../../../helpers/apiHelper";

const getFutsal = async () => {
    const apiCall = await useRelatedApi("futsals", "GET", null)
    const data = await apiCall
    return data
}

const registerUser = async (payload) => {
    const result = await useRelatedApi("users", "POST", payload)
}

export default getFutsal