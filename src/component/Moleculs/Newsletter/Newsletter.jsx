const Newsletter = () => {
    return (
        <section className="bg-light text-center py-5">
            <h3>Subscribe to our Newsletter</h3>
            <form className="d-flex justify-content-center mt-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control w-50 me-2"
                />
                <button type="submit" className="btn btn-dark">
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;