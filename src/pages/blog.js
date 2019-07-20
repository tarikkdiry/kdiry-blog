import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Card from '../components/Card';
import Head from '../components/head';
import Layout from "../components/layout";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
                ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
            }
        }
    `)
        
    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog.</h1>
                { data.allContentfulBlogPost.edges.map((edge) => { //iterate over all posts (edges)
                    return (
                        <Link to={`/blog/${edge.node.slug}`}>
                            <Card
                                title={edge.node.title}
                                date={edge.node.publishedDate}
                                url={`/blog/${edge.node.slug}`}
                                img="https://imgur.com/gallery/Xxpto29"
                            />
                            <br></br>
                        </Link>
                    )
                })}
        </Layout>
    )
}

export default BlogPage 

