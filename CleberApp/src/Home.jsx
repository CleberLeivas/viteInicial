import Graficos from "./components/Graficos"

export const Home = () => {

    return(
        <>
            <Graficos text="Grafico de linha" color="green" whatChart="line"/>
            <Graficos text="Grafico de area" color="red" whatChart="area"/>
            <Graficos text="Grafico de pizza" color="yellow" whatChart="pizza"/>
            <Graficos text="Grafico de barra" color="orange" whatChart="barra"/>
        </>       
    )
}