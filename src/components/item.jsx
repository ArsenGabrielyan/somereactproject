import React from "react";
import {Icon} from "@iconify/react";
import { arrActive, arrCompleted } from "./additem";

class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {activeArrays: arrActive}
    }
    handleCheckbox(e, index){
        arrActive[index].checked = e.target.checked
        let hasChecked = arrActive.some(item =>{
            return item.checked
        })
        if(hasChecked){
            document.getElementById("moveBtn").removeAttribute("disabled")
            document.getElementById("moveBtn").addEventListener("click", ()=>{
                    if(arrActive[index].checked === true){
                        arrCompleted.push(arrActive[index]);
                        arrActive.splice(index,1)
                        this.setState({activeArrays: arrActive})
                        localStorage.setItem("items", JSON.stringify(arrActive));
                        localStorage.setItem("completed", JSON.stringify(arrCompleted));
                    }
            })
        } else{
            document.getElementById("moveBtn").setAttribute("disabled", true)
        }
    }
    render(){
        return(
            <>
            {this.state.activeArrays.map((item,index)=>{
                return(
                    <div className="toDoItem" key={index}>
                        <div className="item1">
                        <div className="left">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="right">
                            <p><span className="green iconSpace"><span className="txtSpace"></span><Icon icon="clarity:date-line"/></span>{item.date}</p>
                        </div>
                    </div>
                    <div className="item2">
                        <input type="checkbox" name="taskcheck" onChange={(e) => this.handleCheckbox(e, index)} value={index} id="taskCheckbox"/>
                    </div>
                </div>
                )
            })}
                </>
        )
    }
}

export default ToDoItem