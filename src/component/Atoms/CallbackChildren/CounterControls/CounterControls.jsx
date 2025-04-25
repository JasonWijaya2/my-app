import { useState } from "react"

function CounterControls({ onIncrement, onDecrement, onIncrementByAmount }) {
    const [amount, setAmount] = useState(1)

    const handleAmountChange = (e) => {
        setAmount(Number(e.target.value))
    }

    const handleIncrementByAmount = () => {
        onIncrementByAmount(amount)
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
                <button className="btn btn-danger me-2" onClick={onDecrement}>Decrement (-1)</button>
                <button className="btn btn-success me-2" onClick={onIncrement}>Increment (+1)</button>
            </div>

            <div className="d-flex align-items-center">
                <input type="number" value={amount} onChange={handleAmountChange} min={1} className="form-control w-auto me-2" />
                <button className="btn btn-primary" onClick={handleIncrementByAmount}>Add Amount</button>
            </div>
        </div>
    )
}

export default CounterControls