import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete,toggleStar,toggleRise}) => {
    
    let newArr=data.map(item=>{
        const {id, ...itemsProps}=item
        return(
            <EmployeesListItem 
            key={id}
            {...itemsProps}
            onDelete={()=>onDelete(id)}
            toggleStar={()=>toggleStar(id)}
            toggleRise={()=>toggleRise(id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {newArr}
        </ul>
    )
}

export default EmployeesList;