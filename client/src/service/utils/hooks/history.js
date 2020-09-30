import { useHistory } from "react-router-dom";

export const useBack = () => {
  const history = useHistory();
  return history.goBack;
};
