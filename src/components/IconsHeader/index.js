import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Options = styled.ul`
  display: flex;
  align-items: center;
`

const Option = styled.li`
  list-style: none;
  margin-right: 40px;
  width: 25px;
`
const IconsHeader = () =>{
    const iconsOptions = [perfil, sacola]

    return(
        <Options>
          {iconsOptions.map((icon) =>
            <Option className='icon'><img src={icon} alt='Icone'></img></Option>
          )}
        </Options>
    )
}
export default IconsHeader