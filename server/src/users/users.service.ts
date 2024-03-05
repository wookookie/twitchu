import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  createUser(dto: CreateUserDto) {
    // TO-DO
    console.log(dto.email, dto.password);
    return { result: "ok" };
  }
}
