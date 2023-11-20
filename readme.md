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

Execute command, This information must be inserted into the indicator file.
```
npm install
```

Creating folders like keys, assets and signal

```
mkdir keys
```
```
mkdir sign
```
Creation of private and public keys (```public_key.ssh``` and ```private_key.pem```)

```
node create-keys.mjs
```

Below is the table with exemplary data for a two-dimensional and multi-dimensional indicator, this information must be inserted into the ```indicator.mjs``` file.

- **Two-dimensional**

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
    },

    appKey: 'chave_da_aplicação',
}
```

- **templateId** - Indicator identifier
- **year**       - Current year of submission
- **column**     - Column open to submission
- **fields**     - The indicator fields to be submitted
- [
    {
     - **city**  - Slug of the column that will be filled
     - **month** - Month open for submission
     - **value** - Value to be recorded
  },
  
  // Add more entries as needed
]
- **appKey**     - Application key created in the entity portal

Create signature and encrypt indicator data (```encoded.txt``` and ```signature.txt```)

```
node sign.mjs
``` 

- **signature**

Below is an example of a signature generated by the peer-to-peer application in the path  **sign/signature.txt**
```
 SSDWQQDEWWEK0nTwFCXRES5WjD6x
``` 
- **encoded**

Below is an example of a encoded generated by the peer-to-peer application in the path **sign/encoded.txt**
```
 ddwdwqdwdqwdqrewfewrterteeytryfBFZy4o3gPYTX3n6GTs52s1FMPOtiV5XM70FNdA82MLoso/y9qbVM9j/J6Zddwdwdp
``` 

Validate whether there has been a change in data based on signature and encrypted data

```
node verify.mjs
``` 
 
## Built-in tools

- [node-rsa](https://www.npmjs.com/package/node-rsa)
- [nodejs](https://nodejs.org/en/download/package-manager)

## Create date and Last updade
08 November 2023 -> 15 November 2023