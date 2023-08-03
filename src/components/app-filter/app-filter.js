import "./app-filter.css";
 import { Component } from "react";
class AppFilter extends Component  {
    constructor(props){
        super(props)
        this.state={
            trigger:true
        }
    }
    // showPromotion =async()=>{
    //        this.setState(({trigger})=>({
    //         trigger: !trigger
    //     }))
        
    //     console.log(this.state.trigger)
    //      this.props.showPromotion(this.state.trigger)
    // }
    render(){
        return (
            <div  className="btn-group">
                <button onClick={this.props.showAll}  type="button"
                        className={this.props.trigger===1 ?  "btn btn-light" :"btn btn-outline-light"}>
                        Всі працівники
                </button>
                <button onClick={this.props.showPromotion} type="button"
                        className={this.props.trigger===2 ?  "btn btn-light" :"btn btn-outline-light"}>
                        На підвищення
                </button>
                <button onClick={this.props.showHighMany} type="button"
                        className={this.props.trigger===3 ?  "btn btn-light" :"btn btn-outline-light"}>
                        З/П більше 1000$
                </button>
            </div>
        )
}

}

export default AppFilter;