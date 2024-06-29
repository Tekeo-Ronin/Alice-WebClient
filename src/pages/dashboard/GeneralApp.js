import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 740px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8F4FA"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
