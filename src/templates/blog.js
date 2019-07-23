import React from 'react';
import Hero from '../components/Hero';
import BlogPostLayout from '../layouts/BlogPost/blogPostLayout';
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
        // <Layout>
        //     {/* <Head title={props.data.contentfulBlogPost.title} />
        //     <h1>{props.data.contentfulBlogPost.title}</h1>
        //     <p>{props.data.contentfulBlogPost.publishedDate}</p>
        //     {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)} */}
            
            
        // </Layout>
        <BlogPostLayout>
            <Hero
                title={props.data.contentfulBlogPost.title}
                date={props.data.contentfulBlogPost.publishedDate}
            />
            {/* {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)} */}
        </BlogPostLayout>
    )
}

export default Blog