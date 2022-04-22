import { useMisdemeanours } from "../misdemeanourContext"

const Table = () => {

    const MisList = useMisdemeanours();

    const column = Object.keys(MisList[0]);
    column.push("last")

    const tdData = () => {


        return MisList.map((data: any) => {
            const randNum = Math.floor(Math.random() * (50 - 40) + 40);
            const randPic = `https://picsum.photos/${randNum}/${randNum}`

            return (
                <tr  >
                    {
                        column.map((v) => {

                            if (v === "last") {
                                return <td className="td"><img alt="random" src={randPic} /></td>
                            }

                            return <td className="td">{data[v] === "lift" ? "🗣" : data[v] === "rudeness" ? "🤪" : data[v] === "vegetables" ? "🥗" : data[v] === "united" ? "😈" : data[v]}</td>
                        })
                    }
                </tr>
            )
        })
    }
    return (
        <table className="table">
            <thead >
                <th>Citizen ID</th>
                <th>Misdemeanour</th>
                <th>Date</th>
                <th>Punishment Idea</th>
            </thead>
            <tbody >
                {tdData()}
            </tbody>
        </table>
    )
}

export default Table