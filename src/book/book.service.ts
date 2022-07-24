import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDTO): Promise<BookDTO | Error> {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExists) {
      return new Error('Book already exists');
    }

    const book = await this.prisma.book.create({
      data,
    });

    return book;
  }

  async update(
    id: string,
    data: { title?: string; description?: string; bar_code?: string },
  ) {
    const searchBok = await this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });

    if (!searchBok) {
      return new Error('Book does not exists!');
    }

    const bookUpdated = await this.prisma.book.update({
      data: data,
      where: {
        id: id,
      },
    });

    return bookUpdated;
  }

  async findAll(): Promise<BookDTO[] | Error> {
    const books = await this.prisma.book.findMany();

    if (!books) {
      return new Error('Does not exists books');
    }

    return books;
  }

  async findByQuery(query: {
    id?: string;
    bar_code?: string;
  }): Promise<BookDTO | Error> {
    if (!(query.id || query.bar_code)) {
      return new Error('Is necessary an identification');
    }

    const bookExists = await this.prisma.book.findUnique({
      where: {
        id: query.id,
        bar_code: query.bar_code,
      },
    });

    if (!bookExists) {
      return new Error('Book does not exists!');
    }

    return bookExists;
  }

  async deleteBook(id: string): Promise<BookDTO | Error> {
    const book = await this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });

    if (!book) {
      return new Error('Book does not exists!');
    }

    const deletedBook = await this.prisma.book.delete({
      where: {
        id: id,
      },
    });

    return deletedBook;
  }
}
