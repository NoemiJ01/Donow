import React from "react";

function ButtonCard(props) {
  console.log(props.student);
  return (
    <div className="Card">
      {/* Put the name here */}
      <h3>{props.student.name}</h3>
      {/* Put the activities here */}
      <p>{props.student.activties}</p>
      {/* Put the quote here */}
      <p>{props.student.seniorQuote}</p>
    </div>
  );
}

export default ButtonCard;
