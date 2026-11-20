import { useContext, useEffect, useState } from "react";
import "./App.css";
import Modal from "react-modal";
import axios from "axios";
import { PetContext } from "./context/pet-context";

const customStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative",
    inset: "auto",
    width: "90%",
    maxWidth: "500px",
    maxHeight: "85vh",
    overflow: "auto",
    border: "none",
    borderRadius: "12px",
    padding: "24px",
    backgroundColor: "#ffffff",
  },
};

export interface PetItem {
  description: string;
  title: string;
  url: string;
  created: string;
}
function App() {
  const context = useContext(PetContext);
  const pets = context?.pets;
  const [dialog, setDialog] = useState<{
    title: string | undefined;
    bool: boolean;
  }>({ title: undefined, bool: false });

  function closeModal() {
    setDialog({ title: undefined, bool: false });
  }

  return (
    <div className="bg-green-50">
      <p className="text-green-800 text-xl font-bold">PETS</p>

      <div className="p-5">
        {pets?.map((each: PetItem) => {
          return (
            <>
              <div
                key={each.created}
                onClick={() => setDialog({ title: each.title, bool: true })}
                className="my-4 w-full"
              >
                <img src={each.url} alt={each.title} className="h-150 w-150" />
                <p className="text-green-600 font-bold">{each.title}</p>
                <p className="text-sm font-normal">{each.description}</p>
              </div>
              {dialog.bool && (
                <Modal
                  isOpen={dialog.bool}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div className="w-full">
                    <img
                      src={each?.url}
                      alt={each.title}
                      className="h-100 w-100"
                    />
                    <p className="text-xl font-bold">{each.title}</p>
                    <p className="text-md font-normal">{each.description}</p>
                  </div>
                </Modal>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
// https://eulerity-hackathon.appspot.com/pets
