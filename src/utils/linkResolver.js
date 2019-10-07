exports.linkResolver = function linkResolver(doc) {
  if (doc.type === 'blog-post') {
    return '/blog/' + doc.uid
  }

  return '/'
}
