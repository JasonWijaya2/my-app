import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.message.length < 5) {
            alert("Message kurang dari 5");
        } else {
            setIsSubmitted(true);
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            username: '',
            email: '',
            message: '',
        });
        setIsSubmitted(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Form</h2>

            {isSubmitted ? (
                <div className="alert alert-success text-center">
                    <h3>Message Sent!</h3>
                    <p>We'll reply to {formData.email} soon.</p>
                    <button className="btn btn-success mt-3" onClick={handleReset}>
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="form-control"
                            required
                        ></textarea>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                        <button type="button" className="btn btn-secondary" onClick={handleReset}>
                            Clear Form
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Form;