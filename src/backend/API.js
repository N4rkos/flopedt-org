import Axios from "axios"

const API_URL = "https://api.flopedt.org"
const AUTHORS_URL = "http://thomasgouveia.fr/xflop/AUTHORS.txt"

/**
 * Interface entre le front et l'api strapi
 */
class API {

    /**
     * Récupère une image dans l'API
     * @param {string} path 
     *      chemin de la ressource (/uploads/:res)
     */
    static getAsset(path) {
        return `${API_URL}${path}`
    }

    /**
     * Récupère tous les utilisateurs de flop!EDT
     */
    static async getClients() {
        const response = await Axios.get(`${API_URL}/clients`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les utilisateurs. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère les images de mises en avant de flop!EDT
     */
    static async getSlides() {
        const response = await Axios.get(`${API_URL}/slideshows`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les aperçus. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère n témoignages depuis l'API
     * @param {number} n 
     *      nombre de témoignages à récupérer, par défaut 3
     */
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

    /**
     * Retourne les questions mises en avant, afin de les affichées sur la page d'accueil.
     */
    static async getShowcaseQuestions() {
        const response = await Axios.get(`${API_URL}/questions?showcase=true`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les questions. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère toutes les questions
     */
    static async getQuestions() {
        const response = await Axios.get(`${API_URL}/questions`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les questions. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère tous les types de questions
     */
    static async getQuestionsTypes() {
        const response = await Axios.get(`${API_URL}/question-types`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les types de questions. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère les contributeurs du projet
     */
    static async getContributors() {
        const response = await Axios.get(`${AUTHORS_URL}`)
        if (response.status === 200) console.log(response)
        console.error('[ERREUR] : Impossible de récupérer les questions. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère les articles du blog
     */
    static async getNews() {
        const response = await Axios.get(`${API_URL}/articles?published=true&_sort=updated_at:DESC`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les tutoriels. Code HTTP : ' + response.status)
        return []
    }

    /**
     * Récupère un article du blog en fonction de son id
     * @param {number} id 
     */
    static async getNewsById(id) {
        const response = await Axios.get(`${API_URL}/articles/${id}`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer l\'article ' + id + ' Code HTTP : ' + response.status)
        return {}
    }

    /**
     * Récupère les mentions légales
     */
    static async getLegals() {
        const response = await Axios.get(`${API_URL}/mentions-legales`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer les mentions légales. Code HTTP : ' + response.status)
        return {}
    }

    /**
     * Ajoute un utilisateur dans la newsletter
     * @param {string} email 
     */
    static async addToNewsletter(email) {
        try {
            const response = await Axios.post(`${API_URL}/newsletters`, { email: email })
            return response.statusText
        } catch (e) {
            console.error('[ERREUR] : Impossible d\'ajouter le mail dans la newsletter. Erreur : ' + e)
            return 'ERROR'
        }
    }

    /**
     * Récupère la politique de confidentialité
     */
    static async getPrivacy() {
        const response = await Axios.get(`${API_URL}/politique-de-confidentialite`)
        if (response.status === 200) return response.data
        console.error('[ERREUR] : Impossible de récupérer la politique de confidentialite. Code HTTP : ' + response.status)
        return {}
    }
}

export default API