import { useState } from "react";
import "../../styles/formhandling.css"

const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    const handleReset = (e) => {
        e.preventDefault()
        setFormData({
            email: '',
            message: '',
        })
    }

    return (
        <div className="simple-form-container">
            <h2>Contact Form</h2>

            {isSubmitted ? (
                <div className="success-message">
                    <h3>Message Sent!</h3>
                    <p>We'll reply to {formData.email} soon.</p>
                    <button onClick={handleReset}>Send Another Message</button>
                </div>
            ) : (

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="button-group">
                        <button type="submit">Send Message</button>
                        <button type="button" onClick={handleReset}>Clear Form</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Form