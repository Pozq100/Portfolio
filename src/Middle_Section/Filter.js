import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const filterCat = [
    { value: 'all', label: 'All'},
    { value: 'web', label: 'Web Application'},
    { value: 'app', label: 'Android Application'}
]

const defaultOption = filterCat[0];

let currOption = filterCat[0].value;

const Filter = ({ filterItem, sortItem, setItem, cardItems }) => {
    const _onSelect = (selectedOption) => {
        currOption = selectedOption.value;
        filterItem(currOption);
    };


    return (
        <div className='filterContainer'>
            <div className="filterTitle">Projects</div>
            <button 
            className="filterSort" 
            id="SortByNew"
            onClick={() => sortItem("new", currOption)}>New</button>
            <button 
            className="filterSort Selected" 
            id="SortByOld"
            onClick={() => sortItem("old", currOption)}>Old</button>
            <Dropdown 
            options={filterCat} 
            onChange={_onSelect} 
            value={defaultOption}
            className="filter"
            controlClassName='filterControl'
            menuClassName='filterMenu' />
        </div>
    );
}

export default Filter;