import { useState } from "react";
import { Counter, CounterControls, ResetButton } from "../../component/Atoms";

function CallbackChildren() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const incrementByAmount = (amount) => {
        setCount((prevCount) => prevCount + amount);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Counter App</h1>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Counter count={count} />
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                    <CounterControls
                        onIncrement={increment}
                        onDecrement={decrement}
                        onIncrementByAmount={incrementByAmount}
                    />
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-md-6 text-center">
                    <ResetButton onReset={reset} />
                </div>
            </div>
        </div>
    );
}

export default CallbackChildren;