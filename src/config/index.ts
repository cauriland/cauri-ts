// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
        private: 0x2bf4530,
        public: 0x2bf4968,
      },
      name: 'mainnet',
      nethash: '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988',
      token: 'CAU',
      symbol: 'ꚦ',
      version: 28,
      explorer: 'https://explorer.cauri.cm',
      wif: 16,
      p2pPort: 4301,
      apiPort: 4303,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '194.233.168.159',
        port: 4303,
      },
      peers: [
        '194.233.168.159:4303',
        '139.162.20.43:4303',
        '178.79.138.138:4303',
        '172.105.177.126:4303',
        '139.162.133.228:4303',
        '139.162.162.192:4303',
        '176.58.106.76:4303',
      ],
    },
    devnet: {
      bip32: {
        public: 46090600,
        private: 46089520,
      },
      name: 'devnet',
      nethash: '92cab31a43f77846d4a2e0c32bdc76038f20c619e694704ba355fa6b571b29c1',
      token: 'DCAU',
      symbol: 'Dꚦ',
      version: 30,
      explorer: 'https://dexplorer.cauri.cm',
      wif: 152,
      p2pPort: 4302,
      apiPort: 4303,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '139.162.20.43:4303',
        port: 4303,
      },
      peers: [
        '139.162.20.43:4303',
        '178.79.138.138:4303',
        '172.105.177.126:4303',
        '139.162.133.228:4303',
        '139.162.162.192:4303',
        '176.58.106.76:4303',
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 101,
    date: new Date(Date.UTC(2022, 3, 7, 0, 32, 59, 820)),
  },
};
