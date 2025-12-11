import { query } from '../utils/db.js';

export default defineEventHandler(async (event) => {
  try {
    // 查询 posts 表
    const posts = await query('SELECT * FROM posts ORDER BY post_id DESC');

    // 格式化 post_date 为 "YYYY-MM-DD"
    const formattedPosts = posts.map(post => ({
      ...post,
      post_date: new Date(post.post_date).toISOString().slice(0, 10)
    }));

    return { code: 0, data: formattedPosts };
  } catch (err) {
    console.error(err);
    return { code: 1, message: '获取数据失败' };
  }
});
