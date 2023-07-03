import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import md5 from 'md5';
import { MainContainer } from '../../styles/layouts/mainContainer';
import { GridContent } from '../../styles/layouts/gridContent';
import Pagination from '../../components/Pagination';
import { CharactersResponse } from '../../types/charactersResponse';
import { Character } from '../../types/character';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

export default function Home() {
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [characters, setCharacters] = useState<CharactersResponse>();
    const [searchedName, setSearchedName] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        window.scrollTo(0, 0)
        const offset = currentPage * 20;
        const ts = Date.now().toString();
        const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
        let url = `${BASE_URL}/characters?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}&offset=${offset}`;

        if (searchedName) {
            url += `&nameStartsWith=${encodeURIComponent(searchedName)}`;
        }

        axios
            .get(url, {
                headers: {
                    Accept: 'application/json',
                },
            })
            .then((response: AxiosResponse<CharactersResponse>) => {
                console.log(response)
                setCharacters(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [BASE_URL, PRIVATE_KEY, PUBLIC_KEY, currentPage, searchedName]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedName(event.target.value);
        setCurrentPage(0);
    };

    return (
        <>
            <MainContainer>
                <SearchBar handleChange={handleChange} />
                <GridContent>
                    {characters?.data.results.map((character: Character) => (
                        <Card character={character} key={character.id} />
                    ))}
                </GridContent>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={Math.ceil(characters?.data.total ? characters.data.total / 20 : 0)}
                />
            </MainContainer>
        </>
    );
}
