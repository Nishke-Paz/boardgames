import {AnyAction, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { AppDispatch } from '../store'

export type Game = {
    name: string,
    desc: string,
    id: number,
    updatedAt: string,
    createdAt: string
}

type GameState = {
    list: Game[]
}

const initialState: GameState = {
    list: []
}


export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        loadGameSucsess(state: GameState, action: PayloadAction<Game[]>) {
            state.list = action.payload;
        }
    }
})

export const loadGameAsync = () => async (dispatch: AppDispatch) => {
    const games: AxiosResponse<Game[]> = await axios.get("http://localhost:3000/games");
    dispatch(loadGameSucsess(games.data))
  }

export const {loadGameSucsess} = gamesSlice.actions

export default gamesSlice.reducer;
