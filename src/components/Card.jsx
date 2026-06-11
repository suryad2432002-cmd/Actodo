function Card(props) {
    return (
        <div style={{backgroundColor:props.bgcolor}} className="px-10 py-5 border rounded-md text-center flex-grow">
        <h1 className="text-3xl font-bold mb-2">{props.title}</h1>
        <p className="text-lg">{props.subtitle}</p>
        </div>
    );
}   
export default Card;