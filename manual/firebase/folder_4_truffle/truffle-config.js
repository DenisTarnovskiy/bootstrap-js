module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545, // your rpc port (like geth rpc port or testrpc port )
            network_id: "*"

        },

        rinkeby: {
            host: "localhost",
            port: 8545, // your rpc port (like geth rpc port or testrpc port )
            network_id: 4,
            gas: 470000000

        }
    }
};