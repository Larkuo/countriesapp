export interface CountryDetailsProps{
    altSpellings?: string[];
    area?: number;
    borders: string[];
    capital: string[];
    capitalInfo?: {
        latlng: number[]
    };
    car?: {
        side: string
        signs: string[]
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms?: {
        png: string;
        svg: string;
    };
    continents?: string[];
    currencies: object;
    demonyms?: {
        eng: {f: string; m: string}
        fra: {f: string; m: string}
    },
    fifa?: string;
    flag?: string;
    flags: {
        png: string;
        svg: string;
    };
    gini?: object;
    idd?: { 
        root: string
        suffixes: string[] 
    };
    independent?: boolean;
    landlocked?: boolean;
    languages: object;
    latlng?: number[];
    maps?: {
        googleMaps: string;
        openStreetMaps: string;
    };
    name: {
        common: string;
        nativeName: object;
        official: string;
    };
    population: number;
    region: string;
    startOfWeek?: string;
    status?: string;
    subregion: string;
    timezones?: string[];
    tld: string[];
    translations?: object;
    unMember?: boolean;
}

export interface BorderCountryProps{
    code: string;
    name: string;
}