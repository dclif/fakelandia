import { useMisdemeanours } from "../misdemeanourContext"
import React, { useState } from 'react'


const Table = () => {

    const MisList = useMisdemeanours();

    const [lesMis, setLesMis] = useState<any[]>(MisList);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const check = MisList.filter((x: any) => x.misdemeanour === value);
        const newMis = value === "Show All" ? MisList : check.length === 0 ? [{}] : check
        setLesMis(newMis)
    }

    const column: any = Object.keys(lesMis[0]);

    const tdData = () => {


        return lesMis.map((data: any) => {


            return (
                <tr  >
                    {
                        column.map((v: any, index: any) => {

                            if (v === "src") {
                                return <td key={index} className="td"><img alt="random" src={data[v]} /></td>
                            }

                            return <td key={index} className="td">{data[v] === "lift" ? "🗣" : data[v] === "rudeness" ? "🤪" : data[v] === "vegetables" ? "🥗" : data[v] === "united" ? "😈" : data[v]}</td>
                        })
                    }
                </tr>
            )
        })
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <select style={{ width: "30%", fontSize: "1.5em", textAlign: "center" }} onChange={handleChange}>
                <option defaultValue="All">Show All</option>
                <option value="rudeness">🤪</option>
                <option value="lift">🗣</option>
                <option value="vegetables">🥗</option>
                <option value="united">😈</option>

            </select>
            <table className="table">
                <thead >
                    <tr>
                        <th>Citizen ID</th>
                        <th>Misdemeanour</th>
                        <th>Date</th>
                        <th>Punishment Idea</th>
                    </tr>
                </thead>
                <tbody >
                    {tdData()}
                </tbody>
            </table>
        </div >
    )
}

export default Table