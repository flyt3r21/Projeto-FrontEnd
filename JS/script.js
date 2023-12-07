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
    alert("Compra realizada com sucesso. Muito Obrigado!")
})

