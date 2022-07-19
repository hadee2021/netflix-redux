import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#dc3545',
      light: blue[500],
      dark: '#2196f3'
    }
  },
})

export default theme