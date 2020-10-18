const client = require('contentful').createClient({
    space: 'ioabzosdnj0g',
    accessToken: 'djygdbFf-gbzwmeoPgXvNJHD5X_ATuVV3I8Gpzoo7tA'
  })

const getProjects = () => client.getEntries().then(response => { console.log(response.items)})

const getSingleProject = name =>
    client
        .getEntries({
          'fields.name': name,
          content_type: 'project'
        })
        .then(response => response.items)

export {getProjects, getSingleProject}