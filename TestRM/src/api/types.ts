export interface GetChatactersResponse<b> {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null,
    };
    results: b[]
}

export interface CharactersBody {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[]
    url: string,
    created: string
}