import { create ,StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface AuthStore {
    user: string | null;
    setUser: (user: string | null) => void;
}

// Definimos los tipos para la configuración de persistencia
type MyPersist = (
    config: StateCreator<AuthStore>,
    options: PersistOptions<AuthStore>
) => StateCreator<AuthStore>;

// Utilizamos la configuración de persistencia en el store
export const useAuthStore = create<AuthStore>(
    (persist as MyPersist)(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
        }),
        {
            name: "auth-storage",
        }
    )
);

//get a user from the store
export const getUser = () => useAuthStore.getState().user;