import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import navStyle from '../styles/Navbar.module.css'
import styles from '../styles/Home.module.css'
import Post from '../components/old-post'



export default function Home({ posts }) {

  return (
    <div>

      <div className={styles.articleGrid}>
        {posts.map((post, index) => (
          <Post post={post} key={index} />

        ))}
      </div>

    </div >
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('old-posts'));

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort((a, b,) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      })
    }
  }
}
