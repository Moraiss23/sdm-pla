const express = require("express")
const axios = require("axios")

const app = express()
app.use(express.json())

app.post("/pedidos", (req, res) =>{

    const pedido = req.body;

    console.log(`Pedido recebido para o usuario ID ${pedido.pedidoId}`);

    res.send({message: "Pdiddy criado com sucesso", pedido})
   
})
app.listen(4000, () =>{
        console.log("Order Service rodando")
})
