import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileProject = ({
  project: { title, tags, date, description, link },
}) => (
  <div>
    <h3 className='text-dark'>{title}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{moment.utc(date)}</Moment>
    </p>
    <p>
      <strong>Tags: </strong> {tags}
    </p>
    <p>
      <strong>Link: </strong> {link}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProfileProject;
