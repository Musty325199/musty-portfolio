import React from "react";

const EmailButton = () => {
  const handleSendEmail = () => {
    
    const email = "mustaphaishola2021@gmail.com";
    const subject = encodeURIComponent("Hello Mustapha Lawal!");
    const body = encodeURIComponent("I need a website for my business/company");
    
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleSendEmail} className="bg-purple-500 w-2/4 md:w-1/4 px-5 py-3 text-white font-semibold text-lg text-center">Say Hello</button>
);
};

export default EmailButton;
