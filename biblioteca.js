const livros = [];
let id = -1;

function menu(){
   
    return '------ MENU ------' +
    '\n1. Adicionar Livro'+
    '\n2. Listar Livros'+
    '\n3. Buscar pelo título'+
    '\n4. Editar Livro'+
    '\n5. Alterar Disponibilidade'+
    '\n6. Remover Livro'
}

function adicionarLivros(titulo, autor, anoDePublicacao, genero){
    id++;
    const livro = {
    id,
    titulo: titulo,
    autor: autor,
    anoDePublicacao : anoDePublicacao,
    genero : genero,
    disponibilidade : "DISPONÍVEL"
    };

    livros.push(livro);
}

function listarLivros(){
    return livros;
};

function buscarLivroPeloTitulo(titulo){

    const livro = livros.find(livro => livro.titulo === titulo);

    if (livro){
        return livros;
    }

}


function editarLivros(titulo, novoTitulo, novoAutor, novoAnoDePublicacao, novoGenero){

    const livro = livros.find(livro => livro.titulo === titulo);
    if (livro){
        livro.titulo = novoTitulo,
        livro.autor = novoAutor,
        livro.anoDePublicacao = novoAnoDePublicacao,
        livro.genero = novoGenero
        console.log ("LIVRO EDITADO");
    }else{
        console.log ("LIVRO NÃO ENCONTRAODO");
    }

}

function alterarDisponibilidade(id, disponibilidade){
const livro = livros.find(livro =>livro.id === id);

if (livro){
    livro.disponibilidade = disponibilidade;
}

}

function removerLivro(id){
const livro = livros.find(livro => livro.id === id);

if (livro){
    livros.splice(id, id);
}

}

function filtrarLivros(){

}

function ordenarLivrosPorAnoDePublicacao(){

}

function listarLivrosDisponiveis(){

}

function registrarEmprestimo(){

}

function gerarRelatorioDeEmprestimo(){

}

module.exports = {
    menu,
    adicionarLivros,
    listarLivros,
    buscarLivroPeloTitulo,
    editarLivros,
    alterarDisponibilidade,
    removerLivro
}