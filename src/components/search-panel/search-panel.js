import './search-panel.css';

const SearchPanel = (props) => {

    return (
        <input onChange={(e)=>props.changeSearchStr(e.target.value)}type="text"
        className="form-control search-input"
        placeholder="Знайти співробітника"/>
    )
}

export default SearchPanel;