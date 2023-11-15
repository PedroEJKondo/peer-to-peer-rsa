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

Creating folders like keys, assets and signal

```
mkdir keys assets sign
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

Below is the table with exemplary data for a two-dimensional and multi-dimensional indicator.

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
    }
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

## Built-in tools

- [node-rsa] (https://www.npmjs.com/package/node-rsa)

## Create date and Last updade
08 November 2023 -> 15 November 2023