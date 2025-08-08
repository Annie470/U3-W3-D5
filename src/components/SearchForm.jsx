
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/actions/searchActions";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subForm = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(setSearch(inputValue));
      navigate("/risultati");
    }
  };

  return (
    <Form onSubmit={subForm} className="d-flex">
      <Form.Control
        type="text"
        placeholder="Cerca"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="me-2 white-placeholder text-center"
      />
    </Form>
  );
};

export default SearchForm;
