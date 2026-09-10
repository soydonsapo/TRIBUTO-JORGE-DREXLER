import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#934931' },
    secondary: { main: '#4b6454' },
    background: { default: '#fff8f5', paper: '#ffffff' },
    text: { primary: '#1f1b18', secondary: '#54433e' },
    divider: '#dac1ba',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans Variable", sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
    h2: { fontFamily: '"Playfair Display Variable", serif' },
    h6: { fontFamily: '"Playfair Display Variable", serif' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, padding: '12px 24px' } },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 24, boxShadow: '0 4px 20px -2px rgba(58,53,50,.04)' },
      },
    },
    MuiDialog: {
      styleOverrides: { paper: { borderRadius: 28 }, backdrop: { backdropFilter: 'blur(5px)' } },
    },
    MuiOutlinedInput: {
      styleOverrides: { root: { borderRadius: 999, backgroundColor: '#fcf2ed' } },
    },
    MuiChip: { styleOverrides: { root: { backgroundColor: '#f6ece7' } } },
  },
})
