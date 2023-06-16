import { useEffect, useState } from "react";

import { Button, FormControl, Input, Link, Modal, ModalDialog, Stack, Typography } from "@mui/joy";
import { Transition } from "react-transition-group";

import { useApiKeyStore } from "~/core/store";

export const ApiKeyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { apiKey, setApiKey } = useApiKeyStore();

  useEffect(() => {
    if (!apiKey) setIsOpen(true);
    else setIsOpen(false);
  }, [apiKey, setIsOpen]);

  return (
    <Transition in={isOpen} timeout={200}>
      {(state: string) => (
        <Modal
          keepMounted
          open={!["exited", "exiting"].includes(state)}
          slotProps={{
            backdrop: {
              sx: {
                opacity: 0,
                backdropFilter: "none",
                transition: `opacity 200ms, backdrop-filter 200ms`,
                ...{
                  entering: { opacity: 1, backdropFilter: "blur(8px)" },
                  entered: { opacity: 1, backdropFilter: "blur(8px)" },
                }[state],
              },
            },
          }}
          sx={{
            visibility: state === "exited" ? "hidden" : "visible",
          }}
        >
          <ModalDialog
            aria-labelledby="api-key-modal-title"
            aria-describedby="api-key-modal-description"
            sx={{
              opacity: 0,
              transition: `opacity 200ms`,
              ...{
                entering: { opacity: 1 },
                entered: { opacity: 1 },
              }[state],
            }}
          >
            <Typography id="api-key-modal-title" component="h2">
              Enter your OpenAI API key
            </Typography>
            <Typography id="api-key-modal-description" textColor="text.tertiary">
              Grab yours as{" "}
              <Link href="https://platform.openai.com/account/api-keys">
                https://platform.openai.com/account/api-keys
              </Link>
            </Typography>
            <form
              onSubmit={event => {
                event.preventDefault();
                const formData = new FormData(event.target as HTMLFormElement);
                const apiKey = formData.get("api-key");
                setApiKey((apiKey || "").toString());
                setIsOpen(false);
              }}
            >
              <Stack spacing={2}>
                <FormControl>
                  <Input placeholder="OpenAI API key" name="api-key" required />
                </FormControl>
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      )}
    </Transition>
  );
};
