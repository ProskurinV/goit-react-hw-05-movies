import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { Search, FormEl, Input, BtnSearch } from './SearchBar.styled';
import { Outlet } from 'react-router-dom';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);

    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Search as="main">
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormEl>
            <BtnSearch type="submit" disabled={isSubmitting}>
              <AiOutlineSearch size={20} />
            </BtnSearch>

            <Input
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </FormEl>
        )}
      </Formik>

      <Outlet />
    </Search>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
