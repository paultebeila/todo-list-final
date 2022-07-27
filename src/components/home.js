import AddItem from "./addItem";
import {DisplayTransaction} from "./displayTransaction"
//import{BudgetBalance} from './balance'

function Home(props){


    return (
        <div className="container">
            <AddItem add={props.add}/>
            <DisplayTransaction list={props.list}/>
        </div>
    ) 
}

export default Home;