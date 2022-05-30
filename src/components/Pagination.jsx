import React from "react";
import {
  Button,
  ButtonGroup,Select
} from "@chakra-ui/react";
const Pagination = ({ page, setpage, setLimit ,limit,total}) => {
  return (
    <>
      <ButtonGroup>
        <Button
          isDisabled={page <= 1}
          data-cy="pagination-first-button"
          onClick={() => {
            setpage(1);
          }}
        >
          First
        </Button>
        <Button
          isDisabled={page <= 1}
          data-cy="pagination-previous-button"
          onClick={() => (page > 1 ? setpage(page - 1) : setpage(1))}
        >
          Prev
        </Button>
        <Select
          data-cy="pagination-limit-select"
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option data-cy="pagination-limit-3" value={3}>
            3
          </option>
          <option data-cy="pagination-limit-6" value={6}>
            6
          </option>
          <option data-cy="pagination-limit-9" value={9}>
            9
          </option>
        </Select>
        <Button
          isDisabled={page*total<=1}
          data-cy="pagination-next-button"
          onClick={() => (page < 3 ? setpage(page + 1) : setpage(3))}
        >
          Next
        </Button>
        <Button
          data-cy="pagination-last-button"
          onClick={() => (setpage(page+1))}
        >
          Last
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Pagination;
