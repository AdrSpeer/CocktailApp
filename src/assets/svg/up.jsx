import { HashLink } from "react-router-hash-link";
const Up = () => {
  return (
    <HashLink smooth to="/#home">
      <img className="up" src="/svg/upperarrow.svg" alt="" />
    </HashLink>
  );
};

export default Up;
