import PropTypes from 'prop-types';

export const CategoryType = {
  id: PropTypes.string,
  createdOn: PropTypes.instanceOf(Date),
  content: PropTypes.string,
};

export default { CategoryType };
