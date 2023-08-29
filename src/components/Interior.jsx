import React from "react";
import {
  BsFillCalendarDateFill,
  BsArrowRight,
  BsFillMapFill,
} from "react-icons/bs";

function Interior(props) {
  return (
    <div className="text-slate-600 font-light mb-10">
      <p className="text-2xl mb-3 font-extrabold text-black">{props.name}</p>
      <hr />

      <small className="my-10 flex items-center gap-3">
        <BsFillCalendarDateFill /> {props.date}
      </small>
      <p className="flex items-center gap-3 text-2xl mb-3 font-extrabold text-black hover:text-[#ff565b] transition duration-150">
        {props.workplace} <BsArrowRight />
      </p>
      <div className="w-[40vw]">
        <p className="flex items-center gap-3">
          <BsFillMapFill /> {props.location}
        </p>
        <div className="flex justify-end">
        <small className="w-64">{props.descriptionStart}</small>
        </div>
        <p>{props.descriptionEnd}</p>
      </div>
    </div>
  );
}

export default Interior;
