import LoginLinks from '@/app/LoginLinks'
import ApplicationLogo from '@/components/ApplicationLogo'
import Form from '@/components/Form'

export const metadata = {
    title: 'Cal-Hacks',
}

const Home = () => {
    return (
        <>
            <section className="section relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 bg-gray-100 dark:bg-gray-900">
                <div className="container">
                    <LoginLinks />
                    <div className="columns">
                        <div className="column is-one-third">
                            <section className="section">
                                <div className="container has-text-centered">
                                    <div className="columns is-vcentered">
                                        <div className="column">
                                            <ApplicationLogo />
                                        </div>
                                        <div className="column">
                                            <h1 className="title">Cal Hacks</h1>
                                            <h3 className="subtitle">
                                                Registration
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="column is-two-thirds">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
