// import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { Search, FormEl, Input, BtnSearch, Details } from './Movies.styled';
import { Outlet } from 'react-router-dom';

export default function Movies({ onSubmit }) {
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
      <Details>Movie details</Details>
      <Outlet />
    </Search>
  );
}
