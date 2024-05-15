import React from 'react';

const UserProfile = ({ userData, onLogout }) => {
  // Function to calculate the number of days until the user's birthday
  const calculateDaysUntilBirthday = () => {
    if (!userData || !userData.birthday) return null;
    const today = new Date();
    const birthday = new Date(userData.birthday);
    birthday.setFullYear(today.getFullYear()); // Set the birthday year to the current year
    if (birthday < today) {
      birthday.setFullYear(today.getFullYear() + 1); // If birthday has passed, set it to next year
    }
    const diffTime = Math.abs(birthday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300">
      {userData ? (
        <>
          <div className="text-center mb-6">
            {/* Profile picture/avatar */}
            <div className="relative inline-block">
              <div className="relative">
                <img
                  className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-white"
                  src={userData.image || 'placeholder.png'} // Use placeholder image if user image is not available
                  alt="User profile"
                />
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
            {/* End of profile picture/avatar */}
            <h2 className="text-lg font-bold">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600">Nickname: {userData.nickname}</p>
            {/* Display birthday and days until birthday */}
            {userData.birthday ? (
              <>
                <p className="text-gray-600">
                  Birthday: {new Date(userData.birthday).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </p>
                <p className="text-gray-600">
                  Days until birthday: {calculateDaysUntilBirthday()}
                </p>
              </>
            ) : (
              <p className="text-gray-600">No birthday set. Please set your birthday.</p>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-bold mb-2">About Me</h3>
            <p className="text-gray-700">Role: {userData.role}</p>
            <p className="text-gray-700">UID: {userData.uid}</p>
          </div>
          <div className="mt-6">
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full sm:w-auto"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">User data not found.</p>
      )}
    </div>
  );
}

export default UserProfile;
