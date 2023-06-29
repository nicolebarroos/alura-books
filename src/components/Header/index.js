import IconsHeader from "../IconsHeader"
import Logo from "../Logo"
import OptionsHeader from "../OptionsHeader"
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>
    )
}
export default Header