import { TableCell, TableRow } from "@mui/material";
import React from "react";

const Customer = ({ customers }) => {
  return (
    <TableRow>
      <TableCell>{customers.id}</TableCell>
      <TableCell>
        <img src={customers.image} alt="profile" />
      </TableCell>
      <TableCell>{customers.name}</TableCell>
      <TableCell>{customers.birthday}</TableCell>
      <TableCell>{customers.gender}</TableCell>
      <TableCell>{customers.job}</TableCell>
    </TableRow>
  );
};

export default Customer;

// const CustomerProfile = ({ image, name, id }) => {
//   return (
//     <div>
//       <img src={image} alt="profile" />
//       <h2>
//         {name}&nbsp;({id})
//       </h2>
//     </div>
//   );
// };

// const CustomerInfo = ({ birthday, gender, job }) => {
//   return (
//     <div>
//       <p>{birthday}</p>
//       <p>{gender}</p>
//       <p>{job}</p>
//     </div>
//   );
// };
