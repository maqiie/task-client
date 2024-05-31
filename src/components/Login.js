// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";


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
//       navigate("/profile");
//     }, 1000);
//   };
  

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await loginRequest(usernameOrEmail, password, setFormData); // Pass setFormData as an argument
//     } catch (error) {
//       // setError("An unexpected error occurred. Please try again later.");
//       console.error("Error with login request:", error);
//     }
//   };

//   const refreshPage = () => {
//     window.location.reload(false);
//   };

//   const loginRequest = async (usernameOrEmail, password, setFormData) => {
//     try {
//       // Set loading to true
//       setFormData({ ...formData, loading: true });

//       // Make login request
//       const response = await axios.post("http://localhost:3001/auth/sign_in", {
//         email: usernameOrEmail,
//         password,
//       });

//       // Check response status
//       if (response.status === 200) {
//         const authTokenHeader = response.headers["authorization"];
//         if (authTokenHeader) {
//           // Extract and store the authorization token
//           const authToken = authTokenHeader.split("Bearer ")[1];
//           localStorage.setItem("authToken", authToken);
//           // Optionally handle successful login here
//           handleLoginSuccess();

//         } else {
//           throw new Error("Authorization token not found in response");
//         }
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error("Error with login request:", error);
//       // Handle different types of errors
//       if (error.response && error.response.status === 401) {
//         toast.error("Invalid email or password");
//       } else if (error.response) {
//         toast.error("An unexpected error occurred. Please try again later.");
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
//       // Set loading back to false
//       setFormData({ ...formData, loading: false });
//     }
//   };

//   const registerRequest = async () => {
//     try {
//       setFormData({ ...formData, loading: true });

//       const response = await axios.post("http://localhost:3001/auth", {
//         user: {
//           name,
//           email: usernameOrEmail,
//           password,
//           password_confirmation: confirmPassword,
//         },
//       });

//       console.log("Registration response:", response); // Log the response object

//       if (
//         (response.status === 201 || response.status === 200) &&
//         response.data &&
//         response.data.status === "success"
//       ) {
//         console.log("Registration successful:", response.data); // Log the response data
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
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded shadow-md">
//         <a
//           className="block text-center mb-4 text-blue-500"
//           onClick={handleSwitchClick}
//         >
//           Switch to{" "}
//           <span className={isSignUp ? "text-purple-500" : "text-blue-500"}>
//             {isSignUp ? "Login" : "Sign Up"}
//           </span>
//         </a>

//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4">
//             <input
//               type="text"
//               required
//               name="usernameOrEmail"
//               value={usernameOrEmail}
//               onChange={handleInputChange}
//               className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
//               placeholder={isSignUp ? "Email" : "Username"}
//             />
//           </div>

//           {isSignUp && (
//             <div className="mb-4">
//               <input
//                 type="text"
//                 required
//                 name="name"
//                 value={name}
//                 onChange={handleInputChange}
//                 className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
//                 placeholder="Name"
//               />
//             </div>
//           )}

//           <div className="mb-4">
//             <input
//               type="password"
//               required
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//               className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
//               placeholder="Password"
//             />
//           </div>

//           {isSignUp && (
//             <div className="mb-4">
//               <input
//                 type="password"
//                 required
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleInputChange}
//                 className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
//                 placeholder="Confirm Password"
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded w-full"
//             disabled={loading}
//           >
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
      navigate("/profile");
    }, 1000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      await registerRequest();
    } else {
      await loginRequest(usernameOrEmail, password, setFormData);
    }
  };

  const loginRequest = async (usernameOrEmail, password, setFormData) => {
    try {
      // Set loading to true
      setFormData({ ...formData, loading: true });

      console.log("Sending login request...");
      console.log("Data:", { email: usernameOrEmail, password });

      // Make login request
      const response = await axios.post("http://localhost:3001/auth/sign_in", {
        email: usernameOrEmail,
        password,
      });

      console.log("Login response:", response);

      // Check response status
      if (response.status === 200) {
        const authTokenHeader = response.headers["authorization"];
        if (authTokenHeader) {
          // Extract and store the authorization token
          const authToken = authTokenHeader.split("Bearer ")[1];
          localStorage.setItem("authToken", authToken);
          // Optionally handle successful login here
          handleLoginSuccess();
        } else {
          throw new Error("Authorization token not found in response");
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error with login request:", error);
      // Handle different types of errors
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password");
      } else if (error.response) {
        toast.error("An unexpected error occurred. Please try again later.");
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
      // Set loading back to false
      setFormData({ ...formData, loading: false });
    }
  };

  const registerRequest = async () => {
    try {
      setFormData({ ...formData, loading: true });

      console.log("Sending registration request...");
      console.log("Data:", {
        user: {
          name,
          email: usernameOrEmail,
          password,
          password_confirmation: confirmPassword,
        },
      });

      const response = await axios.post("http://localhost:3001/auth", {
        user: {
          name,
          email: usernameOrEmail,
          password,
          password_confirmation: confirmPassword,
        },
      });

      console.log("Registration response:", response); // Log the response object

      if (
        (response.status === 201 || response.status === 200) &&
        response.data &&
        response.data.status === "success"
      ) {
        console.log("Registration successful:", response.data); // Log the response data
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <a
          className="block text-center mb-4 text-blue-500"
          onClick={handleSwitchClick}
        >
          Switch to{" "}
          <span className={isSignUp ? "text-purple-500" : "text-blue-500"}>
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
              className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
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
                className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
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
              className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
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
                className="border-b-2 border-blue-500 p-2 outline-none focus:border-purple-500 w-full"
                placeholder="Confirm Password"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
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
