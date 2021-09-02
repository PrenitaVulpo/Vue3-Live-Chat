import { app } from "@/firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { Ref, ref } from "vue";

interface useLoginReturn {
  errorStatus: Ref<null | number>;
  errorMessage: Ref<null | string>;
  login: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
}

const errorStatus = ref(null);
const errorMessage = ref(null);

const auth = getAuth(app);

const login = async (email: string, password: string) => {
  errorStatus.value = null;
  errorMessage.value = null;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) {
      throw new Error("could not complete the login");
    }

    errorStatus.value = null;
    errorMessage.value = null;

    return response;
  } catch (error) {
    errorStatus.value = error.code;
    errorMessage.value = error.message;
  }
};

const useLogin = (): useLoginReturn => {
  return { errorStatus, errorMessage, login };
};

export default useLogin;
