import { HeaderContainer } from './styles';
import MarvelLogo from '../../assets/svgs/marvel.svg'

export default function Header() {

    return (
        <HeaderContainer>
            <img src={MarvelLogo} alt="Logo da Marvel" />
        </HeaderContainer>
    )
}
