# Peer to peer 
Application to generate encrypted data and validate using a key and signature

## Steps for execution

### Install nodejs version 14.20.0 or higher

Clone the project

```
git clone https://github.com/PedroEJKondo/peer-to-peer-rsa.git
```

Navigate to the project folder

```
cd peer-to-peer-rsa
```

Execute command

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
        templateId: '1',
        year: '2023',
        column: 'January',
        fields: [
            {
                city: 'Bengo',
                month: 'January',
                value: '1',
            },
            {
                city: 'Benguela',
                month: 'January',
                value: '2',
            },

            ---
        
        ]
    }
}
```

## Built-in tools

- [node-rsa] (https://www.npmjs.com/package/node-rsa)

## Create date
08 November 2023