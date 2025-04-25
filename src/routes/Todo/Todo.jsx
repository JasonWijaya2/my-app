import { useState } from "react";

function Todo() {
    const [list, setList] = useState([{
        text: '',
        checked: false
    }]);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        setList((prevList) => [...prevList, { text: input, checked: false }]);
        setInput("");
    };

    const handleRemove = (indexToRemove) => {
        setList((prevList) => prevList.filter((_, index) => index !== indexToRemove));
    };

    const handleCheck = (indexToCheck) => {
        setList((prevList) =>
            prevList.map((item, index) =>
                index === indexToCheck ? { ...item, checked: !item.checked } : item
            )
        );

        console.log(list);

    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Demo Todo App BNI</h1>
            <div className="d-flex justify-content-center mb-3">
                <input
                    type="text"
                    value={input}
                    onChange={handleInput}
                    className="form-control w-50 me-2"
                    placeholder="Enter a todo"
                />
                <button onClick={handleAdd} className="btn btn-primary">
                    Add
                </button>
            </div>
            <div>
                <ul className="list-group">
                    {list.map((todo, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <div className="form-check d-flex align-items-center gap-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`flexCheckDefault-${index}`}
                                    checked={todo.checked}
                                    onChange={() => handleCheck(index)}
                                />
                                <label
                                    className={`form-check-label fs-5 ${todo.checked ? "text-decoration-line-through text-black-50" : ""}`}
                                    htmlFor={`flexCheckDefault-${index}`}
                                >
                                    {todo.text}
                                </label>
                            </div>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleRemove(index)}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;