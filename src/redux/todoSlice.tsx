import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";


const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },                                                            //id geleecek number!
    removeTodoById: (state:TodoInitialState,action:PayloadAction<number>)=>{
      state.todos=[...state.todos.filter((todo:TodoType)=>todo.id!==action.payload)]
      //eşit olmayanları yakala ve yeni array olarak dön
      //state içindeki todosu bul dön diyelimki 3 idli todo olsun
      //todo değişkeni olarak al id'sidışarıdan ghelen todo idmize eşit değilse
      //al diyorum 3 ookta ile bunu aç bak ne var
    },
    updateTodoById:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{
      state.todos=[...state.todos.map((todo:TodoType)=>todo.id!==action.payload.id? todo :action.payload)]
    }
  }
})

export const { createTodo ,removeTodoById ,updateTodoById} = todoSlice.actions;

export default todoSlice.reducer;
