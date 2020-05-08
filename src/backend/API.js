import Axios from "axios"

const API_URL = "http://flopedt.org:1337"

/**
 * Interface entre le front et l'api strapi
 */
class API {

    static getAsset(path) {
        return `${API_URL}${path}`
    }

    //EXEMPLE DE FONCTION
    // static async getTechnologies() {
    //     const response = await Axios.get(`${API_URL}/technologies`)
    //     if (response.status === 200) {
    //         return response.data
    //     }
    //     return []
    // }

    static async getClients(){
        const response = await Axios.get(`${API_URL}/clients`)
        if(response.status === 200){
            return response.data
        }
        return []
    }
}

export default API