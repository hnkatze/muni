

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "./authStoreProvider";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);
const router = useRouter();
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user.displayName || userCredential.user.email);
      toast.success("Login success");
      router.push("/admin/contacto");
    } catch (err : any) {
      setError(err.message);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useAuth;
