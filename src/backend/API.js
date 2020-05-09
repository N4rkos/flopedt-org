import Axios from "axios"

const API_URL = "https://api.flopedt.org"

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

    static async getClients() {
        const response = await Axios.get(`${API_URL}/clients`)
        if (response.status === 200) {
            return response.data
        }
        return []
    }

    static async getSlides() {
        const response = await Axios.get(`${API_URL}/slideshows`)
        if (response.status === 200) return response.data
        return []
    }

    static async getRandomTestimonials(n) {
        const max = n || 3
        const response = await Axios.get(`${API_URL}/testimonials`)
        if (response.status === 200) {
            let testimonials = response.data
            let randoms = []
            for(let i = 0; i < testimonials.length; i++) {
                if(randoms.length === max) break
                let random = testimonials[Math.floor(Math.random() * testimonials.length)]
                if(randoms.find(e => e.id === random.id) === undefined) {
                    randoms.push(random)
                }
            }
            return randoms
        }
        console.error('[ERREUR] : Impossible de récupérer les témoignages. Code HTTP : ' + response.status)
        return []
    }
}

export default API