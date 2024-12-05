export class UpdateMovieByIdCommand {
  constructor(
    public readonly name: string,
    public readonly genre: string,
    public readonly studio: string,
    public readonly director: string,
    public readonly rate: number,
  ) {}
}
