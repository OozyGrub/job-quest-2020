import React, { useEffect, useState } from "react";
import "./App.css";
import { service } from "./Service";

type Name = {
  firstName: string;
  lastName: string;
};

export type Joke = {
  id: number;
  joke: string;
  categories: string[];
};

function App() {
  const [name, setName] = useState<Name>({ firstName: "", lastName: "" });
  const [jokeNumber, setJokeNumber] = useState<number>(1);
  const [jokeArr, setJokeArr] = useState<Joke[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const getJoke = async () => {
    if (jokeNumber !== -1) {
      window.speechSynthesis.cancel();
      const data = await service.getJoke(
        `${jokeNumber}`,
        name.firstName,
        name.lastName
      );
      setJokeArr(data);
      if (soundEnabled) {
        readText(data);
      }
    } else {
      alert("jokeNumber must be integer");
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  const readText = (data: Joke[]) => {
    window.speechSynthesis.resume();
    for (const joke of data) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = joke.joke;
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Joke-div">
          {jokeArr.map((joke) => (
            <p key={joke.id}>{joke.joke}</p>
          ))}
        </div>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => {
              setName({ ...name, firstName: e.target.value });
            }}></input>
          <input
            placeholder="Last name"
            onChange={(e) => {
              setName({ ...name, lastName: e.target.value });
            }}></input>
          <input
            placeholder="number of joke"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === "") {
                setJokeNumber(1);
              } else if (
                e.target.value.match(/^\d+$/g) &&
                parseInt(e.target.value) >= 0
              ) {
                setJokeNumber(parseInt(e.target.value));
              } else {
                setJokeNumber(-1);
              }
            }}></input>
          <button onClick={getJoke}>Get joke!</button>

          <h6>{service.API}</h6>
        </div>
        <form>
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={() => {
              if (soundEnabled) {
                window.speechSynthesis.cancel();
              }
              setSoundEnabled(!soundEnabled);
            }}
          />
          <label>sound</label>
        </form>
      </header>
    </div>
  );
}

export default App;
