const client = require('contentful').createClient({
  space: 'ioabzosdnj0g',
  accessToken: 'djygdbFf-gbzwmeoPgXvNJHD5X_ATuVV3I8Gpzoo7tA',
});
const getProjects = () => client.getEntries().then((response) => response.items);

const getSingleProject = (slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'project',
    })
    .then((response) => response.items);

export { getProjects, getSingleProject };
