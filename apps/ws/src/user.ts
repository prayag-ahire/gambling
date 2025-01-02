import { WebSocket } from 'ws';
import { COINS } from './type';

export class User {
    id: number;
    name: string;
    balance: number;
    locked: number;
    ws: WebSocket

    constructor(id: number, name: string, balance:number,ws: WebSocket) { 
        this.id = id;
        this.name = name;
        this.balance = 1000;
        this.ws = ws;
    }
    bet(amount: COINS){
        this.balance -= amount;
        this.locked += amount;
        this.ws.send(JSON.stringify({
            type: "bet",
            amount: amount,
            balance: this.balance,
            locked: this.locked,
        }));
    }
}