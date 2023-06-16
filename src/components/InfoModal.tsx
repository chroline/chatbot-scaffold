import { Modal, ModalDialog, Typography } from "@mui/joy";
import { Transition } from "react-transition-group";
import { create } from "zustand";

interface InfoModalState {
  isOpen: boolean;
  toggle: () => void;
}

export const useInfoModalState = create<InfoModalState>(set => ({
  isOpen: false,
  toggle() {
    set(state => ({ ...state, isOpen: !state.isOpen }));
  },
}));

export const InfoModal = () => {
  const { isOpen, toggle } = useInfoModalState();

  return (
    <Transition in={isOpen} timeout={200}>
      {(state: string) => (
        <Modal
          keepMounted
          onClose={toggle}
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
              Info
            </Typography>
            <Typography id="api-key-modal-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </ModalDialog>
        </Modal>
      )}
    </Transition>
  );
};
