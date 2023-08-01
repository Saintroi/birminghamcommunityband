import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import donate from "../../img/donate-paypal.png";


const Wrap = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-height: 350px;
  max-width: 1000px;

  div{
    align-self: center;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  img{
    align-self: center;
  }
`;

let counter = 0;

const generateId = () => {
  return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

const DonateButton = () => {
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  useEffect(() => {
    const button = window.PayPal.Donation.Button({
      env: "production",
      hosted_button_id: "3YDGZ9VV9E68L",
      image: {
        src: donate,
        alt: "Donate with PayPal button",
        title: "PayPal - The safer, easier way to pay online!",
      },
    });
    button.render(`#${buttonRef.current.id}`); // you can change the code and run it when DOM is ready
  }, []);

  return (
    <Wrap>
      <div ref={buttonRef} id={buttonId} />
    </Wrap>
  );
};

export default DonateButton;
