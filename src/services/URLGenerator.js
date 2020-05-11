import { Routes } from "../components/router"
import slugify from "slugify"

class URLGenerator {

    /**
     * Génère une URL pour un tutoriel.
     * @param {Object} tutorial 
     */
    static generateTutorialUrl(tutorial) {
        const slug = `${tutorial.id}-${slugify(tutorial.title, { lower: true })}`
        return Routes.blog.tutorials.view.replace(':slug', slug)
    }
}

export default URLGenerator