import React, { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-2xl font-semibold p-0.5 m-0.5 text-green-500">
        {title}
      </h3>
      {isVisible ? (
        <button
          className="cursor-pointer border rounded-md bg-red-500 font-light p-2 m-0.5"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer border rounded-md bg-amber-500 font-light p-2 m-0.5"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible && <p className="text-base">{description}</p>}

      {/*we used description as props.Bcz if we hardcoded we won't use it for others*/}
    </div>
  );
};
const Instamart = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold p-2 m-2">Instamart</h1>
      <Section
        title={"AboutInstamart"}
        description={
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem at officia quaerat quis modi itaque minus iste consequatur, reiciendis quasi deserunt magni autem nisi obcaecati pariatur culpa asperiores ex!"
        }
      />
      <Section
        title={"TeamInstamart"}
        description={
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem at officia quaerat quis modi itaque minus iste consequatur, reiciendis quasi deserunt magni autem nisi obcaecati pariatur culpa asperiores ex!"
        }
      />
      <Section
        title={"CareersInstamart"}
        description={
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti exercitationem at officia quaerat quis modi itaque minus iste consequatur, reiciendis quasi deserunt magni autem nisi obcaecati pariatur culpa asperiores ex!"
        }
      />

      {/*<AboutInstamart/>
      <TeamInstamart/>
      <CareersInstamart/>
      */}
    </div>
  );
};

export default Instamart;
