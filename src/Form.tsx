import React, { useState } from 'react'

const defaultValues = {
    subject: "",
    reason: "",
    details: "",

};



const Form = () => {

    const [inputs, setInputs] = useState(defaultValues);
    const [buttonState, setButtonState] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }))
        if (inputs.subject.length > 0 && inputs.reason.length > 0 && inputs.details.length > 0) { setButtonState(false) }
    }


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setInputs(defaultValues)
        setButtonState(true)
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
                        style={{ textAlign: 'center', fontSize: "1em" }}
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
                <label>Reason for contact:
                    <textarea
                        style={{ width: "100%", height: "6em" }}
                        name="details"
                        value={inputs.details}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Confess" disabled={buttonState} className={`submit ${buttonState === false ? "submit" : "disabled"}`} />
            </form>
        </div>
    )
}

export default Form