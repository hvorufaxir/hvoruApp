
```javascript
import namehash from 'eth-ens-namehash';
import contentHash from '@ensdomains/content-hash';
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';

export default async function resolveEnsToIpfsContentId({ provider, name }) {
  const hash = namehash.hash(name);
  const chainId = Number.parseInt(await provider.request({ method: 'net_version' }), 10);
  const registryAddress = getRegistryForChainId(chainId);
  if (!registryAddress) throw new Error(`EnsIpfsResolver - no known ens-ipfs registry for chainId "${chainId}"`);
  
  const web3Provider = new Web3Provider(provider);
  const registryContract = new Contract(registryAddress, registryAbi, web3Provider);
  
  let resolverAddress;
  try {
    resolverAddress = await registryContract.resolver(hash);
    if (hexValueIsEmpty(resolverAddress)) throw new Error(`EnsIpfsResolver - no resolver found for name "${name}"`);
    resolverContract = new Contract(resolverAddress, resolverAbi, web3Provider);

    let contentLookupResult;
    let decodedContentHash;
    let type;

    if (await resolverContract.supportsInterface('0xbc1c58d1')) {
      contentLookupResult = await resolverContract.contenthash(hash);
      rawContentHash = contentLookupResult[0];
      decodedContentHash = contentHash.decode(rawContentHash);

      type =
        type === 'ipfs-ns' || type === 'ipns-ns'
          ? contentHash.helpers.cidV0ToV1Base32(decodedContentHash)
          : decodedContentHash;

      return { type, hash: decodedContentHash };
    }
    
    if (await resolverContract.supportsInterface('0xd8389dc5')) {
      contentLookupResult = await resolverContract.content(hash);
      if (hexValueIsEmpty(content)) throw new Error(`EnsIpfsResolver - no content ID found for name "${name}"`);
      
      return { type: 'swarm-ns', hash: `0x${content.slice(2)}` };
      
    }
    
playing around with the code to optimize it further might be necessary.
```

Note that this code removes some redundant checks and simplifies the structure to focus on the core functionality. Additionally, error handling can be optimized further depending on the specific use case.
