import { useState } from "react"

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = ({ text }) => <h1>{text}</h1>

const SubHeader = ({ text }) => <h3>{text}</h3>

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = ((good - bad) / all).toFixed(1)
    const positive = ((good * 100) / all).toFixed(2)

    if (all === 0) {
        return <div>no feedback given</div>
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>good {good}</td>
                </tr>
                <tr>
                    <td>neutral {neutral}</td>
                </tr>
                <tr>
                    <td>bad {bad}</td>
                </tr>
                <tr>
                    <td>all {all}</td>
                </tr>
                <tr>
                    <td>average {average}</td>
                </tr>
                <tr>
                    <td>positive {positive}%</td>
                </tr>
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const hanldeNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    return (
        <div>
            <div>
                <Header text={"give feedback"} />
            </div>
            <div>
                <Button onClick={handleGood} text="good" />
                <Button onClick={hanldeNeutral} text="neutral" />
                <Button onClick={handleBad} text="bad" />
            </div>
            <div>
                <SubHeader text={"statistics"} />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
