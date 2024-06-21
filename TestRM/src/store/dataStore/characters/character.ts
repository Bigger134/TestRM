import { makeAutoObservable } from "mobx";
import { RootStore } from "../../rootStore.ts";
import { CharactersBody } from '../../../api/types.ts'

export class Character {
    protected readonly rootStore: RootStore
    public id: number;
    public name: string;
    public status: string;
    public species: string;
    public type: string;
    public gender: string;
    public origin: object;
    public location: object;
    public image: string;
    public episode: string[];
    public url: string;
    public created: string;
    constructor(rootStore: RootStore, character: CharactersBody) {
        this.rootStore = rootStore;
        this.id = character.id;
        this.name = character.name;
        this.status = character.status;
        this.species = character.species;
        this.type = character.type;
        this.gender = character.gender;
        this.origin = character.origin;
        this.location = character.location;
        this.image = character.image;
        this.episode = character.episode;
        this.url = character.url;
        this.created = character.created;
        makeAutoObservable(this, {}, { autoBind: true })
    }
}