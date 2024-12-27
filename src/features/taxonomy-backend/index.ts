import axios from "axios";

const api = axios.create({
  baseURL: '/api'
});

export async function getRoundImage(config: {specificity: string, name: string}) {
  const res = await api.get(`/generate/${config.specificity}/${config.name}`);
  return res.data;
}

// there should be some kind of token auth security going into the headers here further down the line
export async function _checkAnswer(config: object, answer: string) {
  if(!answer) return;
  const res = await api.post(
    // auth headers should be in here somewhere.....
    '/check',
    { answer }
  );
  console.log(res.data.answer);
  return res.data;
}