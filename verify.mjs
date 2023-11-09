import NodeRSA from 'node-rsa';

import fs from 'node:fs';

(async () => {
  
  const encoded = fs.readFileSync('./encoded.txt', 'utf-8');

  const publicKey = fs.readFileSync('./keys/public_key.ssh', 'utf-8');
  const signature = fs.readFileSync('./signature.txt', 'utf-8');

  const nodeRsa = new NodeRSA(publicKey);

  const decoded = await nodeRsa.decryptPublic(encoded, 'utf8');

  const decodedJson = JSON.parse(decoded);
 
  const verifiedSignature = nodeRsa.verify(
    {
      ...decodedJson,
    },
    signature,
    'base64',
    'base64'
  );

  console.log('Is Valid : ',verifiedSignature);
  console.assert(verifiedSignature);
})();
