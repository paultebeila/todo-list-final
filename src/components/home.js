import AddPlan from "./addPlan";
import {Display} from "./display"
import '../css/home.css'
import { Link } from "react-router-dom";

function Home(props){


    return (
        
        <div className="container">
            <form className='panel'>
                    <h2>Paul</h2>
                    <Link to="/"><button className='btn'>Log out</button></Link>
                    
                </form>
            <div className="App">
                
            </div>
            <AddPlan add={props.add}/>
            <Display list={props.list}/>
        </div>
    ) 
}

export default Home;