import React from 'react';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here
        console.log('Form submitted');
        // Example: Send form data to a server, or handle locally
    };

    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='fullName' placeholder='Full Name' required />
                <br />
                <input type='email' name='email' placeholder='Type Your E-Mail' required />
                <br />
                <textarea name='message' placeholder='Write Here......'></textarea>
                <br />
                <input type='submit' value='Send' />
            </form>
        </div>
    );
}

export default Contact;
