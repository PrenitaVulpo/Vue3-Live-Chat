import { Ref, ref } from "vue";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/firebase/config";

interface getUserInterface {
  authStateStatus: () => Promise<void>;
  errorStatus: Ref<null | number>;
  errorMessage: Ref<null | string>;
  currentUser: Ref<null | User>;
  getCurrentUser: () => Promise<void>;
}

const errorStatus = ref(null);
const errorMessage = ref(null);
const auth = getAuth(app);
const currentUser = ref<User | null>(null);

const authStateStatus = async () => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in");
      currentUser.value = user;
    } else {
      console.log("user is logged out");
    }
  });
};

const getCurrentUser = async () => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in");
      currentUser.value = user;
      return currentUser;
    } else {
      console.log("user is logged out");
    }
  });
};

const getUser = (): getUserInterface => {
  return {
    authStateStatus,
    errorStatus,
    errorMessage,
    currentUser,
    getCurrentUser,
  };
};

export default getUser;
