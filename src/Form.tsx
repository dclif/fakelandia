import React, { useState } from 'react'

const defaultValues = {
    subject: "",
    reason: "",
    details: "",

};

const Form = () => {

    const [inputs, setInputs] = useState(defaultValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(inputs)

        setInputs(defaultValues)

    }
    return (
        <div className="form-container" >
            <form onSubmit={handleSubmit}>

                <label>Subject:
                    <input
                        type="text"
                        name="subject"
                        value={inputs.subject}
                        onChange={handleChange}
                    />
                </label>
                <label>Reason:
                    <select
                        name="reason"
                        value={inputs.reason}
                        onChange={handleChange}>
                        <option selected value="rudeness">🤪</option>
                        <option value="lift">🗣</option>
                        <option value="vegetables">🥗</option>
                        <option value="united">😈</option>
                        <option value="talk">I just want to talk</option>
                    </select>
                </label>
                <label>Enter the year of birth:
                    <textarea
                        name="details"
                        value={inputs.details}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Confess" />
            </form>
        </div>
    )
}

export default Form