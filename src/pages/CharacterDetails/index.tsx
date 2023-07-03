import axios, { AxiosResponse } from "axios"
import md5 from "md5";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ComicsResponse } from "../../types/comicsResponse";
import { EventsResponse } from "../../types/eventsResponse";
import { SeriesResponse } from "../../types/seriesResponse";
import { StoriesResponse } from "../../types/storiesResponse";
import { Character } from "../../types/character";
import { Comic } from "../../types/comic";
import { Event } from "../../types/event";
import { Series } from "../../types/series";
import { Story } from "../../types/story";
import { MainContainer } from "../../styles/layouts/mainContainer";
import { FlexContent } from "../../styles/layouts/flexContent";
import CardDetails from "../../components/CardDetails";
import { CharacterIdResponse } from "../../types/characterIdResponse";

export default function CharacterDetails() {
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    type PathTypes = 'comics' | 'events' | 'series' | 'stories'
    const location = useLocation()

    const [character, setCharacter] = useState<Character | null>(null);
    const [comics, setComics] = useState<Comic[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [series, setSeries] = useState<Series[]>([]);
    const [stories, setStories] = useState<Story[]>([]);

    useEffect(() => {
        const ts = Date.now().toString();
        const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
        const characterId = location.pathname.replace('/', '')

        axios
            .get(`${BASE_URL}/characters/${characterId}`, {
                params: {
                    apikey: PUBLIC_KEY,
                    ts: ts,
                    hash: hash,
                },
                headers: {
                    Accept: '*/*',
                },
            })
            .then((response: AxiosResponse<CharacterIdResponse>) => {
                setCharacter(response.data.data.results[0])
                axios
                    .get(`${BASE_URL}/characters/${characterId}/${'comics' as PathTypes}`, {
                        params: {
                            apikey: PUBLIC_KEY,
                            ts: ts,
                            hash: hash,
                        },
                        headers: {
                            Accept: '*/*',
                        },
                    })
                    .then((response: AxiosResponse<ComicsResponse>) => {
                        console.log("COMICS", response.data.data.results)
                        setComics(response.data.data.results)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                axios
                    .get(`${BASE_URL}/characters/${characterId}/${'events' as PathTypes}`, {
                        params: {
                            apikey: PUBLIC_KEY,
                            ts: ts,
                            hash: hash,
                        },
                        headers: {
                            Accept: '*/*',
                        },
                    })
                    .then((response: AxiosResponse<EventsResponse>) => {
                        console.log("EVENTS", response.data.data.results)
                        setEvents(response.data.data.results)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                axios
                    .get(`${BASE_URL}/characters/${characterId}/${'series' as PathTypes}`, {
                        params: {
                            apikey: PUBLIC_KEY,
                            ts: ts,
                            hash: hash,
                        },
                        headers: {
                            Accept: '*/*',
                        },
                    })
                    .then((response: AxiosResponse<SeriesResponse>) => {
                        console.log("SERIES", response.data.data.results)
                        setSeries(response.data.data.results)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                axios
                    .get(`${BASE_URL}/characters/${characterId}/${'stories' as PathTypes}`, {
                        params: {
                            apikey: PUBLIC_KEY,
                            ts: ts,
                            hash: hash,
                        },
                        headers: {
                            Accept: '*/*',
                        },
                    })
                    .then((response: AxiosResponse<StoriesResponse>) => {
                        console.log("STORIES", response.data.data.results)
                        setStories(response.data.data.results)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }, [BASE_URL, PRIVATE_KEY, PUBLIC_KEY, location.pathname]);


    return (
        <>
            <MainContainer>
                <FlexContent>
                    <CardDetails character={character} comics={comics} events={events} series={series} stories={stories} />
                </FlexContent>
            </MainContainer>
            {/* <h1>COMICS</h1>
            {comics.map((comic: Comic) =>
                comic.images.map((image: any) => (
                    <img src={image.jpg} alt={String(comic.id)} key={comic.id} />
                )))}
            < h1 > EVENTS</h1 >
            <p>{JSON.stringify(events)}</p>
            <h1>SERIES</h1>
            <p>{JSON.stringify(series)}</p>
            <h1>STORIES</h1>
            <p>{JSON.stringify(stories)}</p> */}
        </>
    )
}
