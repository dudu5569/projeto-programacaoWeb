document.getElementById("botao_submit").addEventListener("click", function(){
    var descricao_tarefa = document.getElementById("descricao-tarefa").value;
    var categoria_tarefa = document.getElementById("cat_tarefa").value;
    var importancia_tarefa = document.getElementById("importancia-tarefa").value;
    var responsavel_tarefa = document.getElementById("responsavel-tarefa").value;

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    let novaTarefa = {
        descricao: descricao_tarefa,
        categoria: categoria_tarefa,
        importancia: importancia_tarefa,
        responsavel: responsavel_tarefa
    };

    tarefas.push(novaTarefa);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    

    let template = document.getElementById("tarefas_a_fazer");

    let nova_tarefa = template.cloneNode(true);
    nova_tarefa.classList.remove("hide");
    nova_tarefa.removeAttribute("class");

    nova_tarefa.querySelector(".descricao_tarefa_afazer").textContent = descricao_tarefa;
    nova_tarefa.querySelector(".categoria_tarefa_afazer").textContent = categoria_tarefa;
    nova_tarefa.querySelector(".importancia_tarefa_afazer").textContent = importancia_tarefa;
    nova_tarefa.querySelector(".responsavel_tarefa_afazer").textContent = responsavel_tarefa;


    let btn_deletar = nova_tarefa.querySelector(".delete");
    btn_deletar.addEventListener("click", function(){
    nova_tarefa.remove();
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas = tarefas.filter(t => t.descricao !== nova_tarefa.querySelector(".descricao_tarefa_afazer").textContent);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    });

    document.getElementById("tarefas").appendChild(nova_tarefa);   

    document.getElementById("responsavel-tarefa").value = "";
    document.getElementById("descricao-tarefa").value = "";
    document.getElementById("cat_tarefa").value = "";
    document.getElementById("importancia-tarefa").value = "";

    

});


