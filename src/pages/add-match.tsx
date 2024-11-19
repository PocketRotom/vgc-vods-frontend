import React from "react";
import { useState } from "react";
import useEvents from "../hooks/use-events";
import { ComboboxComponent } from "../components/combobox";
import useNewMatchForm from "../hooks/use-new-match-form";
import usePlayers from "../hooks/use-player";

export const AddMatchPage: React.FC = function AddMatchPage() {
  const event = useNewMatchForm((state) => state.event);
  const setEvent = useNewMatchForm((state) => state.setEvent);

  const player1 = useNewMatchForm((state) => state.player1);
  const setPlayer1 = useNewMatchForm((state) => state.setPlayer1);
  const player2 = useNewMatchForm((state) => state.player2);
  const setPlayer2 = useNewMatchForm((state) => state.setPlayer2);

  const events = useEvents((state) => state.events);
  const players = usePlayers((state) => state.players);

  function addNewEvent() {
    alert("Add new Event");
  }

  function addNewPlayer() {
    alert("Add new Player");
  }

  return (
    <div className="container mx-auto my-auto">
      <div>
        <h3 className="text-2xl mt-4 font-bold text-gray-800">
          Please Select a tournament
        </h3>
        <ComboboxComponent
          array={events}
          selected={event}
          setSelected={setEvent}
          lastOption={{ id: -1, name: "Add new Event" }}
          lastOptionFunction={addNewEvent}
          placeholder="Please select a tournament"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Player 1</h3>
          <ComboboxComponent
            array={players}
            selected={player1}
            setSelected={setPlayer1}
            lastOption={{ id: -1, name: "Add new Player" }}
            lastOptionFunction={addNewPlayer}
            placeholder="Please select a player"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Player 2</h3>
          <ComboboxComponent
            array={players}
            selected={player2}
            setSelected={setPlayer2}
            lastOption={{ id: -1, name: "Add new Player" }}
            lastOptionFunction={addNewPlayer}
            placeholder="Please select a player"
          />
        </div>
      </div>
    </div>
  );
};
