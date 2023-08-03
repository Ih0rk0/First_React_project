import "./app-info.css";

const AppInfo = (props) => {
    let names=[];
    props.data.forEach(item=>{
        if(item.star===true){
            names.push(' '+item.name+" ")
        }
    })


    return (
        <div className="app-info">
            <h1>Облік співробітників в компанії N</h1>
            <h2>Загальна кількість співробітників:{props.data.length}</h2>
            <h2>Премію отримають:{names}</h2>
        </div>
    )
}

export default AppInfo;