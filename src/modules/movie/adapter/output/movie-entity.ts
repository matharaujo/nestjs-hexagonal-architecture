import { IsNotEmpty } from 'class-validator';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class MovieEntity extends Model<MovieEntity> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  public name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  public genre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  public studio: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  public director: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @IsNotEmpty()
  public rate: number;
}
