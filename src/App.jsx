import { Container, Grid, Typography } from '@mui/material'

function App() {
  

  /* 
  
      Esta app consumira datos de https://newsapi.org/ 
      La interfaz se realizara con Materia UI (MUI)
      Documentacion de MUI:
      https://mui.com/material-ui/react-container/
  
  */

  return (
    
      <Container>
        <header>
          <Typography
            align='center' marginY={5} component="h1" variant="h3"
          >
            Buscador de Noticias
          </Typography>
        </header>
      </Container>
  )
}

export default App
