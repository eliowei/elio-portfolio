const CONTACT_LASTMOD = '2026-07-31'

export default defineSitemapEventHandler(async (event) => {
  const projects = await queryCollection(event, 'projects').all()
  const latest = projects.map(p => p.updatedAt).filter(Boolean).sort().at(-1)

  return [
    {
      loc: '/',
      lastmod: latest
    },
    {
      loc: '/contact',
      lastmod: CONTACT_LASTMOD
    },
    ...projects.map(project => ({
      loc: project.path,
      lastmod: project.updatedAt,
    }))
  ]
})