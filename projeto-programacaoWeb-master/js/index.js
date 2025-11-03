document.getElementById("botao_submit").addEventListener("click", function(){
    var descricao_tarefa = document.getElementById("descricao-tarefa").value;
    var categoria_tarefa = document.getElementById("cat_tarefa").value;
    var importancia_tarefa = document.getElementById("importancia-tarefa").value;

    let template = document.getElementById("tarefas_a_fazer");

    let nova_tarefa = template.cloneNode(true);
    nova_tarefa.classList.remove("hide");
    nova_tarefa.removeAttribute("class");

    nova_tarefa.querySelector(".descricao_tarefa_afazer").textContent = descricao_tarefa;
    nova_tarefa.querySelector(".categoria_tarefa_afazer").textContent = categoria_tarefa;
    nova_tarefa.querySelector(".importancia_tarefa_afazer").textContent = importancia_tarefa;

    let btn_deletar = nova_tarefa.querySelector(".delete");
    btn_deletar.addEventListener("click", function(){
    nova_tarefa.remove();
    });

    document.getElementById("tarefas").appendChild(nova_tarefa);   

    document.getElementById("descricao-tarefa").value = "";
    document.getElementById("cat_tarefa").value = "";
    document.getElementById("importancia-tarefa").value = "";

});


let btn_deletar = nova_tarefa.querySelector(".delete");
btn_deletar.addEventListener("click", function(){
    nova_tarefa.remove();
});