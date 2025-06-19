import Banner from './_components/Banner'
import ContactUs from './_components/ContactUs'
import CustomerReview from './_components/a'
import PopularProject from './_components/PopularProject'
import WhyChooseUs from './_components/WhyChooseUs'

export default function HomePage() {
    return (
        <>
            <section className="max-w-screen h-full">
                <Banner />
            </section>
            <section className="container">
                <PopularProject />
            </section>
            <section className="container">
                <WhyChooseUs />
            </section>
            <section className="container py-20">
                <CustomerReview />
            </section>
            <section className="max-w-screen h-full py-20">
                <ContactUs />
            </section>
        </>
    )
}
