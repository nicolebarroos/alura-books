import React from "react"
import './OptionHeader.css'

const OptionsHeader = () => {
    const textOptions = ["Categoria", "Favoritos", "Minha estante"]
    return (
        <ul className='opcoes'>
            { textOptions.map( (text) => (
                <li className='opcao'><p>{text}</p></li>
            ) ) }
      </ul>
    )
}
export default OptionsHeader