import React from "react";
import PageHeader from "../../components/PageHeader";
import Map from "./Map";

const Contact = () => {
  return (
    <div className="font-poppins">
      <PageHeader title={"home"} curPage={"contact"} />
      <div className="bg-[#fcf8f5]">
        <div className="p-[100px]">
          <div className="text-center ">
            <h3 className="tracking-[6px] uppercase text-orange-500">
              Get in touch with us
            </h3>
            <p className="font-bold text-3xl mt-3">
              We're always eager to hear from you
            </p>
          </div>
          {/* map */}
          <Map />
        </div>
      </div>
      {/* form submuit */}
      <div className="text-center p-[100px]">
        <h3 className="tracking-[6px] uppercase text-orange-500">
          Get in touch with us
        </h3>
        <p className="font-bold text-3xl mt-3 w-[55%] capitalize mx-auto text-center">
          Fill the form below so we can get to know you and your needs betters
        </p>
        <form action="" className="mx-auto w-[55%] mt-10 space-y-5">
          <div className="space-x-4 flex justify-center">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-4 border flex-1 outline-none rounded shadow"
            />
            <input
              type="text"
              placeholder="Your Email*"
              className="p-4 border flex-1 outline-none rounded shadow"
            />
          </div>
          <div className="space-x-4 flex justify-center">
            <input
              type="text"
              placeholder="Mobile Number*"
              className="p-4 border flex-1 outline-none rounded shadow"
            />
            <input
              type="text"
              placeholder="Your Subject*"
              className="p-4 flex-1 border outline-none rounded shadow"
            />
          </div>
          <div className="">
            <textarea
              placeholder="Your Message"
              className="w-full h-[200px] rounded shadow outline-none p-3 border"
            ></textarea>
          </div>
          <div>
            <button className="bg-orange-500 py-3 hover:-translate-y-2 transition-all px-4 rounded text-white font-bold">
              Send your message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
