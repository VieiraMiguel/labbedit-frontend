import { TopBarStyled } from './styled'
import statusIcons from '../../assets/status-icons.png'

export const TopBar = () => {

    const returnTime = () => {
        const time = new Date()
        const hour = time.getHours()
        const minutes = time.getMinutes()
        if (minutes <= 9) {
            return hour + ":" + "0" + minutes
        } else {
            return hour + ":" + minutes
        }
    }

    return (
        <TopBarStyled>
            <span>{returnTime()}</span>
            <img src={statusIcons} />
        </TopBarStyled>
    )
}