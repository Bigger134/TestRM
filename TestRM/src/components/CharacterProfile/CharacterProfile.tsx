import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/utils";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css"

const CharacterProfile = observer(() => {
    const { id } = useParams()
    const store = useStore()

    if (id) {
        const currentCharacter = store.dataStore.characters.find((character) => character.id === (parseInt(id) + 1))
        console.log(currentCharacter);

        return (
            <Box className={styles.ProfileWrapper}>
                <Box className={styles.HeaderWrapper}>
                    <img src={currentCharacter?.image} style={{ height: '150px', width: '150px' }}></img>
                    <Typography variant="h1">{currentCharacter?.name}</Typography>
                </Box>
                <Box className={styles.InfoWrapper}>
                    <Typography variant="h2">Status: {currentCharacter?.status}</Typography>
                    <Typography variant="h2">Species: {currentCharacter?.species}</Typography>
                    <Typography variant="h2">Gender: {currentCharacter?.gender}</Typography>
                    <Typography variant="h2">Count of episodes: {currentCharacter?.episode.length}</Typography>
                </Box>
            </Box>
        )
    }
    else { return (<Typography variant="h3">Error! There is no character under this id</Typography>) }

})

export default CharacterProfile