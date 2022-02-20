const { parse } = require('rss-to-json');
const slugify = require('@sindresorhus/slugify');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const rss = await parse('https://medium.com/feed/@gatsby-design');

  rss.items.forEach((item) => {
    createNode({
      ...item,
      id: createNodeId(`medium-${item.title}`),
      slug: slugify(item.title),
      parent: null,
      children: [],
      internal: {
        type: 'mediumPost',
        mediaType: 'text/html',
        contentDigest: createContentDigest(item)
      }
    });
  });
};
