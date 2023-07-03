import { IconContext } from "react-icons";
import { Character } from "../../types/character";
import { Comic } from "../../types/comic";
import { Event } from "../../types/event";
import { Series } from "../../types/series";
import { Story } from "../../types/story";
import { image_variants } from "../../utils/imageVariants";
import { CardDetailsContainer, DetailCardSectionTitle, DetailsCardContent, DetailsCardDescription, DetailsCardHeader, DetailsCardSectionButton, DetailsCardSectionContainer, DetailsCardSectionContent } from "./styles";
import { BsChevronCompactDown } from 'react-icons/bs'
import { useState } from "react";
import imageNotFound from '../../assets/images/image_not_found.jpg';

type Props = {
    character: Character | null
    comics: Comic[]
    events: Event[]
    series: Series[]
    stories: Story[]
}

export default function CardDetails({ character, comics, events, series, stories }: Props) {
    const [comicsSectionIsOpen, setComicsSectionIsOpen] = useState<boolean>(false);
    const [eventsSectionIsOpen, setEventsSectionIsOpen] = useState<boolean>(false);
    const [seriesSectionIsOpen, setSeriesSectionIsOpen] = useState<boolean>(false);

    function dateFormat(value: Date) {
        const date = new Date(value);
        const formattedDate = date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: '2-digit',
            year: 'numeric'
        })
        return formattedDate
    }

    console.log(character)

    return (
        <CardDetailsContainer>
            <DetailsCardHeader>
                <p>{character?.name}</p>
                {character?.modified && character?.id && (
                    <div>
                        <p>Modificado: {dateFormat(character?.modified)}</p>
                        <p>Id: {character?.id}</p>
                    </div>
                )}
            </DetailsCardHeader>
            <DetailsCardContent>
                <>
                    <DetailsCardDescription>
                        <img
                            src={`${character?.thumbnail.path.includes('image_not_available')
                                ? imageNotFound
                                : character?.thumbnail.path + '/' + image_variants.portrait_aspect_ratio.portrait_fantastic + '.' + character?.thumbnail.extension}`}
                            alt="imagem do personagem"
                        />
                        <p>{character?.description}</p>
                    </DetailsCardDescription>
                    {comics.length > 0 && (
                        <DetailsCardSectionContainer>
                            <DetailCardSectionTitle>
                                COMICS
                            </DetailCardSectionTitle>
                            <DetailsCardSectionContent sectionIsOpen={comicsSectionIsOpen}>
                                {comics.map((comic: Comic) =>
                                (
                                    <img src={`${comic.thumbnail.path}/${image_variants.portrait_aspect_ratio.portrait_fantastic}.${comic.thumbnail.extension}`} alt={comic.title} key={comic.id} />
                                )
                                )}
                            </DetailsCardSectionContent>
                            <DetailsCardSectionButton sectionIsOpen={comicsSectionIsOpen}>
                                <IconContext.Provider
                                    value={{ className: 'arrow-down', attr: { onClick: () => setComicsSectionIsOpen(!comicsSectionIsOpen) } }}
                                >
                                    <BsChevronCompactDown />
                                </IconContext.Provider>
                            </DetailsCardSectionButton>
                        </DetailsCardSectionContainer>
                    )}

                    {events.length > 0 && (
                        <DetailsCardSectionContainer>
                            <DetailCardSectionTitle>
                                EVENTS
                            </DetailCardSectionTitle>
                            <DetailsCardSectionContent sectionIsOpen={eventsSectionIsOpen}>
                                {events.map((event: Event) =>
                                (
                                    <img src={`${event.thumbnail.path}/${image_variants.portrait_aspect_ratio.portrait_fantastic}.${event.thumbnail.extension}`} alt={event.title} key={event.id} />
                                )
                                )}
                            </DetailsCardSectionContent>
                            <DetailsCardSectionButton sectionIsOpen={eventsSectionIsOpen}>
                                <IconContext.Provider
                                    value={{ className: 'arrow-down', attr: { onClick: () => setEventsSectionIsOpen(!eventsSectionIsOpen) } }}
                                >
                                    <BsChevronCompactDown />
                                </IconContext.Provider>
                            </DetailsCardSectionButton>
                        </DetailsCardSectionContainer>
                    )}

                    {series.length > 0 && (
                        < DetailsCardSectionContainer >
                            <DetailCardSectionTitle>
                                SERIES
                            </DetailCardSectionTitle>
                            <DetailsCardSectionContent sectionIsOpen={seriesSectionIsOpen}>
                                {series.map((series: Series) =>
                                (
                                    <img src={`${series.thumbnail.path}/${image_variants.portrait_aspect_ratio.portrait_fantastic}.${series.thumbnail.extension}`} alt={series.title} key={series.id} />
                                )
                                )}
                            </DetailsCardSectionContent>
                            <DetailsCardSectionButton sectionIsOpen={seriesSectionIsOpen}>
                                <IconContext.Provider
                                    value={{ className: 'arrow-down', attr: { onClick: () => setSeriesSectionIsOpen(!seriesSectionIsOpen) } }}
                                >
                                    <BsChevronCompactDown />
                                </IconContext.Provider>
                            </DetailsCardSectionButton>
                        </DetailsCardSectionContainer>
                    )}

                </>
            </DetailsCardContent>
            {/* STORIES */}
            {/* <h1>STORIES</h1>
                {stories.map((story: Story) =>
                (
                    <img src={`${story.thumbnail.path}.${story.thumbnail.extension}`} alt={story.title} key={story.id} />
                )
                )} */}
        </CardDetailsContainer >
    )
}
