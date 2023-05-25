import { BottomBarStyled } from "./styled"
import bottomBar from '../../assets/bottom-bar.png'

export const BottomBar = () => {

    return(
        <BottomBarStyled>
            <img src={bottomBar}/>
        </BottomBarStyled>
    )
}