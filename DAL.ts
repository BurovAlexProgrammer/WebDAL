export interface genreDTO {
    id: number,
    name: string
}

export interface filmDTO {
    title: string;
    year: number;
    description: string;
}

export interface localeDTO {
    title: string;
    locale: string;
    flagURL?: string;
}