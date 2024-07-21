
import express from "express"
const bot = new Bot("7499269454:AAHXC8Alkk85gPC59SYehRRsa__BRBV2uT4");

const bottoken = process.env.BOT_TOKEN




app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:'.'})
})

app.post('/api/init_data',(req,res) =>{
console.log('Body:')
console.log(req.body)
})
app.listen(port,() =>{
    console.log(`Example app listeningnon port ${port}`)
})