import './IconsHeader.css'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const IconsHeader = () =>{
    const iconsOptions = [perfil, sacola]

    return(
        <ul className='icons'>
          {iconsOptions.map((icon) =>
            <li className='icon'><img src={icon} alt='Icone'></img></li>
          )}
        </ul>
    )
}
export default IconsHeader