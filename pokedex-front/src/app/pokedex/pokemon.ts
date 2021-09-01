export interface Pokemons {
    count:      number,
    next:       string,
    previous:   string | null,
    results:    Pokemon[]
}

export interface Pokemon {
    url:        string;
    name:       string;
}
