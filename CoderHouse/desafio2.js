// Criando o objeto Livro
function Livro(titulo, autor, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
    this.emprestar = function() {
      if (this.disponivel) {
        this.disponivel = false;
        console.log(`O livro "${this.titulo}" de ${this.autor} foi emprestado.`);
      } else {
        console.log(`O livro "${this.titulo}" de ${this.autor} não está disponível no momento.`);
      }
    };
    this.devolver = function() {
      this.disponivel = true;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi devolvido.`);
    };
  }
  
  // Criando um novo livro
  const livro1 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", true);
  
  // Chamando os métodos do livro
  livro1.emprestar(); // Output: O livro "Harry Potter e a Pedra Filosofal" de J.K. Rowling foi emprestado.
  livro1.devolver(); // Output: O livro "Harry Potter e a Pedra Filosofal" de J.K. Rowling foi devolvido.