import {Card} from "./components/Card"
import Menu from "./components/Menu"

export const Consumo = () => {
    return(
        <div>
            <Menu/>
            <br />
            Consumo JSON
            <Card
            name="Lucas"
            desc="bem loko"
            value="10,00"
            image="https://th.bing.com/th/id/OIP.4nkOfb5GT5WHSzfN4IjklAHaFP?rs=1&pid=ImgDetMain"
            />
        </div>
    )
}