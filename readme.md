# Peer to peer 
Application to generate encrypted data and validate using a key and signature

## Steps for execution

Tenha uma versão nodejs 14.20.0 ou superior

Clone the project:

```
git clone https://github.com/PedroEJKondo/peer-to-peer-rsa.git
```

Navigate to the project folder:

```
cd peer-to-peer 
```

Execute :

```
npm install
```

Creation of private and public keys

```
node create-keys.mjs
```

Create signature

```
node sign.mjs
``` 

Validate submission

```
node verify.mjs
``` 

Execute the project

```
node index.js
```
 
## Standard structure

Below is the framework with exemplary data for an indicator.

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

- [node-rsa] (https://www.npmjs.com/package/node-rsa)
- [File-system] (https://www.npmjs.com/package/file-system)
