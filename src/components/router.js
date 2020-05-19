/**
 * Fichier contenant les routes du site.
 */
export const Routes = {
    home: '/',
    contributors: '/contributeurs',
    notFound: '*',
    legals: '/mentions-legales',
    privacy: '/confidentialite',
    documentation: '/documentation',
    donate: '/soutenir-le-projet',
    blog: {
        index: '/blog',
        show: '/blog/:id/:slug',
        faq: {
            index: '/blog/foire-aux-questions'
        }
    },
}