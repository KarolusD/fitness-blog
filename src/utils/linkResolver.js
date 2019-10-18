module.exports.linkResolver = doc => {
  if (doc.type === 'blog-post') {
    return '/blog/' + doc.uid
  }

  return `/`
}
