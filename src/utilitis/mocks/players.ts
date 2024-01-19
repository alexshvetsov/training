import { Option } from "../../components/form/types/option";
import Player from "../types/player-types";

export const players:Player[] =[
    {
        id:'1',
        name:'daniel',
        nickname:'yark',
        previousNickNames:['a','b','c'],
        bankroll:150,
        lastPayed:new Date(),
        lastPlayed:new Date(),
        active:true,
    },
    {
        id:'2',
        name:'alex',
        nickname:'shvet',
        previousNickNames:['d','e'],
        bankroll:2,
        lastPayed:new Date(),
        lastPlayed:new Date(),
        active:true,
    },
    {
        id:'3',
        name:'nissan',
        nickname:'sh',
        previousNickNames:['w'],
        bankroll:1,
        lastPayed:new Date(),
        lastPlayed:new Date(),
        active:false,
    }
]

export const playerNames:Option[]=[
    {
        value:'nissan sh',
        label:'3'
    },
    {
        value:'alex shvet',
        label:'2'
    },
    {
        value:'daniel',
        label:'yark'
    },
]

export function fetchPlayers(value:string) {
    return new Promise<Option[]>((resolve) => {
      setTimeout(() => {
        const filteredPlayers = playerNames.filter(name=>name.value.includes(value))
        if(!value){
          resolve(playerNames);
          return
        }
        resolve(filteredPlayers);
      }, 4000);
    });
  }
  
  export function fetchPlayerNames() {
    return new Promise<Option[]>((resolve) => {
      setTimeout(() => {
        resolve(playerNames);
      }, 1000);
    });
  }