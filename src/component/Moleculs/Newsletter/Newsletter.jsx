const Newsletter = () => {
    return (
        <section style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f9f9f9" }}>
            <h3>Subscribe to our Newsletter</h3>
            <form>
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{ padding: "0.5rem", marginRight: "0.5rem", width: "250px" }}
                />
                <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#282c34", color: "white" }}>
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;