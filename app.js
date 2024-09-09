function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log (campoPesquisa);

    //Se campo pesquisa for uma string vazia
    if (!campoPesquisa){
      section.innerHTML = "<p> Nada foi encontrado. Digite o nome de um país. </p>";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados e cria HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campo pesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
        //cria um novo elemento
        resultados += `<div class="item-resultado">
        <h2>
          <img src="${dado.image}" width="100px"><br>
          <a href="https://pt.wikipedia.org/wiki/Brasil" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <br>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>`;
      }
     
    }
  if (!resultados) {
    resultados = "<p> Nada foi encontrado. Digite o nome de um país.</p>"
  }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }