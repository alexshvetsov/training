import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Player from "../../utilitis/types/player-types";

interface PlayerState {
  players: Player[];
}

const initialState: PlayerState = {
  players: [],
};

const playersSlice= createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    },

  },
});
export const { setPlayers } = playersSlice.actions;

export default playersSlice.reducer;
