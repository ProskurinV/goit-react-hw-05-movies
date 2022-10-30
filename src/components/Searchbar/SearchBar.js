import PropTypes from 'prop-types';
import { Suspense } from 'react';
import React from 'react';
import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { Search, FormEl, Input, BtnSearch } from './SearchBar.styled';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar({ onSubmit }) {
  const [searchParams] = useSearchParams();

  const handleSubmit = async (values, actions) => {
    await onSubmit(values);

    actions.setSubmitting(false);
  };
  return (
    <Search as="main">
      <Formik
        initialValues={{ query: searchParams.get('query') || '' }}
        onSubmit={handleSubmit}
      >
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Search>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
