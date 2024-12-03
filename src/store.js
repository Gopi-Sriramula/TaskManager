import { configureStore, createSlice } from "@reduxjs/toolkit";
const reducer1 = createSlice({
     name:"actions",
     initialState:{apiStatus:"init",data:[],wantedData:"all",selectedTask:null},
     reducers:{
          addTask:(state,action)=>{
               state.data.push(action.payload)
          },
          deleteTask:(state,action)=>{
               state.data=state.data.filter(item=>item.name!==action.payload);
          },
          editTask:(state,action)=>{
               const target = state.data.find(ui=>ui.name===action.payload);
               target.status=target.status=="incomplete"?"complete":"incomplete";
          },
          selectedData:(state,action)=>{
               state.wantedData=action.payload;
          },
          modifyData:(state,action)=>{
               state.selectedTask=action.payload;
          },
          changedData:(state,action)=>{
               state.data = state.data.filter(ui=>ui.name!==action.payload.name);
               state.data=[...state.data,action.payload.data];
          }
     }
})
export const {addTask,deleteTask,editTask,selectedData,modifyData,changedData} = reducer1.actions;
const store = configureStore({reducer:{
     a:reducer1.reducer,
}})
export default store;