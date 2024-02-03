'use client'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
// import variables from 'variables.module.scss'

// export default function Form() {
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const onSubmit = async data => {
        console.log(data)
        try {
            const formData = new FormData(data)
            console.log(formData)
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            // Handle response if necessary
            const message = await response.json()
            console.log(message)
        } catch (error) {
            // Capture the error message to display to the user
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    console.log(errors)

    return (
        <section style={{ color: 'white !important' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Oski Bear"
                            {...register('Full Name', { required: true })}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">University</label>
                    <div className="control has-icons-right">
                        <input
                            className="input is-success"
                            type="text"
                            placeholder="U.C. Berkeley"
                            {...register('University', { required: true })}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user" />
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check" />
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Major</label>
                    <div className="control has-icons-right">
                        <input
                            className="input"
                            type="text"
                            placeholder="Business"
                            {...register('Major', {
                                required: true,
                                maxLength: 80,
                            })}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                    <div className="control has-icons-right">
                        <input
                            className="input"
                            type="text"
                            placeholder="Non Binary"
                            {...register('gender', {
                                required: true,
                                maxLength: 80,
                            })}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Country</label>
                    <div className="control has-icons-right">
                        <input
                            className="input"
                            type="text"
                            placeholder="USA"
                            {...register('country', {
                                required: true,
                                maxLength: 80,
                            })}
                        />
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <label className="label">Graduation Month</label>
                        <div className="control has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="12"
                                {...register('Graduation month ', {
                                    required: true,
                                    max: 12,
                                    min: 1,
                                })}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Graduation Year</label>
                        <div className="control has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="2028"
                                {...register('Graduation year', {
                                    required: true,
                                    max: 2040,
                                    min: 2000,
                                })}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle" />
                            </span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="field">
                    <label className="label">
                        Why are you interested in attending Cal Hacks 11.0?
                        <br />
                        What are you interested in building? (1000 character
                        maximum)
                    </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            placeholder="I want to attend Cal Hacks because..."
                            {...register('Essay', {
                                required: true,
                                maxLength: 1000,
                            })}
                        />
                    </div>
                </div>
                <div className="file is-centered">
                    <label className="file-label">
                        <input
                            className="file-input"
                            type="file"
                            name="resume"
                            {...register('Resume', { required: true })}
                        />
                        <span className="file-cta">
                            <span className="file-label is-centered">
                                Upload your resume..
                            </span>
                        </span>
                    </label>
                </div>
                <br />
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button
                            className="button is-link"
                            type="submit"
                            disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                {...register('isOfAge', { required: true })}
                                style={{ marginRight: '5px' }}
                            />
                            I am 18 years or older.
                        </label>
                    </div>
                </div>
                {error ? <p>{error}</p> : <p />}
            </form>
        </section>
    )
}
export default Form
