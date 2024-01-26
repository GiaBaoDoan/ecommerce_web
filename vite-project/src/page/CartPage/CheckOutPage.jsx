import React from "react";
import { Modal, Tabs } from "antd";
import PaypalMethod from "./PaypalMethod";
import VisaMethod from "./VisaMethod";
const CheckOutPage = ({ isModalOpen, handleOk, handleCancel }) => {
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: (
        <div className="flex-1">
          <img
            className="w-[100px]"
            src="https://accessibleromania.com/wp-content/uploads/2021/08/visa-mastercard-icon-9.png"
            alt=""
          />
        </div>
      ),
      children: <VisaMethod />,
    },
    {
      key: "2",
      label: (
        <img
          className="w-[100px]"
          src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_lim.size_1050x591.v1602794215.png"
          alt=""
        />
      ),
      children: <PaypalMethod />,
    },
  ];
  return (
    <div className="font-poppins">
      <Modal
        title={
          <p className="text-center text-xl">Select Your Patment Method</p>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
