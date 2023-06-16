import { Link, Typography } from "@mui/joy";

import { CreditsContainer } from "./Container";

export const Credits = () => {
  return (
    <CreditsContainer>
      <Typography
        fontSize="sm"
        sx={theme => ({
          opacity: 0.7,
          ":hover": { opacity: 1 },
          ":not(:hover)": {
            "> span": {
              color: theme.palette.text.primary,
            },
            "> a": {
              color: theme.palette.text.primary,
            },
          },
          transition: "all .1s ease",
          "*": {
            transition: "all .1s ease",
          },
        })}
      >
        <Link>
          <Typography
            variant="outlined"
            fontSize="xs"
            sx={{
              boxShadow: "sm",
              fontFamily: "code",
              bgcolor: "background.level1",
            }}
          >
            chatbot-scaffold
          </Typography>
        </Link>{" "}
        made with{" "}
        <Typography
          component={"span"}
          sx={{
            color: "danger.500",
          }}
        >
          ♥️
        </Typography>{" "}
        by <Link>Cole Gawin</Link>
      </Typography>
    </CreditsContainer>
  );
};
