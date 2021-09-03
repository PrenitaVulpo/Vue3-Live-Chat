import { app } from "@/firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { Ref, ref } from "vue";

interface useLogoutInterface {
  errorStatus: Ref<null | number>;
  errorMessage: Ref<null | string>;
  logout: () => Promise<void>;
}

const errorStatus = ref(null);
const errorMessage = ref(null);

const logout = async () => {
  errorStatus.value = null;
  errorMessage.value = null;

  const auth = getAuth(app);

  try {
    await signOut(auth);
  } catch (error) {
    errorStatus.value = error.code;
    errorMessage.value = error.message;

    console.log(errorStatus.value);
    console.log(errorMessage.value);
  }
};

const useLogout = (): useLogoutInterface => {
  return { errorStatus, errorMessage, logout };
};

export default useLogout;
