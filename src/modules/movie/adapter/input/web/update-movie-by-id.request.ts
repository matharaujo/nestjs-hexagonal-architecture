import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

import { UpdateMovieByIdCommand } from '../../../application/ports/input/update-movie-by-id.command';

export class UpdateMovieByIdRequest {
  @Expose()
  @IsNotEmpty()
  public readonly name: string;

  @Expose()
  @IsNotEmpty()
  public readonly genre: string;

  @Expose()
  @IsNotEmpty()
  public readonly studio: string;

  @Expose()
  @IsNotEmpty()
  public readonly director: string;

  @Expose()
  @IsNotEmpty()
  public readonly rate: number;

  public toCommand(): UpdateMovieByIdCommand {
    return new UpdateMovieByIdCommand(
      this.name,
      this.genre,
      this.studio,
      this.director,
      this.rate,
    );
  }
}
