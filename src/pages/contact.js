import React from "react";
import ContactForm from "../components/ContactForm/index.js";
import Head from '../components/head';
// import { Link } from "gatsby"
import Layout from "../layouts/layout";
import '../styles/contact.scss';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact.</h1>
            {/* <p><a href="https://google.com">Twitter</a></p> */}
            <div className="container">
                <h3>Drop me a note!</h3>
                <ContactForm></ContactForm>
            </div>
            
        </Layout>
    )
}

export default ContactPage 

