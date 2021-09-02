import { app } from "@/firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Ref, ref } from "vue";

interface useSignupReturn {
  errorStatus: Ref<null | number>;
  errorMessage: Ref<null | string>;
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
}

const errorStatus = ref(null);
const errorMessage = ref(null);

const auth = getAuth(app);

const signup = async (email: string, password: string, displayName: string) => {
  errorStatus.value = null;
  errorMessage.value = null;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!response) {
      throw new Error("could not complete the signup");
    }

    await updateProfile(response.user, { displayName: displayName });
    errorStatus.value = null;
    errorMessage.value = null;
  } catch (error) {
    errorStatus.value = error.code;
    errorMessage.value = error.message;
  }
};

const useSignup = (): useSignupReturn => {
  return { errorStatus, errorMessage, signup };
};

export default useSignup;
