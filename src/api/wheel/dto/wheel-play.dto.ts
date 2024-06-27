import { IsString, MinLength } from 'class-validator';
export class Play {
  @IsString({
    message: 'National ID must be a string',
  })
  @MinLength(12, {
    message: 'Min lenght is 12',
  })
  national_id: string;
}
