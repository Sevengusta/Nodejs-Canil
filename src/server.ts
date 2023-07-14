import { configDotenv } from "dotenv";
import express from "express";
import mustacheExpress from "mustache-express";
import path from "path";
import mainRoutes from './routes/index'
//configurando as rotas de desenvolvimento
configDotenv()
//inicinado o server
const server = express();
//criando as rotas e configurando-as para renderizar arquivos mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustacheExpress())
//configuração para tornar a pasta public acessível
server.use(express.static(path.join(__dirname, '../public')))
//rotas
server.use(mainRoutes)

server.use((req,res) => {
    res.render('pages/404')
})


server.listen(process.env.PORT)