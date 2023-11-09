import NodeRSA from 'node-rsa';
import fs from 'node:fs';

(async () => {
  const key = new NodeRSA({ b: 2048 });

  // Export the private key to a file (in PEM format)
  const privateKey = key.exportKey('openssh-private');
  fs.writeFileSync('keys/private_key.pem', privateKey);

  // Get the public key in OpenSSH format
  const publicKeySSH = key.exportKey('openssh-public');
  fs.writeFileSync('keys/public_key.ssh', publicKeySSH);

  console.log(
    'RSA key pair generated and saved to private_key.pem and public_key.ssh.'
  );
})();
