// import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const handleClick = () => {
  const navigate = useNavigate();
  navigate("/");
};

// function handleClick(event) {
//   event.preventDefault();
//   const navigate = useNavigate();
//   navigate("/");
//   // console.info("You clicked a breadcrumb.");
// }

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick} className="breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="#502314" href="/">
          Home
        </Link>

        <Link
          underline="hover"
          color="#d62300"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Menu
        </Link>
      </Breadcrumbs>
    </div>
  );
}
