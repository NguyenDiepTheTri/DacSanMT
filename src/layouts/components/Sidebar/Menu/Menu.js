import PropTypes from 'prop-types';

// children là prop
function Menu({ children }) {
  return <nav>{children}</nav>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;
