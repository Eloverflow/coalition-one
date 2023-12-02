// Block structure in TypeScript
import crypto from 'crypto';
import Transaction from './Transaction';

class Block {
    public index: number;
    public previousHash: string;
    public timestamp: number;
    public transactions: Transaction[];
    public hash: string;

    constructor(index: number, transactions: Transaction[], previousHash: string) {
        this.index = index;
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    private calculateHash(): string {
        const blockData = `${this.index}${this.timestamp}${JSON.stringify(this.transactions)}${this.previousHash}`;
        return crypto.createHash('sha256').update(blockData).digest('hex');
    }
}

export default Block;
