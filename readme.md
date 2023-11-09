# Peer to peer 
Aplicação para gerar dados criptografados e validar usando uma chave e assinatura

## Passos para a execução

Clonar o projecto:

```
git clone https://github.com/PedroEJKondo/peer-to-peer-rsa.git

```

Navegar até a pasta do projecto :

```
cd peer-to-peer 

```

Executar :

```
npm install

```

1.Criação das chaves
    Criar chaves
2.Criar assinatura
    Criar assinatura
3.Validar
    Validar submissão

Executar o projecto

```
node index.js

```
 
## Extrutura padrão

Segue-se a estrutura com dados exemplares para um indicador.

```
{
    data: {
        templateId: 'XXX',
        year: 'XXXX',
        column: 'XXXX',
        fields: [

            -- estrutura dos campos
        
        ]
    }
}
```

## Ferramentas integradas

- [File-system] (https://www.npmjs.com/package/file-system)
