export class Movie {
    title: string;
    year: string;
    // released: string;
    runtime: string;
    genre: string;
    director: string;

    constructor(title: string, year: string, runtime: string, genre: string, director: string) {
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
    }
}
