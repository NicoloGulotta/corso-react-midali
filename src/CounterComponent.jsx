import { useState } from 'react'; // Importa useState
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './component/store/counterSlice';

function CounterComponent() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    // Stato locale per l'input incrementAmount
    const [incrementAmount, setIncrementAmount] = useState(0);

    return (
        <div style={{ margin: "10px" }}>
            <h1>Counter:  {count}</h1>
            <div>
                {/* Pulsanti per incrementare e decrementare di 1 */}
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>

                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>

            <div>
                {/* Input per specificare la quantità di incremento */}
                <input
                    type="number" // Specifica il tipo di input come numerico
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    style={{
                        width: "100px",

                    }}
                    onChange={(e) => setIncrementAmount(parseInt(e.target.value, 10) || 0)}
                />
                <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
                    Add Amount
                </button>
            </div>
        </div>
    );
}

export default CounterComponent;
