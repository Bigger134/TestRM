import { Box, Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router';
import styles from "./styles.module.css"



const CharacterCard: React.FC<{ id: number, photo: string, name: string, status: string }> = observer((props) => {

    const navigate = useNavigate();
    const toTheCharacter = () => {
        navigate(`/character/${props.id - 1}`);
    }

    return (
        <Card onClick={toTheCharacter} className={styles.CardWrapper}>
            <img src={props.photo} className={styles.PhotoWrapper} />
            <Box className={styles.CardInfoWrapper}>
                <Typography variant="h2">{props.name}</Typography>
                <Typography variant="body1">Status: {props.status}</Typography>
            </Box>
        </Card>
    )
})

export default CharacterCard