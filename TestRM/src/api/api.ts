import axios, { AxiosInstance } from 'axios';
import { CharactersBody, GetChatactersResponse } from "./types.ts";

class Api {
    public server: AxiosInstance;
    constructor() {
        this.server = axios.create({
            baseURL: 'https://rickandmortyapi.com/api'
        })
    }

    async getInfo() {
        const req = await this.server.get<GetChatactersResponse<CharactersBody>>('/character');
        return req.data;
    }

    async getPageById(id: number) {
        const req = await this.server.get<GetChatactersResponse<CharactersBody>>(`/character?page=${id}`);
        return req.data.results
    }

}

export default new Api();