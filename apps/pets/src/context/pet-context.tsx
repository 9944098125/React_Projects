import { createContext, useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import type { PetItem } from "../App";

type PetContextType = {
  pets: PetItem[];
};

export const PetContext = createContext<PetContextType | undefined>(undefined);

export function PetProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<PetItem[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      const data = await axios.get(
        "https://eulerity-hackathon.appspot.com/pets",
      );
      console.log(data);
      setPets(data?.data);
    };

    fetchPets();
  }, []);

  return <PetContext.Provider value={{ pets }}>{children}</PetContext.Provider>;
}
