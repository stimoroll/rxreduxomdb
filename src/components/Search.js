import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setSearchFilter} from '../actions/actionSearch';
import {debounce} from 'throttle-debounce';



const SearchPage = ({setSearchFilter, value}) => {
    const [limitPassed, setLimitPassed] = useState(false);

    const onInputChange = (event) => {
        let searchTerm = event.target.value;
        if(searchTerm.length > 3) {
            setLimitPassed(true);
            debounce(500, setSearchFilter(searchTerm));
        } else {
            setLimitPassed(false);
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
    <form
        onSubmit={onFormSubmit}
        className="input-group">
        <input
            className="form-control"
            placeholder = "Procurar Trabalho"
            onChange={onInputChange}
            value={value}
       />
       {!limitPassed && <p>search term should have min 3 letters</p>}
  </form>
)}

function mapStateToProps({value}) {
    return {
        value
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSearchFilter: (searchTerm)=> dispatch(setSearchFilter(searchTerm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);