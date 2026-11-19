import { useEffect, useState } from "react";
import "./App.css";

export interface PetItem {
  description: string;
  title: string;
  url: string;
  created: string;
}
function App() {
  const [pets, setPets] = useState<PetItem[]>([]);
  const [dialog, setDialog] = useState<{
    title: string | undefined;
    bool: boolean;
  }>({ title: undefined, bool: false });

  useEffect(() => {
    const fetchPets = async () => {
      const data = await fetch("https://eulerity-hackathon.appspot.com/pets");
      const finalData = await data.json();
      console.log(finalData);
      setPets(finalData);
    };

    fetchPets();
  }, []);

  return (
    <div className="bg-green-50">
      <p className="text-green-800 text-xl font-bold">PETS</p>

      <div className="p-5">
        {pets?.map((each: PetItem) => {
          return (
            <>
              <div
                onClick={() => setDialog({ title: each.title, bool: true })}
                className="my-4 w-full"
              >
                <img src={each.url} alt={each.title} />
                <p className="text-green-600 font-bold">{each.title}</p>
                <p className="text-sm font-normal">{each.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
// https://eulerity-hackathon.appspot.com/pets
