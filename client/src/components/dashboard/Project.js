import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/profile';

const Project = ({ project, deleteProject }) => {
  const projects = project.map((pro) => (
    <tr key={pro._id}>
      <td>{pro.title}</td>
      <td className='hide-sm'>{pro.tags}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{moment.utc(pro.date)}</Moment>
      </td>
      <td className='hide-sm'>{pro.description}</td>
      <td className='hide-sm'>{pro.link}</td>
      <td>
        <button
          onClick={() => deleteProject(pro._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Projects</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th className='hide-sm'>Tags</th>
            <th className='hide-sm'>Date</th>
            <th className='hide-sm'>Description</th>
            <th className='hide-sm'>Link</th>
            <th />
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.array.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(Project);
