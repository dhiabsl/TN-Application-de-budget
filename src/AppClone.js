import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
//Importing components
import "./App.css";
//Import CSS styling

const app = () =>{
    return(
    <GlobalContextProvider>
        <div className="container">
        <div className="app-wrapper">
            <Header />
            <Balance />
            <IncomeList />
            <ExpenseList />
            <AddTransaction />
        </div>
        </div>
    </GlobalContextProvider>
    )
}

export default app;