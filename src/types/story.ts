export type Story = {
    id: number,
    title: string,
    description: string,
    resourceURI: string,
    type: string,
    modified: Date,
    thumbnail: {
        path: string,
        extension: string
    },
    comics: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ]
    },
    series: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ]
    },
    events: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ]
    },
    characters: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                role: string
            }
        ]
    },
    creators: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                role: string
            }
        ]
    },
    originalissue: {
        resourceURI: string,
        name: string
    }
}