import { createContext, useContext, useState } from "react";
import { HashLoader } from "react-spinners";
import { Box } from "@mui/material";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 9999,
          }}
        >
          <HashLoader color="#17B8A6" />
        </Box>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
