export interface Pokemons {
    count:      number,
    next:       string,
    previous:   string | null,
    results:    Pokemon[]
}

export interface Pokemon {
    id:         number;
    url:        string;
    name:       string;
}