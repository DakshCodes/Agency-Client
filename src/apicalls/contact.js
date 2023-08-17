import {axiosInstance} from "./axiosInstance";


// add a new contact

export const AddContact = async(payload) =>{
    try {
        const response = await axiosInstance.post("/api/contact/add-contact" , payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}