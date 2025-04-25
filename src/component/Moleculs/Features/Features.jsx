import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();

    return (
        <section style={{ padding: "2rem", backgroundColor: "#ffffff", textAlign: "center" }}>
            <h3>Features</h3>
            <p>Explore the features of this application:</p>
            <div style={{ marginTop: "1rem" }}>
                <button
                    onClick={() => navigate("/thinking")}
                    style={{
                        padding: "0.5rem 1rem",
                        margin: "0.5rem",
                        backgroundColor: "#0d6efd",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Go to Thinking
                </button>
                <button
                    onClick={() => navigate("/counter")}
                    style={{
                        padding: "0.5rem 1rem",
                        margin: "0.5rem",
                        backgroundColor: "#0d6efd",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Go to Counter
                </button>
                <button
                    onClick={() => navigate("/countdown")}
                    style={{
                        padding: "0.5rem 1rem",
                        margin: "0.5rem",
                        backgroundColor: "#198754",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Go to Countdown
                </button>
                <button
                    onClick={() => navigate("/form")}
                    style={{
                        padding: "0.5rem 1rem",
                        margin: "0.5rem",
                        backgroundColor: "#198754",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Go to Form
                </button>
                <button
                    onClick={() => navigate("/context")}
                    style={{
                        padding: "0.5rem 1rem",
                        margin: "0.5rem",
                        backgroundColor: "#198754",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Go to Context
                </button>
            </div>
        </section>
    );
};

export default Features;