import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap';
import './Search.css'

function Search() {
    return (
    <div className='d-flex justify-content-center m-auto'>
        <Form inline>
      <FormControl type="text" placeholder="Search Movie" className="input" />
      <Button className='Button' variant="outline-success">Search</Button>
    </Form>
    </div>
    )
}

export default Search;