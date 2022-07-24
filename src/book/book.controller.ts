import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';

@Controller('api')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/book')
  async create(@Body() data: BookDTO) {
    const bookService = await this.bookService.create(data);

    if (bookService instanceof Error) {
      return bookService.message;
    }

    return bookService;
  }

  @Put('book/:id')
  async update(
    @Param('id') id: string,
    @Body() data: { title?: string; description?: string; bar_code?: string },
  ) {
    const bookService = await this.bookService.update(id, data);

    if (bookService instanceof Error) {
      return bookService.message;
    }

    return bookService;
  }

  @Get('/book')
  async findByQuery(@Query() query: { id: string; bar_code: string }) {
    console.log(query);
    const service = await this.bookService.findByQuery(query);

    if (service instanceof Error) {
      return service.message;
    }

    return service;
  }

  @Get('/books')
  async findAll() {
    const service = await this.bookService.findAll();

    if (service instanceof Error) {
      return service.message;
    }
    return service;
  }

  @Delete('book/:id')
  async deleteBook(@Param('id') id: string) {
    const bookService = await this.bookService.deleteBook(id);

    if (bookService instanceof Error) {
      return bookService.message;
    }

    return bookService;
  }
}
