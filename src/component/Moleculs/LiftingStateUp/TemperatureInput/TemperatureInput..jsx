function TemperatureInput({ temperature, onTemperatureChange }) {
    const handleChange = (e) => {
        const newTemperature = Number(e.target.value);
        onTemperatureChange(newTemperature);
    };

    return (
        <div className="mb-3">
            <label htmlFor="temperature-input" className="form-label">
                Enter Temperature (°C)
            </label>
            <input
                id="temperature-input"
                type="number"
                value={temperature}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter temperature in Celsius"
            />
        </div>
    );
}

export default TemperatureInput;