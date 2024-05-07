import React from "react";

const Customer = ({ customers }) => {
  return (
    <div>
      <CustomerProfile
        image={customers.image}
        name={customers.name}
        id={customers.id}
      />
      <CustomerInfo
        birthday={customers.birthday}
        gender={customers.gender}
        job={customers.job}
      />
    </div>
  );
};

export default Customer;

const CustomerProfile = ({ image, name, id }) => {
  return (
    <div>
      <img src={image} alt="profile" />
      <h2>
        {name}&nbsp;({id})
      </h2>
    </div>
  );
};

const CustomerInfo = ({ birthday, gender, job }) => {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
};
