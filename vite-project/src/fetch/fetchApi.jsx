import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
export const register = async (payload) => {
  try {
    const res = await axios.post("http://localhost:8080/register", payload);
    if (res.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res.data,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    return res.data;
  } catch (err) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: err.response.data,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
export const login = async (payload) => {
  try {
    const res = await axios.post("http://localhost:8080/login", payload);
    if (res.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res.data,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: err.response.data,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
