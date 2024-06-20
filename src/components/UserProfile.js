// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import styles from "./UserProfile.module.css";


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
//       formDataWithImage.append("image", formData.image);

//       await axios.patch("http://localhost:3001/auth", formDataWithImage, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//         },
//       });

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
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="max-w-md mx-auto bg-gray-100 shadow-md  px-8 pt-6 pb-8 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg "
//     >
//       <div className="text-center mb-6   ">
//         <div className="relative inline-block">
//           <div className="relative">
//             <img
//               className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-white"
//               src={
//                 formData.image
//                   ? URL.createObjectURL(formData.image)
//                   : "placeholder.png"
//               }
//               alt="User profile"
//             />
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
//               <label htmlFor="imageUpload">
//                 <svg
//                   className="w-12 h-12 text-white cursor-pointer"
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
//         <h2 className="text-3xl font-semibold text-gray-800 mb-2">
//           {formData.name}
//         </h2>
//         <p className="text-gray-200 mb-2">{formData.email}</p>
//         <p className="text-gray-200 mb-2">Nickname: {formData.nickname}</p>
//         {formData.birthday ? (
//           <>
//             <p className="text-gray-200 mb-2">
//               Birthday:{" "}
//               {new Date(formData.birthday).toLocaleDateString("en-US", {
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//             <p className="text-gray-200 mb-2">
//               Days until birthday: {calculateDaysUntilBirthday()}
//             </p>
//           </>
//         ) : (
//           <p className="text-gray-200 mb-2">
//             No birthday set. Please set your birthday.
//           </p>
//         )}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
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
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
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
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
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
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
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
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
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
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
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
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             disabled
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//       <div className="mt-6">
//         <button
//           onClick={onLogout}
//           className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full sm:w-auto"
//         >
//           Logout
//         </button>
//       </div>
//       <ToastContainer />
//     </motion.div>
//   );
// };

// export default UserProfile;
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = ({ userData, onLogout }) => {
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    nickname: userData?.nickname || "",
    email: userData?.email || "",
    birthday: userData?.birthday || "",
    role: userData?.role || "",
    uid: userData?.uid || "",
  });

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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      formDataWithImage.append("image", formData.image);

      await axios.patch("http://localhost:3001/auth", formDataWithImage, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

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
    setFormData({ ...formData, image: file });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        maxWidth: '28rem',
        margin: 'auto',
        background: 'linear-gradient(to right, #4f46e5, #6b21a8)',
        padding: '1.5rem 2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <img
              style={{
                display: 'block',
                width: '6rem',
                height: '6rem',
                borderRadius: '9999px',
                border: '4px solid white',
                margin: 'auto',
              }}
              src={
                formData.image
                  ? URL.createObjectURL(formData.image)
                  : "placeholder.png"
              }
              alt="User profile"
            />
            <div style={{
              position: 'absolute',
              inset: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '9999px',
            }}>
              <label htmlFor="imageUpload">
                <svg
                  style={{
                    width: '3rem',
                    height: '3rem',
                    color: 'white',
                    cursor: 'pointer',
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
        </div>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
          {formData.name}
        </h2>
        <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>{formData.email}</p>
        <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>Nickname: {formData.nickname}</p>
        {formData.birthday ? (
          <>
            <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
              Birthday:{" "}
              {new Date(formData.birthday).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </p>
            <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
              Days until birthday: {calculateDaysUntilBirthday()}
            </p>
          </>
        ) : (
          <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
            No birthday set. Please set your birthday.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}
            htmlFor="name"
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
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              appearance: 'none',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              padding: '0.5rem 0.75rem',
              color: '#374151',
              outline: 'none',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}
            htmlFor="nickname"
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
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              appearance: 'none',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              padding: '0.5rem 0.75rem',
              color: '#374151',
              outline: 'none',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}
            htmlFor="email"
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
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              appearance: 'none',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              padding: '0.5rem 0.75rem',
              color: '#374151',
              outline: 'none',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}
            htmlFor="birthday"
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
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              appearance: 'none',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              padding: '0.5rem 0.75rem',
              color: '#374151',
              outline: 'none',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}
            htmlFor="role"
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
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              appearance: 'none',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              padding: '0.5rem 0.75rem',
              color: '#374151',
              outline: 'none',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label
            style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}
            htmlFor="uid"
          >
            UID
          </label>
          <input
            id="uid"
            name="uid"
            type="text"
            value={formData.uid}
            onChange={handleChange}
            disabled
            style={{
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              appearance: 'none',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              width: '100%',
              padding: '0.5rem 0.75rem',
              color: '#374151',
              outline: 'none',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              fontWeight: 700,
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={onLogout}
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            width: '100%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
        >
          Logout
        </button>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default UserProfile;
