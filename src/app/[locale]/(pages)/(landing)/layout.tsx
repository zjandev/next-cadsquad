import Footer from '@/app/shared/components/layouts/footer'
import Header from '@/app/shared/components/layouts/header'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
