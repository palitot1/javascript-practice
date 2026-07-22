let produtos = [];

function cadastrarProduto(nome, preco, estoque){
    let produto = {
        nome: nome,
        preco: preco,
        estoque: estoque
    }

    produtos.push(produto);
    console.log(`Produto ${nome} cadastrado com sucesso!`);
}

function listarProdutos(){
    produtos.forEach((produto) => {
        console.log(`${produto.nome} - R$ ${produto.preco} - estoque: ${produto.estoque}`)
    })
}

function buscarProduto(nome){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome === nome){
            console.log(`Produto encontrado!
                
nome: ${produtos[i].nome}
preco: ${produtos[i].preco}
estoque: ${produtos[i].estoque}`);
return;
        }
    }
    console.log("Produto não encontrado")

}

cadastrarProduto("Notebook", 3500, 5);
cadastrarProduto("Mouse", 120, 20);
cadastrarProduto("Teclado", 250, 0);
listarProdutos()
buscarProduto("Notebook")