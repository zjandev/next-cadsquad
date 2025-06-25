import FloatContact from '@/shared/components/layouts/floatContact'
import Footer from '@/shared/components/layouts/footer'
import Header from '@/shared/components/layouts/header'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className="pt-[106px]">
                {children}
                <FloatContact />
            </main>
            <Footer />
        </>
    )
}
