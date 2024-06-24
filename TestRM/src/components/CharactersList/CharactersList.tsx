import { observer } from "mobx-react-lite";
import { useStore } from "../../store/utils"
import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Box, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.css"
import Pagination from "../Pagination/Pagination";

const CharactersList = observer(() => {
    const store = useStore();
    useEffect(() => {
        store.dataStore.getCharacters();
    }, [])

    const [searchValue, setSearchValue] = useState('');
    const filteredCharacters = store.dataStore.characters.filter((character) => { return (character.name.toLowerCase().includes(searchValue.toLowerCase())) })
    const charactersList = filteredCharacters.map((character) => { return (<CharacterCard key={character.id} id={character.id} photo={character.image} name={character.name} status={character.status} />) })

    return (
        <>
            <Input sx={{ mt: '10px', width: '353px', mb: '10px' }} onChange={(event) => { setSearchValue(event.target.value) }}
                startAdornment={<InputAdornment position="start" ><SearchIcon style={{ fill: 'white' }} /></InputAdornment>}
            />
            <Box >
                <Pagination />
            </Box>
            <Box className={styles.ListWrapper}>
                {charactersList}
            </Box>
        </>
    )
})

export default CharactersList