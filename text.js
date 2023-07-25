
const container = document.querySelector(`#root`)
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Circle = ({color}) => {
    return <div style={{...styles.circle, backgroundColor: color}}/>
}

const Square = ({color}) => {
    return <div style={{...styles.square, backgroundColor: color}}/>
}

const App = () =>{
    const [color, setColor] = useState(randomColor());

    return (
        <div>
            <Circle color={color} />
            <Square color={color} />
            <button style={styles.button} onClick={() => setColor(randomColor())}>Generate Color</button>
        </div>
    )
}

const styles = {
    circle: {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        margin: '10px',
        display: 'inline-block'
    },
    square: {
        height: '50px',
        width: '50px',
        margin: '10px',
        display: 'inline-block'
    },
    button: {
        padding: '10px'
    }
}
const root = ReactDOM.createRoot(container);
root.render(<App/>)