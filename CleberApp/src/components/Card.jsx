export const Card = (props) => {
    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>{props.value}</p>
            <img src={props.image} alt="Imagem" width= "200px" height="auto"/>
        </>
    )
}