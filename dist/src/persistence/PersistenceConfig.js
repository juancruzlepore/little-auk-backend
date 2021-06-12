"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: hide credentials
const typeorm_1 = require("typeorm");
function getConnection() {
    let host = 'cluster1.cluster-cyjp18snqym1.eu-west-2.rds.amazonaws.com';
    let port = 3306;
    let username = 'admin';
    let password = 'Piolin27594AWS';
    let database = 'wourkout';
    return typeorm_1.createConnection({
        type: "mysql",
        host: host,
        port: port,
        username: username,
        password: password,
        database: database,
        entities: [
            __dirname + "/entity/*.ts"
        ],
        synchronize: true,
    });
}
exports.default = getConnection;
//# sourceMappingURL=PersistenceConfig.js.map