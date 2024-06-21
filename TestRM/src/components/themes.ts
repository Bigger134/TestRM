import { createTheme } from "@mui/material";
import styles from './../custom.module.css';

const theme = createTheme({
    components: {
        MuiInput: {
            defaultProps: { style: { borderBottom: 0 }, className: styles.customInput, classes: { focused: styles.customInput_focused, input: styles.custom_input_base, inputAdornedStart: styles.inputAdornedStart } },
            styleOverrides: {
            }
        },
        MuiButtonBase: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#0ca83b',
                    fontSize: 18,
                    fontFamily: 'PT Serif',
                    fontWeight: 500,
                    color: '#000000',
                }
            },
        },
        MuiButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#0ca83b',
                    fontSize: 18,
                    fontFamily: 'PT Serif',
                    fontWeight: 500,
                    color: '#000000',
                }
            },
        },
    },
    typography: {
        button: {
            fontSize: 18,
            fontFamily: 'PT Serif',
            fontWeight: 500,
            color: '#000000'
        },
        h1: {
            fontSize: 48,
            fontFamily: 'PT Serif',
            fontWeight: "bold",
            color: '#000000',
        },
        h2: {
            fontSize: 24,
            fontFamily: 'PT Serif',
            fontWeight: 500,
            color: '#000000',
        },
        body1: {
            fontSize: 18,
            fontFamily: 'PT Serif',
            fontWeight: 500,
            color: '#000000',
        }
    },
    shape: {
        borderRadius: 16,
    }
});

export default theme;