import React, { useContext, useState, useEffect, ReactNode } from 'react'
import generateMisdemeanours from './components/Misdemeanours/generate_misdemeanours'

const MisdemeanoursContext = React.createContext<any | null>(null);
const MisdemeanoursUpdateContext = React.createContext<any | null>(null);

export function useMisdemeanours() {
    return useContext(MisdemeanoursContext)
}

export function useMisdemeanoursUpdate() {
    return useContext(MisdemeanoursUpdateContext)
}


const MisdemeanourContext: any = ({ children }: { children: ReactNode }) => {


    const [mis, setMis] = useState<any[]>([]);

    useEffect(() => {
        getMisdemeanours()
    }, []);

    const getMisdemeanours = async () => {
        const response = await generateMisdemeanours(5)
        setMis(response)

    };


    return (
        <MisdemeanoursContext.Provider value={mis}>
            <MisdemeanoursUpdateContext.Provider value={setMis}>
                {children}
            </MisdemeanoursUpdateContext.Provider>
        </MisdemeanoursContext.Provider >
    )
}

export default MisdemeanourContext