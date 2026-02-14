import {defineMigration, at, setIfMissing, set} from 'sanity/migrate'

export default defineMigration({
  title: 'Activate all blog posts',
  documentTypes: ['blog'],

  migrate: {
    document(doc, context) {
      // Set isActive to true for all blog posts
      return [
        at('isActive', setIfMissing(true)),
        at('isActive', set(true)),
      ]
    },
  },
})
