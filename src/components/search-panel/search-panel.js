import './search-panel.css';

const SearchPanel = (props) => {
    let str;

    const find =(e)=>{
        str=e.target.value
        if(e.target.value!==''){
        }else{
        }
        props.find(str)
    }

    return (
        <input onChange={find}type="text"
        className="form-control search-input"
        placeholder="Знайти співробітника"/>
    )
}

export default SearchPanel;