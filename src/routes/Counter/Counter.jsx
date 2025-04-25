import { useEffect, useState } from "react"
import "../../styles/statedemo.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        console.log('useEffect di Eksekusi!')
    }, [])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="state-demo">
            <div className="demo-container">
                <div className="demo-card">
                    <h2>1. Counter</h2>
                    <p className="explanation">State untuk menyimpan nilai</p>

                    <div className="counter">
                        <button onClick={decrement} className="btn">-</button>
                        <span className="count">{count}</span>
                        <button onClick={increment} className="btn">+</button>
                    </div>
                </div>
            </div>

            <div className="demo-card">
                <h2>2. Toggle State</h2>
                <p className="explanation">State yang menyimpan boolean</p>

                <div className="like-container">
                    <button
                        onClick={() => {
                            setLiked(!liked)
                        }}
                        className={`like-btn ${liked ? 'liked' : ''}`}
                    >
                        {liked ? 'Sudah di Like' : 'Tekan untuk Like'}
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Counter