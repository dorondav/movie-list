export class Movie {
    serialNumber: number;
    title: string;
    year: Date;
    runtime: number;
    genre: string;
    director: string;

    constructor(serialNumber: number, title: string, year: Date, runtime: number, genre: string, director: string) {
        this.serialNumber = serialNumber;
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
    }
}
