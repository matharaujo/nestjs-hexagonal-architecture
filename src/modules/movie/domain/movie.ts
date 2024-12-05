export class Movie {
  public id?: number;
  public name: string;
  public genre: string;
  public studio: string;
  public director: string;
  public rate: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(
    name: string,
    genre: string,
    studio: string,
    director: string,
    rate: number,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.studio = studio;
    this.director = director;
    this.rate = rate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
