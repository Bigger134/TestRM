import { makeAutoObservable } from "mobx";
import { RootStore } from "../rootStore.ts";
import api from "./../../api/api.ts";
import { Character } from "./characters/character.ts";

export class DataStore {
    protected readonly rootStore: RootStore
    characters: Character[];
    pages: number;
    currentPage: number;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.characters = [];
        this.pages = 0;
        this.currentPage = 1;
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async getCharacters() {
        const req = await api.getInfo();
        this.pages = req.info.pages;
        this.characters = req.results.map((character) => new Character(this.rootStore, character))
    }

    async getPageById(id: number) {
        const req = await api.getPageById(id);
        this.characters = req.map((character) => new Character(this.rootStore, character))
    }

    changePage(page: number) {
        this.currentPage = page;
        this.getPageById(page);
    }
}