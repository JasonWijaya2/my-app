function ResetButton({ onReset }) {
    return (
        <button className="btn btn-warning" onClick={onReset}>
            Reset Counter
        </button>
    );
}

export default ResetButton;