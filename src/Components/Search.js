import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap';
import './Search.css'

function Search(props) {
  function handleChange(event) {
    props.setSearchMovie(event.currentTarget.value);
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.history.push("/movies/:id");
  }

    return (
    <div className='d-flex justify-content-center m-auto'>
        <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search Movie" className="input" onKeyDown={onKeyDown} onChange={handleChange}
          value={props.searchMovie} />
      <Button className='Button' variant="outline-success">Search</Button>
    </Form>
    </div>
    )
}

export default Search;