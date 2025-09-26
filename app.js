const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pesquisa = require('./biblioteca');

console.log (pesquisa.menu());
rl.question("\n > " , function (resposta){

    let escolha = parseInt(resposta);

    switch(escolha){

        case 1 :
        rl.question ("TÍtulo: " , function(titulo){
        rl.question("Autor: " , function (autor){
        rl.question ("Ano de publicação: " , function (anoPublicacao){
        rl.question ("Gênero: " , function (genero){ 
        

            pesquisa.adicionarLivros(titulo, autor, anoPublicacao, genero)
       
        })    
        })    
        })    
        })
      rl.close();

        break;

        case 2 :
            console.log (pesquisa.listarLivros());
            break;

        case 3:
            rl.question("Título do livro para pesquisa: " , function (livro){
                pesquisa.buscarLivroPeloTitulo(livro);
            })
            rl.close();
            break;

        case 4:

            rl.question("Título do livro que deseja editar: " , function (livro){
            rl.question("Novo título: " , function(novotitulo){
            rl.question("Novo autor: " , function (novoAutor){
            rl.question("Novo ano de publicação: " , function (novoAnoDePublicacao){
            rl.question("Novo gênero: " , function (novoGenero){

                    pesquisa.editarLivros(livro, novotitulo, novoAutor, novoAnoDePublicacao, novoGenero);

            })
            })    
            })
            })    
            })

            rl.close();
            break;

        case 5: 
            rl.question ("Insira o id do livro: " , function (id){
            rl.question ("Insira a nova disponibilidade (EMPRESTADO ou DISPONÍVEL): " , function (disponibilidade){

                const index = parseFloat(id);

                pesquisa.alterarDisponibilidade(id, disponibilidade);

            })    
            })

            rl.close();
            break;
       
        case 6:
            
        rl.question("ID do livro para a remoção: " , function(id){
            const index = parseInt(id);

            pesquisa.removerLivro(index);
        })
        }
rl.close();
    })