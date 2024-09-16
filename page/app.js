function pesquisar() {
    let conteudo = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase(); // Converter para letras minúsculas
    
    if (campoPesquisa == "") {
        conteudo.innerHTML = "<p>Nothing found! Please fill in the empty field.</p>";
        return;
    }
    
    let resultados = "";
    let tags = "";
  
    for (let dado of exercicio) {
      // Converter nome, descrição para letras minúsculas
      nome = dado.exerciseName.toLowerCase();
      descricao = dado.description.toLowerCase();

    //  tags = dado.tags.toLowerCase(); 
  
      // Verificar se o campo de pesquisa está incluído no nome, descrição ou tags
      if (
          nome.includes(campoPesquisa) || 
          descricao.includes(campoPesquisa) 
         // tagsMinusculas.includes(campoPesquisa)
         ) {
            resultados += `
            <div class="exercicio-card">
                <h2>${dado.exerciseName}</h2>
                <p><strong>Descrição:</strong> ${dado.description}</p>
                <p><strong>Tipo:</strong> ${dado.exerciseType}</p>
                <p><strong>Nível de Dificuldade:</strong> ${dado.difficultyLevel}</p>
                <p><strong>Equipamento:</strong> ${dado.equipment.join(', ')}</p>
                <p><strong>Benefícios:</strong> ${dado.benefits.join(', ')}</p>
                <p><strong>Músculos Alvo:</strong> ${dado.targetMuscles.join(', ')}</p>
                <p><strong>Séries e Repetições:</strong> ${dado.setsAndReps}</p>
            </div>
        `;
      }
    }
  
    // Mostrar resultados ou mensagem de "não encontrado"
    if (!resultados) {
        conteudo.innerHTML = "<p>No results found for your search.</p>";
    } else {
        conteudo.innerHTML = resultados;
    }
  }
  

