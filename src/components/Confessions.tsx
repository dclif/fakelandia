import React from 'react'
import Form from '../Form'

const Confessions: React.FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 style={{ width: "40%", fontSize: "1em" }}>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly. <br /><br /> However, you're just have a hard day and need to vent then your're welcome to contact us here too. Up to you!.</h2>
            <Form />
        </div>
    )
}

export default Confessions