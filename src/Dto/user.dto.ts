export interface UserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdDate: Date;
  readonly updatedDate: Date;
}
