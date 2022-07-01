import React from 'react';

const categoryArray = ['Adventure', 'Romance', 'Action'];

const AddBookForm = () => {
  console.log('AddBookForm');
  return (
    <form>
      <div>
        <label htmlFor="title">
          <input type="text" name="title" id="title" />
        </label>
      </div>
      <div>
        <label htmlFor="author">
          <input type="text" name="author" id="author" />
        </label>
      </div>
      <div>
        <label htmlFor="category">
          <select>
            {categoryArray.map((category) => (
              <option key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

      </div>
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBookForm;
