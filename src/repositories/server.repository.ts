
import sdk from 'node-appwrite';
import config from '../config/env.js';

export class ServerRepository {
    client: any
    constructor() {
        this.client = new sdk.Client();
    }

    public async getServerHealth() {
        const health = new sdk.Health(this.client);
        this.client
        .setEndpoint(config.APPWRITE_ENDPOINT)
        .setProject(config.APPWRITE_PROJECT)
        .setKey(config.APPWRITE_KEY)

        const result = await health.get();
        console.log(result)
        return result
    }

    public async getServerDatabase() {
        const health = new sdk.Health(this.client);
        this.client
        .setEndpoint(config.APPWRITE_ENDPOINT)
        .setProject(config.APPWRITE_PROJECT)
        .setKey(config.APPWRITE_KEY)

        const result = await health.getDB();
        console.log(result)
        return result
    }

    public async getServerCache() {
        const health = new sdk.Health(this.client);
        this.client
        .setEndpoint(config.APPWRITE_ENDPOINT)
        .setProject(config.APPWRITE_PROJECT)
        .setKey(config.APPWRITE_KEY)

        const result = await health.getCache();
        console.log(result)
        return result
    }
}