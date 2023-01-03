import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Switch, FormControlLabel, Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import SideBar from "./components/SideBar";
import routes from "./Routes";
import { appWindow, LogicalSize } from "@tauri-apps/api/window";

export default function App() {
  appWindow.setMinSize(new LogicalSize(600, 500))
  const [mode, setMode] = useState(true)
  const page = useRoutes(routes);
  const darkTheme = createTheme({
    palette: { mode: mode ? 'dark' : 'light' }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid sx={{ height: '100vh' }} container spacing={0}>
        <Grid item sx={{ width: '150px' }}>
          <SideBar />
          <Box sx={{ position: 'absolute', padding: "0 8px", bottom: 0 }}>
            <FormControlLabel sx={{ padding: 0 }} control={<Switch onChange={e => setMode(e.target.checked)} defaultChecked />} label="黑暗模式" />
          </Box>
        </Grid>
        <Grid item xs>
          {page}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
