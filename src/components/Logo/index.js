import React from "react"
import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoComponent = styled.div`
    /* display flex proporciona um fluxo de layout flexível e responsivo,  */
    /* permitindo que os elementos sejam facilmente alinhados, espaçados e dimensionados */
    /* atraves dele, conseguimos usar o align-items, justify-content, flex-grow, entre outros */
    display: flex;
    font-size: 30px;
`
const ImgComponent = styled.img`
    margin-right: 10px;
`

const Logo = () => {
    return(
        <LogoComponent>
            <ImgComponent
                src={logo}
                alt='logo'
                className='logo-img'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoComponent>
    )
}
export default Logo