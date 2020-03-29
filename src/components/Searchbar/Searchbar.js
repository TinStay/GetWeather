import React from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import classes from './Searchbar.module.css'

const Searchbar = (props) =>{
    return (
        <form onSubmit={props.search} className={classes.Searchbar}>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="e.g California"
            type="text"
            onChange={props.changeKeyword}
            aria-label="searchbar"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button type="submit" variant="danger">Search</Button>
            </InputGroup.Append>
        </InputGroup>
        </form>
    )
}


export default Searchbar;