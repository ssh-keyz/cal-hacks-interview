import '@/app/global.scss'

export const metadata = {
    title: 'Cal-Hacks',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
