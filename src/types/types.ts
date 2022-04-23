export interface SearchResponse {
  current_page: number;
  next_page: number;
  previous_page: number;
  limit: number;
  results: Joke[];
  status: number;
  total_jokes: number;
  total_pages: number;
}

export interface Joke {
  id: string;
  joke: string;
}

export interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}

export interface SearchRequestMeta {
  searchTerm: string;
  requestedPage: number;
}
