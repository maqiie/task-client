// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserProfile = ({ userData, onLogout }) => {
//   const [formData, setFormData] = useState({
//     name: userData?.name || "",
//     nickname: userData?.nickname || "",
//     email: userData?.email || "",
//     birthday: userData?.birthday || "",
//     role: userData?.role || "",
//     uid: userData?.uid || "",
//   });

//   const calculateDaysUntilBirthday = () => {
//     if (!formData.birthday) return null;

//     const today = new Date();
//     const birthday = new Date(formData.birthday);

//     birthday.setFullYear(today.getFullYear());

//     if (birthday < today) {
//       birthday.setFullYear(today.getFullYear() + 1);
//     }

//     const diffTime = birthday.getTime() - today.getTime();
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     return diffDays;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataWithImage = new FormData();
//       formDataWithImage.append("user[name]", formData.name);
//       formDataWithImage.append("user[nickname]", formData.nickname);
//       formDataWithImage.append("user[email]", formData.email);
//       formDataWithImage.append("user[birthday]", formData.birthday);
//       formDataWithImage.append("user[role]", formData.role);
//       formDataWithImage.append("user[uid]", formData.uid);
//       formDataWithImage.append("user[image]", formData.image); // Ensure the key is "user[image]"

//       const response = await axios.patch(
//         "http://localhost:3001/auth",
//         formDataWithImage,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Assuming the response contains updated tokens, update the tokens in local storage
//       if (response.headers["access-token"]) {
//         localStorage.setItem("authToken", response.headers["access-token"]);
//       }

