import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {name:'Ihorko',salary:1900,increase:true,star:true,id:1},
        {name:'Andryi',salary:900,increase:false,star:false,id:2},
        {name:'Vasyl',salary:400,increase:true,star:false,id:3},
      ],
    }
    this.maxId=4
    this.trigger=false
    this.old=this.state.data
  }

  toggleStar=(id)=>{
    this.setState(({data})=>({
      data:data.map(item=>{
        if(item.id===id){
          return {...item, star:!item.star}
        }
        return item
      })
    }))
  }
  
  find = (str) => {


    let arr= this.state.data.filter(item => item.name ===str)
    console.log(arr)

    if(arr.length>0){
      this.setState(({ data }) => ({
        data:arr
      }));
    }else{
      this.setState(({ data }) => ({
        data:this.old
      }));
    }

  }
  
  // find=(str)=>{
    
  //   this.setState(({data})=>({
  //     data:data.filter(item=>{
  //       if(item.name===str){
  //         console.log(data)
  //         console.log(item)
  //       }
  //       return item
  //     })
  //   }))

  //   //  console.log(this.state.data.filter(item=>item.name===str))
  // }

  toggleRise=(id)=>{
    this.setState(({data})=>({
      data:data.map(item=>{
        if(item.id===id){
          return {...item, increase:!item.increase  }
        }
        return item
      })
    }))
  }

  onDelete=(id)=>{
    this.setState(({data})=>{
      return {
        data:data.filter(item=> item.id!==id)
      }
    })
  }

  setEmployer=(obj)=>{
    obj['id']=this.maxId++
    this.setState(({data})=>({
      data:data.concat(obj),
    }))
  }

  render(){
    return (
      <div className="app">
        <AppInfo  
        data={this.state.data}/>
        <div className="search-panel">
          <SearchPanel find={this.find}/>
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} 
        onDelete={this.onDelete} 
        toggleStar={this.toggleStar}
        toggleRise={this.toggleRise}/>
        <EmployeesAddForm 
        setEmployer={this.setEmployer}
        />
      </div>
    );
  }
}

export default App;
