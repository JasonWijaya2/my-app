import { useState } from "react";
import { TemperatureDisplay, TemperatureInput } from "../../component/Moleculs";

function LiftingStateUp() {
    const [temperature, setTemperature] = useState(0);

    const handleTemperature = (newTemperature) => {
        setTemperature(newTemperature);
    };

    const isBoiling = temperature >= 100;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Temperature Converter</h1>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <TemperatureInput
                        temperature={temperature}
                        onTemperatureChange={handleTemperature}
                    />
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <TemperatureDisplay
                        temperature={temperature}
                        isBoiling={isBoiling}
                    />
                </div>
            </div>
        </div>
    );
}

export default LiftingStateUp;