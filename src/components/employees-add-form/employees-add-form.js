import './employees-add-form.css';
import { Component } from 'react';
class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            salary:''
        }
    }

    onValueChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addEmployer=(e,obj)=>{
        e.preventDefault()
        if(e.target[0].value===''||e.target[1].value===''){
            return
        }else if(!isNaN(e.target[0].value)){
            e.target[0].value=''
            e.target[0].placeholder='cant be a number'
            return
        }
        this.props.setEmployer(obj)
        this.setState({
            name:'',
            salary:''
        })
      }

    render(){
        const{name,salary}=this.state
        let obj={
        name:name,
        salary:salary,
        increase:false,
        star:false
        }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(e)=>this.addEmployer(e,obj)} 
                    className="add-form d-flex">
                    <input name = 'name'
                        onChange={this.onValueChange} 
                        value={name}type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input name='salary' 
                        onChange={this.onValueChange} 
                        value={salary} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;