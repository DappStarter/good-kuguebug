require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food resemble recipe stereo proof install define army genuine'; 
let testAccounts = [
"0x50aaf3d3c4105f04ae87612a8cb6eefd36838724f59e71d22307eba719313415",
"0xea71058bd9dff0c78d6f9000a7205c9c9c0c4fef93eaa2787b7d1c64dbbc7712",
"0x98ebaffc1b228844357b34796088ac56a9f7ebcbe496de18e32fa75886e671b1",
"0xe201d3d3f5a126a55ffb9337e452cee256a161ec62152d98c2f4952dbff6e52b",
"0x10179dd7da7bbed345a0409d245a5e882244ca1d404ec159363f8ec2b58820f0",
"0xe13d65a4b725ce04c32dbee6b04c326ae48194f27b79cd7d108cefb57c0d1533",
"0xad025b9d25ef1db1e24e311528ab3ce44a768dbce85e5f37a59921b118753cf2",
"0xef4139f53ba30350c9d426b704278fbca7f351dfea0be557bf26979b4eb2bf2b",
"0xb0af7dec454a04de65b9a2421f929dbd1aa9b3aa317c9a7b31ea486269c98828",
"0x0a9559f1c7a5e49b59787939ce342729214bfff2fe86c9612f18916e66930bf7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
