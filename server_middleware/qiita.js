const axios = require('axios');
const client = axios.create({
  baseURL: 'https://qiita.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.QIITA_KEY}`,
  },
  responseType: 'json'
})

module.exports = async (req, res, next) => {
  const contents = await client.get('/api/v2/items', { params: { query: 'user:yamachita0109', per_page: 100 } })
  const fmt = contents.data
    .sort((a, b) => b.likes_count - a.likes_count )
    .map((r) => {
      return {
        id: r.id,
        title: r.title,
        tags: r.tags,
        created_at: r.created_at,
        url: r.url,
        likes_count: r.likes_count,
      }
    })
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(fmt))
}
