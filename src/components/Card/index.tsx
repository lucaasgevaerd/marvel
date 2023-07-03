import { Character } from '../../types/character'
import { CardContainer } from './styles'
import imageNotFound from '../../assets/images/image_not_found.jpg';
import { image_variants } from '../../utils/imageVariants';
import { Link } from 'react-router-dom';

type Props = {
    character: Character
}

export default function Card({ character }: Props) {
    return (
        <CardContainer key={character.id}>
            <img
                src={`${character.thumbnail.path.includes('image_not_available')
                    ? imageNotFound
                    : character.thumbnail.path + '/' + image_variants.portrait_aspect_ratio.portrait_uncanny + '.' + character.thumbnail.extension}`}
                alt="imagem do personagem"
            />
            <div>
                <p>{character.name}</p>
            </div>
            <Link to={`/${character.id}`}>MAIS INFORMAÇÕES</Link>
            <div className='more_card_information'></div>
        </CardContainer>
    )
}
