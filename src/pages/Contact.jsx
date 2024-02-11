import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
    return (
        <div className="container">
            <form action="/submit_contact_form" method="post">
                <label For="fname"></label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required />
                <label For="lname"></label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />
                <label For="subject"></label>
                <textarea id="subject" name="subject" placeholder="Message" style={{ height: '200px' }} required></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Contact;