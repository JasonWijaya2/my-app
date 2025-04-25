import { Header, Features, Footer, Hero, Newsletter } from "../../component/Moleculs"

const SimplePage = () => {
    return (
        <>
            <Header title="React Components" />
            <main>
                <Hero />
                <Features />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default SimplePage