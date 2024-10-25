'use client'

// import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <AppBar
              position="static"
              sx={{ backgroundColor: "#fff", boxShadow: "none" }}
            >
              <Toolbar>
                <Typography variant="h6" sx={{ color: "#FFB703" }}>
                  HedgeProp
                </Typography>
              </Toolbar>
            </AppBar>
              {children}
           
            <Box
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "40px 20px",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                © 2024 HedgeProp. All rights reserved.
              </Typography>
            </Box>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
