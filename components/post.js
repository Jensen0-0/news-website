import styles from '../styles/Post.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Post = ({ post }) => {
    let customClasses = ""
    if (post.frontmatter.height === 2) {
        customClasses += `${styles.tall} `
    }
    if (post.frontmatter.width === 2) {
        customClasses += `${styles.wide} `
    }
    return (
        <Link href={`/nieuws/${post.slug}`}>
            <div className={`w-full h-full bg-neutral-200 relative dark:bg-neutral-800 ${styles.thumbnail}  ${customClasses}`}>

                <Image alt='Cover Image' layout='fill' className={` absolute object-cover w-full h-full ${styles.darkened}`} src={post.frontmatter.cover_image}></Image>
                <div className='text-white w-full right-1/2 translate-x-1/2 absolute text-center md:text-xl  select-none  '>{post.frontmatter.title}
                    <p className=' pl-2 pr-2 italic text-center text-base  text-zinc-300 opacity-70 select-none  '>{post.frontmatter.excerpt}</p>
                </div>
                <div className={`w-full flex justify-center absolute right-1/2 translate-x-1/2 bottom-0 flex-wrap ${styles.extraInfo}`} >
                    <button className={` hover:bg-blue-900  w-36 text-center p-1 pl-3 pr-3 bg-blue-700 rounded-xl  ${styles.btnTransition}`}>
                        Lees meer
                    </button>
                    <div className='text-center w-full text-zinc-200 opacity-50 text-sm  bottom-0 p-1  select-none'>{post.frontmatter.date}</div>
                </div>

            </div>
        </Link>

    )
}

export default Post;