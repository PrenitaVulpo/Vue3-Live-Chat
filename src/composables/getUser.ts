import { Ref, ref } from "vue";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/firebase/config";

interface getUserInterface {
  errorStatus: Ref<null | number>;
  errorMessage: Ref<null | string>;
  currentUser: Ref<null | User>;
}

const errorStatus = ref(null);
const errorMessage = ref(null);
const auth = getAuth(app);
const currentUser = ref<User | null>(auth.currentUser);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in");
    currentUser.value = user;
  } else {
    console.log("user is logged out");
  }
});

const getUser = (): getUserInterface => {
  return {
    errorStatus,
    errorMessage,
    currentUser,
  };
};

export default getUser;
