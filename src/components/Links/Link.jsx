import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="ml-7 hover:bg-red-800 p-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.PropTypes = {
  route: PropTypes.object,
};

export default Link;
