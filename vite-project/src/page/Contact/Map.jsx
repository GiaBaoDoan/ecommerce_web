import React from "react";
import GoogleMapReact from "google-map-react";
import icon1 from "../../images/icon/01.png";
import icon2 from "../../images/icon/02.png";
import icon3 from "../../images/icon/03.png";
import icon4 from "../../images/icon/04.png";
const contactList = [
  {
    imgUrl: icon1,
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: icon2,
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: icon3,
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: icon4,
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];
const Map = () => {
  return (
    <div className="w-[90%] mx-auto mt-5">
      <div className="flex space-x-4">
        <div className="bg-white p-2">
          <iframe
            className="w-[850px] h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06227050454!2d-74.30932760401068!3d40.6970192866339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1706251890100!5m2!1svi!2s"
          ></iframe>
        </div>
        {/* contact */}
        <div className="justify-between flex-1 space-y-2 flex flex-col">
          {contactList.map((item, index) => {
            return (
              <div className="bg-white p-5 flex-1 flex items-center space-x-4">
                <img src={item.imgUrl} alt="" />
                <div className="space-y-1">
                  <span className="font-bold">{item.title}</span>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Map;
