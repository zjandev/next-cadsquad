import FloatContact from '@/shared/components/layouts/floatContact'
import Footer from '@/shared/components/layouts/footer'
import AppHeader from '@/shared/components/layouts/header'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <AppHeader />
            <main className="pt-[106px]">
                {children}
                <FloatContact />
            </main>
            <Footer />
        </>
    )
}
