import type { JokeResponse, SearchResponse } from "@/types/types";

export const searchRequest = async (searchTerm: string, requestedPage: number): Promise<SearchResponse|null> => {
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}&page=${requestedPage}&limit=5`, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    },
  }).catch(error => console.error(error))
  
  if (response!.status !== 200) {
    return null
  }
  
  return await response!.json() as SearchResponse
}

export const randomJokeRequest = async (): Promise<JokeResponse|null> => {
  const response = await fetch(`https://icanhazdadjoke.com/`, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    },
  }).catch(error => console.error(error))
  
  if (response!.status !== 200) {
    return null
  }
  
  return await response!.json() as JokeResponse
}
