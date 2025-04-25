import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();

    return (
        <section className="text-center py-5">
            <h3>Features</h3>
            <p>Explore the features of this application:</p>
            <div className="mt-3">
                <button
                    onClick={() => navigate("/thinking")}
                    className="btn btn-primary m-2"
                >
                    Go to Thinking
                </button>
                <button
                    onClick={() => navigate("/counter")}
                    className="btn btn-secondary m-2"
                >
                    Go to Counter
                </button>
                <button
                    onClick={() => navigate("/countdown")}
                    className="btn btn-success m-2"
                >
                    Go to Countdown
                </button>
                <button
                    onClick={() => navigate("/form")}
                    className="btn btn-warning m-2"
                >
                    Go to Form
                </button>
                <button
                    onClick={() => navigate("/context")}
                    className="btn btn-info m-2"
                >
                    Go to Context
                </button>
                <button
                    onClick={() => navigate("/conditional-rendering")}
                    className="btn btn-dark m-2"
                >
                    Go to Conditional Rendering
                </button>
                <button
                    onClick={() => navigate("/list-rendering")}
                    className="btn btn-light m-2"
                >
                    Go to List Rendering
                </button>
            </div>
        </section>
    );
};

export default Features;