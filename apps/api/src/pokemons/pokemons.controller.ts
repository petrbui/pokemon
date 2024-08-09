import { Controller, Get } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import {
  ApiPaginationQuery,
  PaginationQueryProps,
  ValidatePaginationQuery,
} from '../decorators/ApiPaginationQuery';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemons')
@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  @ApiPaginationQuery()
  findAll(@ValidatePaginationQuery() paginationQuery: PaginationQueryProps) {
    const { page, pageSize } = paginationQuery;
    return this.pokemonsService.findAll(page, pageSize);
  }
}
