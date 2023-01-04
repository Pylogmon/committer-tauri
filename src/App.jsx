import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Switch, FormControlLabel, Box } from "@mui/material";
import { appWindow, LogicalSize } from "@tauri-apps/api/window";
import { useRoutes } from "react-router-dom";
import SideBar from "./components/SideBar";
import routes from "./Routes";
import DarkTheme from './Themes/DarkTheme';
import LightTheme from './Themes/LightTheme';

export default function App() {
  appWindow.setMinSize(new LogicalSize(500, 500))
  appWindow.setSize(new LogicalSize(910, 590))
  const [mode, setMode] = useState(true)
  const page = useRoutes(routes);

  return (
    <ThemeProvider theme={mode ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Grid sx={{ height: '100vh' }} container>
        <Grid item xs='auto' container direction={'column'}>
          <Grid item xs>
            <SideBar />
          </Grid>
          <Grid xsOffset="auto">
            <Box sx={{ padding: "0 8px" }}>
              <FormControlLabel sx={{ padding: 0 }} control={<Switch onChange={e => setMode(e.target.checked)} defaultChecked />} label="黑暗模式" />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs container>
          {page}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
