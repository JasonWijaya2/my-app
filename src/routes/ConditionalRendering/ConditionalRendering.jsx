import { useState } from "react";

function SimpleConditionalRendering() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="container mt-4" style={{ maxWidth: '500px' }}>
            {/* Toggle Content Section */}
            <div className="mb-4">
                <h2>Toggle Content</h2>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="btn btn-primary"
                >
                    {isVisible ? 'Hide Content' : 'Show Content'}
                </button>

                {isVisible && (
                    <p className="alert alert-info mt-3">
                        This content can be shown or hidden!
                    </p>
                )}
            </div>

            {/* Login Status Section */}
            <div className="mb-4">
                <h2>Login Status</h2>
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-primary'}`}
                >
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>

                {isLoggedIn ? (
                    <div className="alert alert-success mt-3">
                        <p>Welcome back! You're Logged In!!!</p>
                        <button className="btn btn-success">
                            Go To Dashboard
                        </button>
                    </div>
                ) : (
                    <div className="alert alert-warning mt-3">
                        <p>Please Log in to access your account</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SimpleConditionalRendering;