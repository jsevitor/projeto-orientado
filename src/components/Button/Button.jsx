import { Link } from "react-router-dom";
import { Btn } from "./Styles";

export default function Button({ label, to }) {
  if (to) {
    return (
      <Btn>
        <Link to={to} className="btn">
          {label}
        </Link>
      </Btn>
    );
  }

  return <Btn className="btn">{label}</Btn>;
}
