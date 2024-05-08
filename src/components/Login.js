// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     isSignUp: false,
//     usernameOrEmail: "",
//     name: "",
//     password: "",
//     confirmPassword: "",
//     loading: false,
//   });

//   const {
//     isSignUp,
//     usernameOrEmail,
//     name,
//     password,
//     confirmPassword,
//     loading,
//   } = formData;

//   const handleSwitchClick = () => {
//     setFormData({ ...formData, isSignUp: !isSignUp });
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLoginSuccess = () => {
//     toast.success("Login successful!");
//     setTimeout(() => {
//       navigate("/");
//       refreshPage();
//     }, 1000);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       registerRequest();
//     } else {
//       loginRequest();
//     }
//   };

//   const refreshPage = () => {
//     window.location.reload(false);
//   };

//   const loginRequest = async () => {
//     try {
//       setFormData({ ...formData, loading: true });

//       const response = await axios.post("", {
//         email: usernameOrEmail,
//         password,
//       });

//       if (response.status === 200) {
//         const authTokenHeader = response.headers["authorization"];
//         if (authTokenHeader) {
//           const authToken = authTokenHeader.split("Bearer ")[1];
//           localStorage.setItem("authToken", authToken);
//           handleLoginSuccess();
//         } else {
//           throw new Error("Authorization token not found in response");
//         }
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error("Error with login request:", error);
//       if (error.response) {
//         if (error.response.status === 401) {
//           toast.error("Invalid email or password");
//         } else {
//           toast.error("An unexpected error occurred. Please try again later.");
//         }
//       } else if (error.request) {
//         console.error(
//           "No response from server. Please check your internet connection."
//         );
//         toast.error(
//           "No response from server. Please check your internet connection."
//         );
//       } else {
//         console.error("An unexpected error occurred. Please try again later.");
//         toast.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setFormData({ ...formData, loading: false });
//     }
//   };

//   const registerRequest = async () => {
//     try {
//       setFormData({ ...formData, loading: true });

//       const response = await axios.post(
//         "https://skyva-api-1.onrender.com/auth",
//         {
//           user: {
//             name,
//             email: usernameOrEmail,
//             password,
//             password_confirmation: confirmPassword,
//           },
//         }
//       );

//       if (
//         response.status === 201 &&
//         response.data &&
//         response.data.status === "success"
//       ) {
//         toast.success("User created successfully! Please login");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error("Error with registration request:", error);
//       toast.error("An unexpected error occurred. Please try again later.");
//     } finally {
//       setFormData({ ...formData, loading: false });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500">
//       <div className="card">
//         <a className="switch" onClick={handleSwitchClick}>
//           Switch to{" "}
//           <span className={isSignUp ? "login-text" : "signup-text"}>
//             {isSignUp ? "Login" : "Sign Up"}
//           </span>
//         </a>

//         <form onSubmit={handleFormSubmit}>
//           <div className="inputBox">
//             <input
//               type="text"
//               required
//               name="usernameOrEmail"
//               value={usernameOrEmail}
//               onChange={handleInputChange}
//               className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500"
//             />
//             <span className="user">{isSignUp ? "Email" : "Username"}</span>
//           </div>

//           {isSignUp && (
//             <div className="inputBox">
//               <input
//                 type="text"
//                 required
//                 name="name"
//                 value={name}
//                 onChange={handleInputChange}
//                 className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500"
//               />
//               <span>Name</span>
//             </div>
//           )}

//           <div className="inputBox">
//             <input
//               type="password"
//               required
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//               className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500"
//             />
//             <span>Password</span>
//           </div>

//           {isSignUp && (
//             <div className="inputBox">
//               <input
//                 type="password"
//                 required
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleInputChange}
//                 className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500"
//               />
//               <span>Confirm Password</span>
//             </div>
//           )}

//           <button type="submit" className="enter" disabled={loading}>
//             {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    isSignUp: false,
    usernameOrEmail: "",
    name: "",
    password: "",
    confirmPassword: "",
    loading: false,
  });

  const {
    isSignUp,
    usernameOrEmail,
    name,
    password,
    confirmPassword,
    loading,
  } = formData;

  const handleSwitchClick = () => {
    setFormData({ ...formData, isSignUp: !isSignUp });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = () => {
    toast.success("Login successful!");
    setTimeout(() => {
      navigate("/");
      refreshPage();
    }, 1000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      registerRequest();
    } else {
      loginRequest();
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const loginRequest = async () => {
    try {
      setFormData({ ...formData, loading: true });

      const response = await axios.post("", {
        email: usernameOrEmail,
        password,
      });

      if (response.status === 200) {
        const authTokenHeader = response.headers["authorization"];
        if (authTokenHeader) {
          const authToken = authTokenHeader.split("Bearer ")[1];
          localStorage.setItem("authToken", authToken);
          handleLoginSuccess();
        } else {
          throw new Error("Authorization token not found in response");
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error with login request:", error);
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Invalid email or password");
        } else {
          toast.error("An unexpected error occurred. Please try again later.");
        }
      } else if (error.request) {
        console.error(
          "No response from server. Please check your internet connection."
        );
        toast.error(
          "No response from server. Please check your internet connection."
        );
      } else {
        console.error("An unexpected error occurred. Please try again later.");
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setFormData({ ...formData, loading: false });
    }
  };

  const registerRequest = async () => {
    try {
      setFormData({ ...formData, loading: true });

      const response = await axios.post(
        "https://skyva-api-1.onrender.com/auth",
        {
          user: {
            name,
            email: usernameOrEmail,
            password,
            password_confirmation: confirmPassword,
          },
        }
      );

      if (
        response.status === 201 &&
        response.data &&
        response.data.status === "success"
      ) {
        toast.success("User created successfully! Please login");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error with registration request:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setFormData({ ...formData, loading: false });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <a className="text-indigo-500" onClick={handleSwitchClick}>
          Switch to{" "}
          <span className={isSignUp ? "text-purple-500" : "text-indigo-500"}>
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </a>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="text"
              required
              name="usernameOrEmail"
              value={usernameOrEmail}
              onChange={handleInputChange}
              className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500 w-full"
              placeholder={isSignUp ? "Email" : "Username"}
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <input
                type="text"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
                className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500 w-full"
                placeholder="Name"
              />
            </div>
          )}

          <div className="mb-4">
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
              className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500 w-full"
              placeholder="Password"
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <input
                type="password"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                className="border-b-2 border-indigo-500 p-2 outline-none focus:border-purple-500 w-full"
                placeholder="Confirm Password"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );

};

export default Login;
