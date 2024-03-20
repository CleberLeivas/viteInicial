import Graficos from "./components/Graficos"
import Menu from "./components/Menu"

export const Home = () => {
    return(
        <>
        <br />
        <Menu/>
            <Graficos text="Gráfico de linha" color="green" whatChart="line"/>
            <Graficos text="Gráfico de area" color="red" whatChart="area"/>
            <Graficos text="Gráfico de pizza" color="yellow" whatChart="pizza"/>
            <Graficos text="Gráfico de barra" color="orange" whatChart="barra"/>
        </>       
    )
}

export const Carrousel = () => {
    return(
        <>
        <br />
        <Carrousel/>
            <Carrousel text="Carrousel 1" color="green"/>
        </>       
    )
}