/**
 * Fichier contenant les routes du site.
 */
export const Routes = {
    home: '/',
    contributors: '/contributeurs',
    notFound: '*',
    legals: '/mentions-legales',
    blog: {
        index: '/blog',
        tutorials: {
            index: '/blog/tutoriels',
            view: '/blog/tutoriels/:slug'
        },
        faq: {
            index: '/blog/foire-aux-questions'
        }
    },
}