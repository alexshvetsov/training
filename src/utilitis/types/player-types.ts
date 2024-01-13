export default interface Player{
    id:string;
    name:string;
    nickname:string;
    previousNickNames:string[];
    bankroll:number;
    lastPayed:Date;
    lastPlayed:Date;
    active:boolean;
}