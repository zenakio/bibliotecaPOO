import { Injectable } from '@nestjs/common';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  //escapsulamento 
  // Pilar POO: Encapsulamento, Herança, Polimorfismo
  private livros: Livro[] = [];


  create(titulo: string, autor: string, qtd_paginas: number) {
    //Instanciar novo objeto do livro
    const novoLivro = new Livro();
    novoLivro.id = this.livros.length + 1;
    novoLivro.titulo = titulo;
    novoLivro.autor = autor;
    novoLivro.qtd_paginas = qtd_paginas;
    this.livros.push(novoLivro);
    return novoLivro;   
    return 'This action adds a new livro'; 
  }

  findAll() {
    return this.livros;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}
