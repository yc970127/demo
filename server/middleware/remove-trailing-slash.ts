import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  const url = event.node.req.url
  if (url && url.length > 1 && url.endsWith('/')) {
    // 去掉尾部斜杠
    const newUrl = url.slice(0, -1)
    return sendRedirect(event, newUrl, 301) // 永久重定向
  }
})
