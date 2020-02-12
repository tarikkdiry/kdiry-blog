import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Hero from '../components/Hero/hero';
import BlogPostLayout from '../layouts/BlogPost/blogPostLayout';
import blogContentStyle from '../layouts/BlogPost/blogPostLayout.module.scss';
import '../styles/global.scss';

// FOR MARKDOWN
// export const query = graphql`
//     query (
//         $slug: String!
//     ) {
//         markdownRemark (
//             fields: {
//                 slug:{
//                 eq: $slug
//                 }
//             }
//         ) {
//             frontmatter {
//                 title   
//                 date
//             }
//             html
//         }
//     }
// `

//Target blog post by slug
export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
            forward
        }
    }
`

const Blog = (props) => {
    const options = {
        // For image rendering
        // renderNode: {
        //     "embedded-asset-block": (node) => {
        //         const alt = node.data.target.fields.title['en-US']
        //         const url = node.data.target.fields.file['en-US'].url
        //         return <img alt={alt} src={url}/>
        //     }
        // }
    }    

    // const blogHero = () => {
    //     return (
    //         <Hero
    //             title={props.data.contentfulBlogPost.title}
    //             date={props.data.contentfulBlogPost.publishedDate}
    //         />
    //     )
    // }

    // const blogContent = () => {
    //     return (
    //         documentToReactComponents(props.data.contentfulBlogPost.body.json, options)
    //     )
    // }
    
    return (
        // GO BACK AND REMOVE STYLE COUPLING 
        <BlogPostLayout>
            <div>
                <Hero
                    title={props.data.contentfulBlogPost.title}
                    date={props.data.contentfulBlogPost.publishedDate}
                />
                <div className={blogContentStyle.content}>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                </div>
            </div>
        </BlogPostLayout>
    )
}

export default Blog