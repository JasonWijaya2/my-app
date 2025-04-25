function TemperatureDisplay({ temperature, isBoiling }) {
    return (
        <div className="p-3 border rounded bg-light">
            <h2 className="text-center">Current Temperature: {temperature}°C</h2>
            <p className={`text-center ${isBoiling ? "text-danger" : "text-success"}`}>
                The water would {isBoiling ? "boil" : "not boil"} at this temperature.
            </p>
            <p className="text-center">
                Temperature in Fahrenheit:{" "}
                <strong>{Math.round((temperature * 9) / 5 + 32)}°F</strong>
            </p>
        </div>
    );
}

export default TemperatureDisplay;