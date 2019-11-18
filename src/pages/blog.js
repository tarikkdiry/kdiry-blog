import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Card from '../components/Card';
import Head from '../components/head';
import Header from '../components/Header';
import Layout from '../layouts/layout';
import blogInfoStyles from './blog.module.scss';


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
                    publishedDate(formatString: "MMMM D, YYYY")
                    body {
                        json
                    }
                    forward
                }
            }
            }
        }
    `)
 
    return (
        <Layout>
            <Head title="Blog"/>
            <Header></Header>
            <div className={blogInfoStyles.heading}>
                <h1>Blog.</h1>
            </div>
            <div className={blogInfoStyles.cards}>
                { data.allContentfulBlogPost.edges.map((edge) => { //iterate over all posts/each edge
                    return (
                        <Link to={`/blog/${edge.node.slug}`}>
                            <Card
                                title={edge.node.title}
                                date={edge.node.publishedDate}
                                url={`/blog/${edge.node.slug}`}
                                forward={edge.node.forward}
                                img="https://imgur.com/gallery/Xxpto29"
                            />
                            <br></br>
                        </Link>
                    )
                })}
            </div>
        </Layout>
    )
}

export default BlogPage 

