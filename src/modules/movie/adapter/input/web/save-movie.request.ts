import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

import { SaveMovieCommand } from '../../../application/ports/input/save-movie.command';

export class SaveMovieRequest {
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

  public toCommand(): SaveMovieCommand {
    return new SaveMovieCommand(
      this.name,
      this.genre,
      this.studio,
      this.director,
      this.rate,
    );
  }
}
