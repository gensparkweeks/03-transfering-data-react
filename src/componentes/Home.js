import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="create">Click to create a contact</Link>
      <Link to="read">Click to read contact info</Link>
    </div>
  );
}

export default Home;