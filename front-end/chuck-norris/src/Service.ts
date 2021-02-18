import axios from "axios";
import { Joke } from "./App";

const API = `http://api.icndb.com/jokes/random`;

const getJoke = async (number: string, firstName: string, lastName: string) => {
  const firstNameOption = firstName === "" ? "" : `firstName=${firstName}`;
  const lastNameOption = lastName === "" ? "" : `lastName=${lastName}`;
  const options =
    firstNameOption.length > 0 && lastNameOption.length > 0
      ? `?${firstNameOption}&${lastNameOption}`
      : `?${firstNameOption}${lastNameOption}`;
  const response = await axios.get(`${API}/${number}/${options}`);
  let { value } = response.data;
  value = value.map((j: Joke) => {
    return {
      ...j,
      joke: j.joke.replace(/&quot;/gi, `"`)
    };
  });
  return value;
};

export const service = {
  getJoke,
  API
};

