import './employees-list-item.css';


const EmployeesListItem =(props)=>{
    let {name, salary,increase,star, toggleStar,onDelete,toggleRise} =props

    let nameOfClass
    

    if(increase &&star){
        nameOfClass='list-group-item d-flex justify-content-between increase like'
    }else if(increase){
        nameOfClass='list-group-item d-flex justify-content-between increase'
    }else if(star){
        nameOfClass='list-group-item d-flex justify-content-between like'
    }else{
        nameOfClass='list-group-item d-flex justify-content-between'
    }




    return (
        <li className={nameOfClass}>
            <span onClick={toggleStar} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={toggleRise} type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
export default EmployeesListItem;