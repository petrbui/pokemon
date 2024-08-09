import {
  applyDecorators,
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

export type PaginationQueryProps = {
  page?: number;
  pageSize?: number;
};

export function ApiPaginationQuery() {
  return applyDecorators(
    ApiQuery({
      name: 'page',
      required: false,
      type: Number,
      description: 'Page number',
      example: 1,
    }),
    ApiQuery({
      name: 'pageSize',
      required: false,
      type: Number,
      description: 'Page size',
      example: 10,
    }),
    ApiResponse({
      status: 400,
      description: 'Invalid query parameters',
    }),
  );
}

export const ValidatePaginationQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { page, pageSize } = request.query;

    if (page === 0) {
      throw new BadRequestException('Page number must be greater than 0');
    }
    if (pageSize === 0) {
      throw new BadRequestException('pageSize number must be greater than 0');
    }

    if (page && isNaN(Number(page))) {
      throw new BadRequestException('Page must be a number');
    }

    if (pageSize && isNaN(Number(pageSize))) {
      throw new BadRequestException('Page size must be a number');
    }

    return { page: Number(page), pageSize: Number(pageSize) };
  },
);
