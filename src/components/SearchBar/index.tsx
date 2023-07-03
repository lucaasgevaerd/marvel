import { ChangeEvent } from 'react';
import { SearchBarContainer } from './styles'
import { GoSearch } from 'react-icons/go'

type Props = {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ handleChange }: Props) {
    return (
        <>
            <SearchBarContainer placeholder='Personagem'>
                <GoSearch />
                <input type="text" onChange={handleChange} />
            </SearchBarContainer>
        </>
    )
}
