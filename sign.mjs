import NodeRSA from 'node-rsa';
import fs from 'node:fs'

import mockPayload from './indicador.mjs'

(async (data, appKey) => {
  const privateKey = fs.readFileSync('./keys/private_key.pem')

  const nodeRsa = new NodeRSA(privateKey)

  const encoded = nodeRsa.encryptPrivate(JSON.stringify({ data, appKey }), 'base64')

  const signature = nodeRsa.sign({
    data,
    appKey,
  }, 'base64')

  fs.writeFileSync('./sign/encoded.txt', encoded)
  fs.writeFileSync('./sign/signature.txt', signature)

})(mockPayload.data, mockPayload.data)