const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Tô rodando no Heroku!")
})

app.listen(port, () => console.log(`[info] Rodando na porta ${port}`))