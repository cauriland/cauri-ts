**:warning: SOON TO BE DEPRECATED IN FAVOR OF https://github.com/cauriland/core/tree/main/packages/crypto - PLEASE SUBMIT PULL REQUESTS TO THE CORE V2 REPOSITORY :warning:***

![TSCauri Logo](https://github.com/cauriland/cauri-ts/raw/main/banner.png)

# TSCauri

> An Cauri API wrapper, written in TypeScript to interact with Cauri blockchain.

[![npm](https://img.shields.io/npm/dt/cauri-ts.svg)]()
[![npm](https://img.shields.io/npm/v/cauri-ts.svg)]()
[![license](https://img.shields.io/github/license/cauriland/cauri-ts.svg)]()

> Lead Maintainer: [Arsel Tindo](https://github.com/tnga) <br/>
> Legacy Maintainer: [Lúcio Rubens](https://github.com/luciorubeens)

TSCauri is a library client designed to facilitate how you interact with the Cauri blockchain.

## Why TypeScript

  * TypeScript is is a superset of JavaScript which mainly offers optional static typing, classes, and interfaces. The learning curve is not that steep.
  * Types are optional, TSCauri compiles into ES5 so you can work with both, ECMAScript or TypeScript.
  * A better development experience, including auto-complete and fully documented.

## Documentation

> [API documentation](https://cauriland.github.io/cauri-ts/) is hosted on github pages, and is generated from [TypeDoc](https://github.com/TypeStrong/typedoc).

## Installation

TSCauri is avaliable from `npm`.

```bash
yarn add cauri-ts
```

or

```bash
npm i cauri-ts --save
```

## Usage

For the best TypeScript experience, you should either use [Visual Studio Code](http://code.visualstudio.com/), or a [plug-in for your favorite text editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

### Basic Examples

> Get delegate list from Devnet network.

```js
import { Client, Network, NetworkType } from 'cauri-ts';

const devnet = Network.getDefault(NetworkType.Devnet);
const client = new Client(devnet);

client.delegate.list().subscribe((list) => {
  console.log(list);
});
```

> Get address from passphrase.

```js
import { PrivateKey } from 'cauri-ts/core';

// if no specify a second param, default is mainnet
const key = PrivateKey.fromSeed('my secret passphrase');
console.log(key.getPublicKey().getAddress()); // CaWU6X3pGdtSCK3s9weo9tjth64F3hixgT
```

For more examples please see documentation or look for tests in each directory.

## Running the tests

```bash
npm run test
```

## Security

If you discover a security vulnerability within this project, please send an e-mail to security@cauri.cm. All security vulnerabilities will be promptly addressed.

## Contributing

  * If you find any bugs, submit an [issue](../../issues) or open [pull-request](../../pulls), helping us catch and fix them.
  * Engage with other users and developers on [Cauri Slack](https://cauri.cm/slack/).
  * [Contribute bounties](./CONTRIBUTING.md).

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@cauri.cm. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [Cauri Land](https://cauri.cm)
