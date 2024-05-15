// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         console.log("Fetching user data...");
//         const storedToken = localStorage.getItem('token'); // Assuming you store the token in localStorage
//         const response = await axios.get("http://localhost:3001/auth/validate_token", {
//           headers: {
//             Authorization: `Bearer ${storedToken}`
//           }
//         });
//         setUserData(response.data); // Assuming response.data contains user details
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []); // Empty dependency array to run the effect only once

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('profilePicture', file);

//     try {
//       const storedToken = localStorage.getItem('token'); // Assuming you store the token in localStorage
//       const response = await axios.post("http://localhost:3001/upload-profile-picture", formData, {
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log("Profile picture uploaded:", response.data);
//       // Update user data with the new profile picture URL if needed
//     } catch (error) {
//       console.error("Error uploading profile picture:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       {isLoading ? (
//         <p className="text-center">Loading user data...</p>
//       ) : userData ? (
//         <>
//           <div className="text-center mb-6">
//             <label htmlFor="profilePicture" className="block mb-2 cursor-pointer">
//               <img className="mx-auto w-24 h-24 rounded-full mb-4" src={userData.profilePic} alt="User profile" />
//               <span className="text-blue-600 underline">Upload Profile Picture</span>
//               <input
//                 id="profilePicture"
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//               />
//             </label>
//             <h2 className="text-lg font-bold">{userData.name}</h2>
//             <p className="text-gray-600">{userData.jobTitle}</p>
//           </div>
//           <div className="mt-6">
//             <h3 className="text-sm font-bold mb-2">About Me</h3>
//             <p className="text-gray-700">{userData.bio}</p>
//           </div>
//           <div className="mt-6">
//             <h3 className="text-sm font-bold mb-2">Contact Information</h3>
//             <ul>
//               <li className="text-gray-700">Email: {userData.email}</li>
//               <li className="text-gray-700">Phone: {userData.phone}</li>
//               <li className="text-gray-700">Address: {userData.address}</li>
//             </ul>
//           </div>
//         </>
//       ) : (
//         <p className="text-center">User data not found.</p>
//       )}
//     </div>
//   );
// }

// export default UserProfile;
import React from 'react';

const UserProfile = ({ currentUser }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {currentUser ? (
        <>
          <div className="text-center mb-6">
            <img className="mx-auto w-24 h-24 rounded-full mb-4" src={currentUser.profilePic} alt="User profile" />
            <h2 className="text-lg font-bold">{currentUser.name}</h2>
            <p className="text-gray-600">{currentUser.jobTitle}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-bold mb-2">About Me</h3>
            <p className="text-gray-700">{currentUser.bio}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-bold mb-2">Contact Information</h3>
            <ul>
              <li className="text-gray-700">Email: {currentUser.email}</li>
              <li className="text-gray-700">Phone: {currentUser.phone}</li>
              <li className="text-gray-700">Address: {currentUser.address}</li>
            </ul>
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">User data not found.</p>
      )}
    </div>
  );
}

export default UserProfile;
