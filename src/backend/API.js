import Axios from "axios"

const API_URL = "https://api.flopedt.org"
const AUTHORS_URL = "http://thomasgouveia.fr/xflop/AUTHORS.txt"

/**
 * Interface entre le front et l'api strapi
 */
class API {

    static getAsset(path) {
        return `${API_URL}${path}`
    }

    static async getClients() {
        const response = await Axios.get(`${API_URL}/clients`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les utilisateurs. Code HTTP : ' + response.status)
        return []
    }

    static async getSlides() {
        const response = await Axios.get(`${API_URL}/slideshows`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les aperçus. Code HTTP : ' + response.status)
        return []
    }

    static async getRandomTestimonials(n) {
        const max = n || 3
        const response = await Axios.get(`${API_URL}/testimonials`)
        if (response.status === 200) {
            let testimonials = response.data
            let randoms = []
            for (let i = 0; i < testimonials.length; i++) {
                if (randoms.length === max) break
                let random = testimonials[Math.floor(Math.random() * testimonials.length)]
                if (randoms.find(e => e.id === random.id) === undefined) randoms.push(random)
            }
            return randoms
        }
        console.error('[ERREUR] : Impossible de récupérer les témoignages. Code HTTP : ' + response.status)
        return []
    }

    static async getShowcaseQuestions() {
        const response = await Axios.get(`${API_URL}/questions?showcase=true`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les questions. Code HTTP : ' + response.status)
        return []
    }

    static async getQuestions() {
        const response = await Axios.get(`${API_URL}/questions`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les questions. Code HTTP : ' + response.status)
        return []
    }

    static async getQuestionsTypes() {
        const response = await Axios.get(`${API_URL}/question-types`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les types de questions. Code HTTP : ' + response.status)
        return []
    }

    static async getContributors() {
        const response = await Axios.get(`${AUTHORS_URL}`)
        if (response.status === 200) console.log(response)
        console.error('[ERREUR] : Impossible de récupérer les questions. Code HTTP : ' + response.status)
        return []
    }

    static async getTutorials() {
        const response = await Axios.get(`${API_URL}/tutorials?published=true&_sort=updated_at:DESC`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les tutoriels. Code HTTP : ' + response.status)
        return []
    }

    static async getTutorialBySlug(slug) {
        const id = slug.split('-')[0]
        const response = await Axios.get(`${API_URL}/tutorials/${id}`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer le tutoriel ' + slug + ' Code HTTP : ' + response.status)
        return {}
    }

    static async getLegals() {
        const response = await Axios.get(`${API_URL}/mentions-legales`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les mentions légales. Code HTTP : ' + response.status)
        return {}
    }

    static async addToNewsletter(email) {
        try {
            const response = await Axios.post(`${API_URL}/newsletters`, { email: email })
            return response.statusText
        } catch (e) {
            console.error('[ERREUR] : Impossible d\'ajouter le mail dans la newsletter. Erreur : ' + e)
            return 'ERROR'
        }
    }

    static async getPrivacy() {
        const response = await Axios.get(`${API_URL}/politique-de-confidentialite`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer la politique de confidentialite. Code HTTP : ' + response.status)
        return {}
    }
}

export default API