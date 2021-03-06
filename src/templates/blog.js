import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Hero from '../components/Hero/hero';
// import BlogPostLayout from '../layouts/BlogPost/blogPostLayout';
import blogContentStyle from '../layouts/BlogPost/blogPostLayout.module.scss';
// import Layout from '../layouts/layout';
import BlogPostLayout from '../layouts/BlogPost/blogPostLayout';
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
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }    
    
    return (
        // GO BACK AND REMOVE STYLE COUPLING 
        <BlogPostLayout>
            <div className={blogContentStyle.container}>
                <div className={blogContentStyle.hero}>
                    <Hero
                        title={props.data.contentfulBlogPost.title}
                        date={props.data.contentfulBlogPost.publishedDate}
                        forward={props.data.contentfulBlogPost.forward}
                    />
                </div>
                <div className={blogContentStyle.content}>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                </div>
                <br></br>
            </div>
        </BlogPostLayout>
    )
}

export default Blog