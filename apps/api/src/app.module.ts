import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [PrismaModule, PokemonsModule],
})
export class AppModule {}
