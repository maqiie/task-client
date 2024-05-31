
// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

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

//     // Set the birthday year to the current year
//     birthday.setFullYear(today.getFullYear());

//     // If the birthday has already occurred this year, set it to next year
//     if (birthday < today) {
//       birthday.setFullYear(today.getFullYear() + 1);
//     }

//     // Calculate the difference in milliseconds between the birthday and today
//     const diffTime = birthday.getTime() - today.getTime();
//     // Calculate the difference in days
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
//       const response = await axios.patch(
//         "http://localhost:3001/auth",
//         { user: formData },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );
//       alert("Profile updated successfully");
//     } catch (error) {
//       console.error("Error updating profile", error);
//       alert("Failed to update profile");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300"
//     >
//       <div className="text-center mb-6">
//         {/* Profile picture/avatar */}
//         <div className="relative inline-block">
//           <div className="relative">
//             {/* User profile picture */}
//             <img
//               className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-white"
//               src={userData?.image || "placeholder.png"}
//               alt="User profile"
//             />
//             {/* Edit icon overlay */}
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
//               <svg
//                 className="w-12 h-12 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 4v16m8-8H4"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//         <h2 className="text-lg font-bold">{formData.name}</h2>
//         <p className="text-gray-600">{formData.email}</p>
//         <p className="text-gray-600">Nickname: {formData.nickname}</p>
//         {formData.birthday ? (
//           <>
//             <p className="text-gray-600">
//               Birthday:{" "}
//               {new Date(formData.birthday).toLocaleDateString("en-US", {
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//             <p className="text-gray-600">
//               Days until birthday: {calculateDaysUntilBirthday()}
//             </p>
//           </>
//         ) : (
//           <p className="text-gray-600">
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
//     </motion.div>
//   );
// };

// export default UserProfile;
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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

    // Set the birthday year to the current year
    birthday.setFullYear(today.getFullYear());

    // If the birthday has already occurred this year, set it to next year
    if (birthday < today) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the difference in milliseconds between the birthday and today
    const diffTime = birthday.getTime() - today.getTime();
    // Calculate the difference in days
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
      const response = await axios.patch(
        "http://localhost:3001/auth",
        { user: formData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Failed to update profile");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto bg-gray-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
    >
      <div className="text-center mb-6">
        {/* Profile picture/avatar */}
        <div className="relative inline-block">
          <div className="relative">
            {/* User profile picture */}
            <img
              className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-white"
              src={userData?.image || "placeholder.png"}
              alt="User profile"
            />
            {/* Edit icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold">{formData.name}</h2>
        <p className="text-gray-600">{formData.email}</p>
        <p className="text-gray-600">Nickname: {formData.nickname}</p>
        {formData.birthday ? (
          <>
            <p className="text-gray-600">
              Birthday:{" "}
              {new Date(formData.birthday).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-600">
              Days until birthday: {calculateDaysUntilBirthday()}
            </p>
          </>
        ) : (
          <p className="text-gray-600">
            No birthday set. Please set your birthday.
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </form>
      <div className="mt-6">
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full sm:w-auto"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default UserProfile;
