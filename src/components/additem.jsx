import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import moment from "moment/moment";

export const arrActive = JSON.parse(localStorage.getItem("items")) || []
export const arrCompleted = JSON.parse(localStorage.getItem("completed")) || []

const initialState = {name:"", date:"", errorBox:""}

class AddToDo extends React.Component{
    constructor(props) {
        super(props);
        this.state= {name:"", date:"", errorBox:""}
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    validate(){
        let errorText = ""
        let date = moment(this.state.date, "YYYY-MM-DD", true)
        if(!this.state.name || !this.state.date){
            errorText = "Required"
        }
        if(this.state.name.trim().length < 2){
            errorText = "Invalid Name"
        }
        if(!date.isValid()){
            errorText = "Invalid Date"
        }
        if(errorText){
            this.setState({errorBox: errorText});
            return false;
        }
        return true;
    }
    handleSubmit(e){
        const isValid = this.validate()
        if(isValid){
            const item = {
                name: this.state.name,
                date: this.state.date,
                checked: false,
            }
            arrActive.push(item)
            localStorage.setItem("items", JSON.stringify(arrActive))
            this.setState(initialState)
        }
        e.preventDefault()
    }
    handleChangeName(e){
        this.setState({name: e.target.value})
    }
    handleChangeDate(e){
        this.setState({date: e.target.value})
    }
    render(){
        return(
            <>
                <div className="menu">
                    <div className="buttons">
                        <Link to="/add" className="menuButton active">Add to do</Link>
                        <span className="pink btnAdd"><Icon icon="carbon:add-filled" /></span>
                        <Link to="/" className="menuButton">To Do List</Link>
                        <span className="pink btnActiveToDos"><Icon icon="bi:card-list" /></span>
                        <Link to="/completed" className="menuButton">Completed</Link>
                        <span className="pink btnCompletedToDos"><Icon icon="bi:list-check" /></span>
                    </div>
                </div>
                <div className="container">
                    <div className="addbg">
                        <h2>Add Task</h2>
                         <form onSubmit={this.handleSubmit}>
                            <input type="text" name="taskname" placeholder="Name" className="inputTxt" value={this.state.name} onChange={this.handleChangeName}/>
                            <input type="date" name="taskdate" className="inputTxt" value={this.state.date} onChange={this.handleChangeDate}/>
                            <div className="btnControls">
                                <button className="pinkbtn" type="submit">Add Task</button>
                            </div>
                        </form>
                        <h2>{this.state.errorBox}</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default AddToDo;