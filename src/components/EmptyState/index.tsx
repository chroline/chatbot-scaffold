import { QuestionAnswerRounded } from "@mui/icons-material";

import { EmptyStateContainer } from "./Container";

export const EmptyState = () => (
  <EmptyStateContainer>
    <QuestionAnswerRounded sx={theme => ({ width: theme.spacing(12), height: theme.spacing(12) })} />
  </EmptyStateContainer>
);