//       toast.success("Profile updated successfully", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     } catch (error) {
//       console.error("Error updating profile", error);
//       toast.error("Failed to update profile", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   // const handleImageChange = (e) => {
//   //   const file = e.target.files[0];
//   //   setFormData({ ...formData, image: file });
//   // };
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       style={{
//         maxWidth: "28rem",
//         margin: "auto",
//         background: "linear-gradient(to right, #4f46e5, #6b21a8)",
//         padding: "1.5rem 2rem",
//         borderRadius: "0.5rem",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
//         <div
//           style={{
//             position: "relative",
//             display: "inline-block",
//             marginBottom: "1rem",
//           }}
//         >
//           <div style={{ position: "relative" }}>
//             <img
//               style={{
//                 display: "block",
//                 width: "6rem",
//                 height: "6rem",
//                 borderRadius: "9999px",
//                 border: "4px solid white",
//                 margin: "auto",
//               }}
//               src={
//                 formData.image
//                   ? URL.createObjectURL(formData.image)
//                   : "placeholder.png"
//               }
//               alt="User profile"
//             />

//             <div
//               style={{
//                 position: "absolute",
//                 inset: "0",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "rgba(0, 0, 0, 0.5)",
//                 borderRadius: "9999px",
//               }}
//             >
//               <label htmlFor="imageUpload">
//                 <svg
//                   style={{
//                     width: "3rem",
//                     height: "3rem",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                   />
//                 </svg>
//               </label>
//               <input
//                 id="imageUpload"
//                 name="image"
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </div>
//           </div>
//         </div>
//         <h2
//           style={{
//             fontSize: "1.875rem",
//             fontWeight: 600,
//             color: "#1f2937",
//             marginBottom: "0.5rem",
//           }}
//         >
//           {formData.name}
//         </h2>
//         <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
//           {formData.email}
//         </p>
//         <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
//           Nickname: {formData.nickname}
//         </p>
//         {formData.birthday ? (
//           <>
//             <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
//               Birthday:{" "}
//               {new Date(formData.birthday).toLocaleDateString("en-US", {
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//             <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
//               Days until birthday: {calculateDaysUntilBirthday()}
//             </p>
//           </>
//         ) : (
//           <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
//             No birthday set. Please set your birthday.
//           </p>
//         )}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             style={{
//               display: "block",
//               color: "#374151",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               marginBottom: "0.5rem",
//             }}
//             htmlFor="name"
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             style={{
//               boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//               appearance: "none",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               width: "100%",
//               padding: "0.5rem 0.75rem",
//               color: "#374151",
//               outline: "none",
//               transition: "box-shadow 0.2s",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             style={{
//               display: "block",
//               color: "#374151",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               marginBottom: "0.5rem",
//             }}
//             htmlFor="nickname"
//           >
//             Nickname
//           </label>
//           <input
//             id="nickname"
//             name="nickname"
//             type="text"
//             value={formData.nickname}
//             onChange={handleChange}
//             style={{
//               boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//               appearance: "none",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               width: "100%",
//               padding: "0.5rem 0.75rem",
//               color: "#374151",
//               outline: "none",
//               transition: "box-shadow 0.2s",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             style={{
//               display: "block",
//               color: "#374151",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               marginBottom: "0.5rem",
//             }}
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{
//               boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//               appearance: "none",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               width: "100%",
//               padding: "0.5rem 0.75rem",
//               color: "#374151",
//               outline: "none",
//               transition: "box-shadow 0.2s",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             style={{
//               display: "block",
//               color: "#374151",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               marginBottom: "0.5rem",
//             }}
//             htmlFor="birthday"
//           >
//             Birthday
//           </label>
//           <input
//             id="birthday"
//             name="birthday"
//             type="date"
//             value={formData.birthday}
//             onChange={handleChange}
//             style={{
//               boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//               appearance: "none",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               width: "100%",
//               padding: "0.5rem 0.75rem",
//               color: "#374151",
//               outline: "none",
//               transition: "box-shadow 0.2s",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             style={{
//               display: "block",
//               color: "#374151",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               marginBottom: "0.5rem",
//             }}
//             htmlFor="role"
//           >
//             Role
//           </label>
//           <input
//             id="role"
//             name="role"
//             type="text"
//             value={formData.role}
//             onChange={handleChange}
//             style={{
//               boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//               appearance: "none",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               width: "100%",
//               padding: "0.5rem 0.75rem",
//               color: "#374151",
//               outline: "none",
//               transition: "box-shadow 0.2s",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             style={{
//               display: "block",
//               color: "#374151",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               marginBottom: "0.5rem",
//             }}
//             htmlFor="uid"
//           >
//             UID
//           </label>
//           <input
//             id="uid"
//             name="uid"
//             type="text"
//             value={formData.uid}
//             onChange={handleChange}
//             disabled
//             style={{
//               boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//               appearance: "none",
//               border: "1px solid #d1d5db",
//               borderRadius: "0.375rem",
//               width: "100%",
//               padding: "0.5rem 0.75rem",
//               color: "#374151",
//               outline: "none",
//               transition: "box-shadow 0.2s",
//             }}
//           />
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#3b82f6",
//               color: "white",
//               fontWeight: 700,
//               padding: "0.5rem 1rem",
//               borderRadius: "0.375rem",
//               cursor: "pointer",
//               transition: "background-color 0.2s",
//             }}
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//       <div style={{ marginTop: "1.5rem" }}>
//         <button
//           onClick={onLogout}
//           style={{
//             backgroundColor: "#ef4444",
//             color: "white",
//             padding: "0.5rem 1rem",
//             borderRadius: "0.375rem",
//             width: "100%",
//             cursor: "pointer",
//             transition: "background-color 0.2s",
//           }}
//         >
//           Logout
//         </button>
//       </div>
//       <ToastContainer />
//     </motion.div>
//   );
// };

// export default UserProfile;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const apiBaseUrl = "http://localhost:3001";
// const defaultImage = "./placeholder.png"; // Define your default image URL

// const UserProfile = ({ userData, onLogout }) => {
//   const [formData, setFormData] = useState({
//     name: userData?.name || "",
//     nickname: userData?.nickname || "",
//     email: userData?.email || "",
//     birthday: userData?.birthday || "",
//     role: userData?.role || "",
//     uid: userData?.uid || "",
//     image_url: userData?.image_url || "", // Corrected to match the backend structure
//   });

//   // Log formData.image_url to check its value
//   useEffect(() => {
//     console.log("Image URL:", formData.image_url);
//   }, [formData]);

//   const calculateDaysUntilBirthday = () => {
//     if (!formData.birthday) return null;

//     const today = new Date();
//     const birthday = new Date(formData.birthday);

//     birthday.setFullYear(today.getFullYear());

//     if (birthday < today) {
//       birthday.setFullYear(today.getFullYear() + 1);
//     }

//     const diffTime = birthday.getTime() - today.getTime();
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     return diffDays;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       // Handle image file upload
//       const file = files[0];
//       setFormData({ ...formData, image: file });

//       // Optionally, you can also update imageUrl for preview (if needed)
//       const imageUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, imageUrl: imageUrl });
//     } else {
//       // Handle other form fields
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataWithImage = new FormData();
//       formDataWithImage.append("user[name]", formData.name);
//       formDataWithImage.append("user[nickname]", formData.nickname);
//       formDataWithImage.append("user[email]", formData.email);
//       formDataWithImage.append("user[birthday]", formData.birthday);
//       formDataWithImage.append("user[role]", formData.role);
//       formDataWithImage.append("user[uid]", formData.uid);
//       formDataWithImage.append("user[image]", formData.image); // Ensure the key is "user[image]"

//       const response = await axios.patch(
//         `${apiBaseUrl}/auth`,
//         formDataWithImage,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Assuming the response contains updated tokens, update the tokens in local storage
//       if (response.headers["access-token"]) {
//         localStorage.setItem("authToken", response.headers["access-token"]);
//       }

//       toast.success("Profile updated successfully", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     } catch (error) {
//       console.error("Error updating profile", error);
//       toast.error("Failed to update profile", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file });

//     // Optionally, update imageUrl for preview (if needed)
//     const imageUrl = URL.createObjectURL(file);
//     setFormData({ ...formData, imageUrl: imageUrl });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       style={{
//         maxWidth: "28rem",
//         margin: "auto",
//         background: "linear-gradient(to right, #4f46e5, #6b21a8)",
//         padding: "1.5rem 2rem",
//         borderRadius: "0.5rem",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
//         <div
//           style={{
//             position: "relative",
//             display: "inline-block",
//             marginBottom: "1rem",
//           }}
//         >
//           <img
//             style={{
//               display: "block",
//               width: "200px",
//               height: "200px",
//               borderRadius: "50%",
//               objectFit: "cover",
//             }}
//             src={`${apiBaseUrl}${formData.image_url}`}
//             alt="User Profile"
//             className="user-profile-image"
//             onLoad={() => console.log("Image loaded successfully")}
//             onError={(e) => {
//               console.error("Image loading error:", e);
//               e.target.src = defaultImage; // Set default image if loading fails
//             }}
//           />

//           <div
//             style={{
//               position: "absolute",
//               inset: "0",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               borderRadius: "9999px",
//             }}
//           >
//             <label htmlFor="imageUpload">
//               <svg
//                 style={{
//                   width: "3rem",
//                   height: "3rem",
//                   color: "white",
//                   cursor: "pointer",
//                 }}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                 />
//               </svg>
//             </label>
//             <input
//               id="imageUpload"
//               name="image"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </div>
//         </div>
//         <h2
//           style={{
//             fontSize: "1.875rem",
//             fontWeight: 600,
//             color: "#1f2937",
//             marginBottom: "0.5rem",
//           }}
//         >
//           {formData.name}
//         </h2>
//         <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
//           {formData.email}
//         </p>
//         <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
//           {formData.role}
//         </p>
//         <button
//           onClick={onLogout}
//           style={{
//             background: "#ffffff",
//             color: "#6b21a8",
//             fontWeight: 600,
//             padding: "0.75rem 1.5rem",
//             border: "none",
//             borderRadius: "0.5rem",
//             cursor: "pointer",
//             transition: "background 0.3s ease",
//           }}
//         >
//           Log Out
//         </button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="name"
//             style={{
//               display: "block",
//               fontSize: "1rem",
//               marginBottom: "0.5rem",
//               color: "#d1d5db",
//             }}
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #d1d5db",
//               background: "transparent",
//               color: "#d1d5db",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="nickname"
//             style={{
//               display: "block",
//               fontSize: "1rem",
//               marginBottom: "0.5rem",
//               color: "#d1d5db",
//             }}
//           >
//             Nickname
//           </label>
//           <input
//             id="nickname"
//             name="nickname"
//             type="text"
//             value={formData.nickname}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #d1d5db",
//               background: "transparent",
//               color: "#d1d5db",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="email"
//             style={{
//               display: "block",
//               fontSize: "1rem",
//               marginBottom: "0.5rem",
//               color: "#d1d5db",
//             }}
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #d1d5db",
//               background: "transparent",
//               color: "#d1d5db",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="birthday"
//             style={{
//               display: "block",
//               fontSize: "1rem",
//               marginBottom: "0.5rem",
//               color: "#d1d5db",
//             }}
//           >
//             Birthday
//           </label>
//           <input
//             id="birthday"
//             name="birthday"
//             type="date"
//             value={formData.birthday}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #d1d5db",
//               background: "transparent",
//               color: "#d1d5db",
//             }}
//             required
//           />
//           {formData.birthday && (
//             <p style={{ color: "#d1d5db", marginTop: "0.5rem" }}>
//               {calculateDaysUntilBirthday()} days until birthday
//             </p>
//           )}
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="role"
//             style={{
//               display: "block",
//               fontSize: "1rem",
//               marginBottom: "0.5rem",
//               color: "#d1d5db",
//             }}
//           >
//             Role
//           </label>
//           <input
//             id="role"
//             name="role"
//             type="text"
//             value={formData.role}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #d1d5db",
//               background: "transparent",
//               color: "#d1d5db",
//             }}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "0.75rem 1.5rem",
//             fontSize: "1rem",
//             background: "#6b21a8",
//             color: "#ffffff",
//             fontWeight: 600,
//             border: "none",
//             borderRadius: "0.5rem",
//             cursor: "pointer",
//             transition: "background 0.3s ease",
//           }}
//         >
//           Update Profile
//         </button>
//       </form>
//       <ToastContainer />
//     </motion.div>
//   );
// };

// export default UserProfile;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const apiBaseUrl = "http://localhost:3001";
// const defaultImage = "/placeholder.png"; // Update with your default image URL

// const UserProfile = ({ userData, onLogout }) => {
//   const [formData, setFormData] = useState({
//     name: userData?.name || "",
//     nickname: userData?.nickname || "",
//     email: userData?.email || "",
//     birthday: userData?.birthday || "",
//     role: userData?.role || "",
//     uid: userData?.uid || "",
//     image_url: userData?.image_url || "", // Adjusted to match backend structure
//   });

//   useEffect(() => {
//     console.log("Image URL:", formData.image_url);
//   }, [formData]);

//   const calculateDaysUntilBirthday = () => {
//     if (!formData.birthday) return null;

//     const today = new Date();
//     const birthday = new Date(formData.birthday);
//     birthday.setFullYear(today.getFullYear());

//     if (birthday < today) {
//       birthday.setFullYear(today.getFullYear() + 1);
//     }

//     const diffTime = birthday.getTime() - today.getTime();
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     return diffDays;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       const file = files[0];
//       setFormData({ ...formData, image: file });

//       const imageUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, imageUrl: imageUrl });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataWithImage = new FormData();
//       formDataWithImage.append("user[name]", formData.name);
//       formDataWithImage.append("user[nickname]", formData.nickname);
//       formDataWithImage.append("user[email]", formData.email);
//       formDataWithImage.append("user[birthday]", formData.birthday);
//       formDataWithImage.append("user[role]", formData.role);
//       formDataWithImage.append("user[uid]", formData.uid);
//       formDataWithImage.append("user[image]", formData.image);

//       const response = await axios.patch(
//         `${apiBaseUrl}/auth`,
//         formDataWithImage,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.headers["access-token"]) {
//         localStorage.setItem("authToken", response.headers["access-token"]);
//       }

//       toast.success("Profile updated successfully", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     } catch (error) {
//       console.error("Error updating profile", error);
//       toast.error("Failed to update profile", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file });

//     const imageUrl = URL.createObjectURL(file);
//     setFormData({ ...formData, imageUrl: imageUrl });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       style={{
//         maxWidth: "28rem",
//         margin: "auto",
//         background: "linear-gradient(to right, #4f46e5, #6b21a8)",
//         padding: "1.5rem 2rem",
//         borderRadius: "0.5rem",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
//         <div
//           style={{
//             position: "relative",
//             display: "inline-block",
//             marginBottom: "1rem",
//           }}
//         >
//           <img
//             style={{
//               display: "block",
//               width: "200px",
//               height: "200px",
//               borderRadius: "50%",
//               objectFit: "cover",
//               border: "5px solid #ffffff",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//             src={formData.image_url || defaultImage}
//             alt="User Profile"
//             className="user-profile-image"
//             onLoad={() => console.log("Image loaded successfully")}
//             onError={(e) => {
//               console.error("Image loading error:", e);
//               e.target.src = defaultImage;
//             }}
//           />

//           <div
//             style={{
//               position: "absolute",
//               inset: "0",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(0, 0, 0, 0.5)",
//               borderRadius: "50%",
//               cursor: "pointer",
//             }}
//           >
//             <label htmlFor="imageUpload">
//               <svg
//                 style={{
//                   width: "3rem",
//                   height: "3rem",
//                   color: "white",
//                   cursor: "pointer",
//                 }}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                 />
//               </svg>
//             </label>
//             <input
//               id="imageUpload"
//               name="image"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </div>
//         </div>
//         <h2
//           style={{
//             fontSize: "2.5rem",
//             fontWeight: 600,
//             color: "#ffffff",
//             marginBottom: "0.5rem",
//             textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//           }}
//         >
//           {formData.name}
//         </h2>
//         <p style={{ color: "#ffffff", marginBottom: "0.5rem" }}>
//           {formData.email}
//         </p>
//         <p style={{ color: "#ffffff", marginBottom: "1.5rem" }}>
//           {formData.role}
//         </p>
//         <button
//           onClick={onLogout}
//           style={{
//             background: "#ffffff",
//             color: "#6b21a8",
//             fontWeight: 600,
//             padding: "0.75rem 1.5rem",
//             border: "none",
//             borderRadius: "0.5rem",
//             cursor: "pointer",
//             transition: "background 0.3s ease",
//           }}
//         >
//           Log Out
//         </button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="name"
//             style={{
//               display: "block",
//               fontSize: "1.25rem",
//               marginBottom: "0.5rem",
//               color: "#ffffff",
//             }}
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #ffffff",
//               background: "transparent",
//               color: "#ffffff",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="nickname"
//             style={{
//               display: "block",
//               fontSize: "1.25rem",
//               marginBottom: "0.5rem",
//               color: "#ffffff",
//             }}
//           >
//             Nickname
//           </label>
//           <input
//             id="nickname"
//             name="nickname"
//             type="text"
//             value={formData.nickname}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #ffffff",
//               background: "transparent",
//               color: "#ffffff",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="email"
//             style={{
//               display: "block",
//               fontSize: "1.25rem",
//               marginBottom: "0.5rem",
//               color: "#ffffff",
//             }}
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #ffffff",
//               background: "transparent",
//               color: "#ffffff",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="birthday"
//             style={{
//               display: "block",
//               fontSize: "1.25rem",
//               marginBottom: "0.5rem",
//               color: "#ffffff",
//             }}
//           >
//             Birthday
//           </label>
//           <input
//             id="birthday"
//             name="birthday"
//             type="date"
//             value={formData.birthday}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #ffffff",
//               background: "transparent",
//               color: "#ffffff",
//             }}
//             required
//           />
//           {formData.birthday && (
//             <p style={{ color: "#ffffff", marginTop: "0.5rem" }}>
//               {calculateDaysUntilBirthday()} days until birthday
//             </p>
//           )}
//         </div>
//         <div style={{ marginBottom: "1.5rem" }}>
//           <label
//             htmlFor="role"
//             style={{
//               display: "block",
//               fontSize: "1.25rem",
//               marginBottom: "0.5rem",
//               color: "#ffffff",
//             }}
//           >
//             Role
//           </label>
//           <input
//             id="role"
//             name="role"
//             type="text"
//             value={formData.role}
//             onChange={handleChange}
//             style={{
//               width: "100%",
//               padding: "0.75rem 1rem",
//               fontSize: "1rem",
//               borderRadius: "0.375rem",
//               border: "1px solid #ffffff",
//               background: "transparent",
//               color: "#ffffff",
//             }}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "0.75rem 1.5rem",
//             fontSize: "1rem",
//             background: "#6b21a8",
//             color: "#ffffff",
//             fontWeight: 600,
//             border: "none",
//             borderRadius: "0.5rem",
//             cursor: "pointer",
//             transition: "background 0.3s ease",
//           }}
//         >
//           Update Profile
//         </button>
//       </form>
//       <ToastContainer />
//     </motion.div>
//   );
// };

// export default UserProfile;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiBaseUrl = "http://localhost:3001";
const defaultImage = "/placeholder.png"; // Update with your default image URL

const UserProfile = ({ userData, onLogout }) => {
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    nickname: userData?.nickname || "",
    email: userData?.email || "",
    birthday: userData?.birthday || "",
    role: userData?.role || "",
    uid: userData?.uid || "",
    image: null,
    image_url: userData?.image_url ? `http://localhost:3001${userData.image_url}` : defaultImage,
  });

  useEffect(() => {
    console.log("Initial Image URL:", formData.image_url);
  }, [formData.image_url]);

  const calculateDaysUntilBirthday = () => {
    if (!formData.birthday) return null;

    const today = new Date();
    const birthday = new Date(formData.birthday);
    birthday.setFullYear(today.getFullYear());

    if (birthday < today) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = birthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      const file = files[0];
      if (file) {
        setFormData((prevData) => ({
          ...prevData,
          image: file,
          image_url: URL.createObjectURL(file),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("user[name]", formData.name);
      formDataWithImage.append("user[nickname]", formData.nickname);
      formDataWithImage.append("user[email]", formData.email);
      formDataWithImage.append("user[birthday]", formData.birthday);
      formDataWithImage.append("user[role]", formData.role);
      formDataWithImage.append("user[uid]", formData.uid);

      if (formData.image) {
        formDataWithImage.append("user[image]", formData.image);
      }

      const response = await axios.patch(
        `${apiBaseUrl}/auth`,
        formDataWithImage,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.headers["access-token"]) {
        localStorage.setItem("authToken", response.headers["access-token"]);
      }

      toast.success("Profile updated successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Failed to update profile", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
        image_url: URL.createObjectURL(file),
      }));
    }
  };

  const handleImageError = (e) => {
    console.error("Image loading error:", e, e.target.src);
    setFormData((prevData) => ({
      ...prevData,
      image_url: defaultImage,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        maxWidth: "28rem",
        margin: "auto",
        background: "linear-gradient(to right, #4f46e5, #6b21a8)",
        padding: "1.5rem 2rem",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "1rem",
          }}
        >
          <img
            style={{
              display: "block",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #ffffff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            src={formData.image_url}
            alt="User Profile"
            className="user-profile-image"
            onError={handleImageError}
          />

          <div
            style={{
              position: "absolute",
              inset: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            <label htmlFor="imageUpload">
              <svg
                style={{
                  width: "3rem",
                  height: "3rem",
                  color: "white",
                  cursor: "pointer",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </label>
            <input
              id="imageUpload"
              name="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.5rem",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {formData.name}
        </h2>
        <p style={{ color: "#ffffff", marginBottom: "0.5rem" }}>
          {formData.email}
        </p>
        <p style={{ color: "#ffffff", marginBottom: "1.5rem" }}>
          {formData.role}
        </p>
        <button
          onClick={onLogout}
          style={{
            background: "#ffffff",
            color: "#6b21a8",
            fontWeight: 600,
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Log Out
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "0.375rem",
              border: "1px solid #ffffff",
              background: "transparent",
              color: "#ffffff",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="nickname"
            style={{
              display: "block",
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Nickname
          </label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            value={formData.nickname}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "0.375rem",
              border: "1px solid #ffffff",
              background: "transparent",
              color: "#ffffff",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "0.375rem",
              border: "1px solid #ffffff",
              background: "transparent",
              color: "#ffffff",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="birthday"
            style={{
              display: "block",
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Birthday
          </label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            value={formData.birthday}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "0.375rem",
              border: "1px solid #ffffff",
              background: "transparent",
              color: "#ffffff",
            }}
            required
          />
          {formData.birthday && (
            <p style={{ color: "#ffffff", marginTop: "0.5rem" }}>
              {calculateDaysUntilBirthday()} days until birthday
            </p>
          )}
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="role"
            style={{
              display: "block",
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "0.375rem",
              border: "1px solid #ffffff",
              background: "transparent",
              color: "#ffffff",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            background: "#6b21a8",
            color: "#ffffff",
            fontWeight: 600,
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Update Profile
        </button>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default UserProfile;
