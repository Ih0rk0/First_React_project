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
      trigger:1,
      searchStr:''
    }
    this.maxId=4
    this.trigger=false
    this.old=this.state.data
  }
  showPromotion=()=>{
    this.setState(({trigger})=>({
      trigger:2
    }))
  }

  showAll=()=>{
    this.setState(({trigger})=>({
      trigger:1
    }))
  }
  showHighMany=()=>{
    this.setState(({trigger})=>({
      trigger:3
    }))
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

  changeSearchStr=(str)=>{

    this.setState(()=>({
      searchStr: str
    }))
    console.log(this.state.searchStr)
  }

  find = (data,str) => {
    console.log('yes')
    if(str.length===0){
      console.log(0)
      return data
    }else{

      console.log(data.filter(item=> item.name.indexOf(str)>-1))
      return data.filter(item=>{
        return item.name.indexOf(str)>-1
      })
    }


  }
  

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
    let data
    switch(this.state.trigger){
      case 1 :data=this.find(this.state.data,this.state.searchStr)
      break
      case 2 :data=this.find(this.state.data.filter(item=>item.increase),this.state.searchStr) 
      break
      case 3 :data=this.find(this.state.data.filter(item=>item.salary>1000),this.state.searchStr) 
      break
      default: data=this.state.data
    }
    console.log( data)
    return (
      <div className="app">
        <AppInfo  
        data={this.state.data}/>
        <div className="search-panel">

          <SearchPanel 
          changeSearchStr={this.changeSearchStr}/>

          <AppFilter 
          showAll={this.showAll}
          showPromotion={this.showPromotion}
          showHighMany={this.showHighMany} 
          trigger={this.state.trigger}/>
        </div>

        <EmployeesList 
        data= { data} 
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
