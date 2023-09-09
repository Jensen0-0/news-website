import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'


export default function PostPage({ frontmatter: { title, date, cover_image, video }, slug, content }) {
    return (<>
        <div className='max-w-6xl pb-5 pl-5 pr-5 w-full relative ml-auto m-auto'>
            <script></script>
            <div className='text-center text-5xl lg:text-7xl p-3  break-words'>{title}</div>
            <div className='text-center text-sm pb-2'>{date}</div>


            {video ? (
                <div className=''>

                    <video controls width="320" height="240" className=' ml-auto m-auto mb-2 mt-2 rounded-md w-full  active:h-full'>
                        <source type="video/webm" src={video}></source>
                    </video>
                </div>
            ) : (<div className=' ml-auto m-auto mb-2 mt-2 rounded-md relative w-full h-screen '> <Image alt='Cover Image' layout='fill' objectFit={'cover'} src={cover_image} /> </div>)

            }



            <div className=' pt-1 w-full  post-content '>
                <div className="w-full   post-element" dangerouslySetInnerHTML={{ __html: marked(content) }}>

                </div>
            </div>
        </div>
    </>


    )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: { slug: filename.replace('.md', '') }
    }));


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}