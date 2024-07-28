import useRelatedApi from "../../../helpers/apiHelper";

const getCurrentFutsal = async (id) => {
  
    // console.log("the id ", id)

    const method = "get";
    const url = `venues/${id}`;
    const response = await useRelatedApi(url, method);
   
    // console.log("The response is,", response)

    return response
}

export default getCurrentFutsal;