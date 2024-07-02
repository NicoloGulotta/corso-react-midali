import { useContext } from "react"
import { ESMPContext } from "../component/store/Context"
export default function Exemple() {
    const [count, setCount] = useContext(ESMPContext);

    return (

        <div>
            <button
                type="button"
                style={{ margin: '10px' }}
                onClick={() => setCount(count + 1)}>
                Incrementa il valore di {count} ed effettua fetch con id corrispondente
            </button>
        </div>

    )
}
