import React from "react";
import {Icon} from "@iconify/react";
import { arrCompleted} from "./additem";

class CompletedItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {completedArr: arrCompleted}
    }
    handleClick(index){
        arrCompleted.splice(index,1);
        this.setState({completedArr: arrCompleted})
        localStorage.setItem("completed", JSON.stringify(arrCompleted));
    }
    render(){
       return(
        <>
        {this.state.completedArr.map((item,index)=>{
            return(
                <div className="toDoItem" key={index}>
                    <div className="item1">
                    <div className="left">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="right">
                        <p><span className="green iconSpace"><span className="txtSpace"></span> <Icon icon="clarity:date-line"/></span>{item.date}</p>
                    </div>
                </div>
                <div className="item2">
                    <button className="deleteBtn" onClick={()=> this.handleClick(index)}><Icon icon="ant-design:delete-outlined" /></button>
                </div>
            </div>
            )
        })}
            </> 
       )
    }
}


export default CompletedItem