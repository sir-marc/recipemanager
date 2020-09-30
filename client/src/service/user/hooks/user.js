import { useAsyncStorage } from "../../utils/hooks/async-storage";
import generateId from "../../utils/helpers/id";

const USER_KEY = "recipe-manager/user";

export const useStoredUser = () => {
  const [getData, setData] = useAsyncStorage();
  const getUser = async () => {
    const user = await getData(USER_KEY);

    if (user) {
      return user;
    }

    const id = generateId("user-");
    setData(USER_KEY, id);
    return id;
  };

  return [getUser];
};
