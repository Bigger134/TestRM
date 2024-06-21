import { observer } from "mobx-react-lite";
import { useStore } from "../../store/utils"
import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Box, Button, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.css"

const CharactersList = observer(() => {
    const store = useStore();
    useEffect(() => {
        store.dataStore.getCharacters();
    }, [])

    const changePage = (id: number) => {
        store.dataStore.getPageById(id);
    }

    const [searchValue, setSearchValue] = useState('');
    const filteredCharacters = store.dataStore.characters.filter((character) => { return (character.name.toLowerCase().includes(searchValue.toLowerCase())) })
    const charactersList = filteredCharacters.map((character) => { return (<CharacterCard key={character.id} id={character.id} photo={character.image} name={character.name} status={character.status} />) })
    let pages = [];
    for (let i = 1; i <= store.dataStore.pages; i++) {
        pages[i] = i;
    }
    const buttonPages = pages.map((page) => {
        return (<Button sx={{ margin: '5px' }} value={page} onClick={(event) => { changePage(event.target.value) }}>{page}</Button>)
    })

    return (
        <>
            <Input sx={{ mt: '10px', width: '353px', mb: '10px' }} onChange={(event) => { setSearchValue(event.target.value) }}
                startAdornment={<InputAdornment position="start" ><SearchIcon style={{ fill: 'white' }} /></InputAdornment>}
            />
            <Box>
                {buttonPages}
            </Box>
            <Box className={styles.ListWrapper}>
                {charactersList}
            </Box>
        </>
    )
})

export default CharactersList