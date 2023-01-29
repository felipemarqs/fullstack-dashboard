# SERVER

## SETUP INICIAL

- **NPM** 
  
  ```bash
    npm init -y                            || INCIANDO O PROJETO
    mpm install <dependencies>             || ADICIONA AS DEPENDENCIAS DO PROJETO  
  ```

Após criadas as dependencias, criamos o index.js onde estará a configuração do nosso servidor utilizando o express


- **EXPRESS**


 ```javascript
    import express from 'express'          || INCIANDO O PROJETO
    
    
    const app = express()
    app.use(express.json())
    app.use(helmet())
    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
    app.use(morgan("common"))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(cors())
  ```

Após configurado o express, criei um banco de dados utilizando o Atlas agora irei fazer a conexão utilizando o mongoose

- **MONGOOSE** 

```javascript
    mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    app.listen(PORT, () => console.log(`Server Port ${PORT}`))
    }).catch((error) => console.log(`${error} not connected`))
```

Próximo passo será iniciar o frontend criando a aplicação React com o comando 
```bash
    npx create-react-app client
 ```

 ###  [Guia de criação do projeto](../client/README.MD)


