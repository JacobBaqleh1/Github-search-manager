import { NavLink } from "react-router-dom";
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          marginRight: "2rem",
        }}
      >
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/SavedCandidates">Saved Candidates</NavLink>
      </div>
    </div>
  );
};

export default Nav;
