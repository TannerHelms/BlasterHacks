export default function Button({ text, onClickFunc }) {
    return <button onClick={onClickFunc}>{text}</button>
}