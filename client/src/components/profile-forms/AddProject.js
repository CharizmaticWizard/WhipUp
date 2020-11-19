import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProject } from '../../actions/profile';

const AddProject = ({ addProject, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    date: '',
    tags: '',
    description: '',
  });

  const { title, tags, date, link, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add A Project</h1>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addProject(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Project Title'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Tags'
            name='tags'
            value={tags}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Link'
            name='link'
            value={link}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>Date</h4>
          <input type='date' name='date' value={date} onChange={onChange} />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Project Description'
            value={description}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired,
};

export default connect(null, { addProject })(AddProject);
