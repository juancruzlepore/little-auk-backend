// TODO: hide credentials
import { createConnection, Connection } from "typeorm";

export default function getConnection(): Promise<Connection> {
    let host = 'cluster1.cluster-cyjp18snqym1.eu-west-2.rds.amazonaws.com'
    let port = 3306
    let username = 'admin'
    let password = 'Piolin27594AWS'
    let database = 'wourkout'
    
    return createConnection({
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
