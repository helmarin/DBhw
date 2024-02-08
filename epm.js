const express = require("express")
const app = express()
const port = 3000

const clients = [
        {
            Id: 1,
            name: "Калита Иван Данилович",
            phone: "+7-128-813-40-31",
            gender: "m",
            adress: "Тверь"
        }
        ,
        {
            Id: 2,
            name: "Скрипаль Сергей Викторович",
            phone: "+7-999-006-12-72",
            gender: "m",
            adress: "Новороссийск"
        }
        ,
        {
            Id: 3,
            name: "Петрова Ольга Борисовна",
            phone: "+7-112-911-99-00",
            gender: "f",
            adress: "Зеленоград"
        }
        ,
        {
            Id: 4,
            name: "Скорсезе Марина Александровна",
            phone: "?0-000=000+00/00",
            gender: "f",
            adress: "Неаполь"
        }
]

app.get( '/', (req,res) => {
    res.set({
        "content-type": "application/json",
    })
    res.json (JSON.stringify(clients))
 })

 app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
 })