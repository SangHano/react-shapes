const container = document.querySelector(`#root`)
const randomColor = () => {
    const [color, setColor] = React.useState("");
    const colorGen = () => {
        setColor(Math.floor(Math.random() * 1111).toString(16));
    };
    return { color, colorGen };
};

const Circle = (props) => {
    return (
        <div>
            <span style={props.style}>c1</span>

            <span style={props.style}>c2</span>

            <span style={props.style}>c3</span>
        </div>
    );
}




const Square = (props) => {
    return (
        <div>
            <span style={props.style}>s1</span>

            <span style={props.style}>s2</span>

            <span style={props.style}>s3</span>
            

        </div>
    );
}



const App = () => {
    const { color, colorGen } = randomColor();
    const style = {

        height: "50px",
        width: "50px",
        borderRadius: "50%",
        margin: "10px",
        backgroundColor: "#" + color,
        display: "flex"
    
    }

    return (
        <div>
                <Circle style={style} />

                <Square style={{ ...style, borderRadius: "0%" }} />

                <button style={{ padding: "30px" }} onClick={colorGen}>CHANGE COLOR? MAYBE?</button>

        </div>
    )



}


const root = ReactDOM.createRoot(container);
root.render(<App/>)