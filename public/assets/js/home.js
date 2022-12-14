import {navigate, api, url } from "./script.js"

$("document").ready(() => {
    api("/pizza","GET",null,(pizzas) => {
        renderPizzas(pizzas)
    })
})

function renderPizzas(pizzas){
    pizzas.map((pizza) => {
        const id = pizza.id

        const item = $("<div>").addClass("item")

        const itemHeader = $("<div>").addClass("item__header")

        const image = url + pizza.img
        const pizzaIMG = $("<img>").attr("src",image)
        pizzaIMG.attr("alt",`${pizza.nome}`)
        pizzaIMG.addClass("pizza__img")
        itemHeader.append(pizzaIMG)
        item.append(itemHeader)

        const itemMain = $("<div>").addClass("item__main")
        const itemName = $("<p>").addClass("item__name").text(pizza.nome)
        itemMain.append(itemName)
        item.append(itemMain)

        const itemFooter = $("<div>").addClass("item__footer")
        const itemPrice = $("<p>").addClass("item__price").text("R$ "+pizza.preco)
        itemFooter.append(itemPrice)
        item.append(itemFooter)

        item.click(() => {
            sessionStorage.setItem("pizzaID",id)
            navigate("/pizza.html")
        })
    
        $("#content").append(item)
    })
}