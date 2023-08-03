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
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников:{props.data.length}</h2>
            <h2>Премию получат:{names}</h2>
        </div>
    )
}

export default AppInfo;