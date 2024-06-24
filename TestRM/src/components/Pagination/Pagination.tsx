import { useStore } from "../../store/utils";
import { Button } from "@mui/material";


const Pagination = () => {

    const store = useStore();
    return (
        <>
            {[...Array(store.dataStore.pages).keys()].map((page) => (
                <Button
                    sx={{ margin: '5px' }}
                    key={page}
                    onClick={() => store.dataStore.changePage(page + 1)}
                >
                    {page + 1}
                </Button>
            ))}
        </>
    );
}

export default Pagination