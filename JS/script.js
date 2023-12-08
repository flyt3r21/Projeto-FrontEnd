// SCRIPT DA PAGE CARRINHO. MOSTRA EM SLIDE OS ITENS SIMBOLICAMENTE SELECIONADOS PARA COMPRA

var casinha = $("#casa")
var coleira = $("#coleira")
var brinquedo = $("#brinquedo")
var racao = $("#racao")
var produtos = $("#cardProdutos")
var rodape = $("#rodape")


$("#btnCasinha").on("click", function(){
    casinha.slideToggle(1000)
})

$("#btnColeira").on("click", function(){
    coleira.slideToggle(1000)
})

$("#btnBrinquedo").on("click", function(){
    brinquedo.slideToggle(1000)
})

$("#btnRacao").on("click", function(){
    racao.slideToggle(1000)
})

$("#btnFinal").on("click", function(){
    alert("Compra realizada com sucesso. Muito Obrigado, volte sempre!")
})

// SCRIPT DA PAGE HOME QUE MOSTRA UM ALERT CONFIRMANDO O AGENDAMENTO.


// ALERT PARA CONFIRMAÇÃO DO BANHO
$("#btnBanho").on("click", () => {
    var especie = $("#especie").val()
var dia = $("#diaBanho").val()
var hora = $("#horaBanho").val()
    alert("Banho agendado para a espécie: "+ especie+"\ndia: "+dia+" \nàs: "+hora)
})

// ALERT PARA CONFIRMAÇÃO DA CONSULTA
$("#btnSaude").on("click", () => {
    var especie = $("#especie1").val()
var dia = $("#diaSaude").val()
var hora = $("#horaSaude").val()
    alert("Consulta agendada para a espécie: "+ especie+"\ndia: "+dia+" \nàs: "+hora)
})

