// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import consumer from "../cable"; // Ensure this path is correct for Action Cable consumer setup

// const Invitations = ({ currentUser }) => {
//   const [invitations, setInvitations] = useState([]);

//   useEffect(() => {
//     const authToken = localStorage.getItem("authToken");

//     const fetchInvitations = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/invitations", {
//           headers: { Authorization: `Bearer ${authToken}` },
//         });

//         console.log("Fetched Invitations:", response.data); // Log fetched data

//         // Process invitations to include sender and reminder details
//         const processedInvitations = response.data.map((invitation) => ({
//           id: invitation.id,
//           reminder: {
//             id: invitation.reminder?.id || null,
//             title: invitation.reminder?.title || "No title",
//             location: invitation.reminder?.location || "No location",
//             description: invitation.reminder?.description || "No description",
//             due_date: invitation.reminder?.due_date
//               ? new Date(invitation.reminder.due_date).toLocaleString()
//               : "No due date",
//           },
//           sender: {
//             id: invitation.sender?.id || null,
//             name: invitation.sender?.name || "Unknown",
//             email: invitation.sender?.email || "Unknown",
//           },
//           user_id: invitation.user_id,
//           status: invitation.status,
//           created_at: new Date(invitation.created_at).toLocaleString(),
//           updated_at: new Date(invitation.updated_at).toLocaleString(),
//         }));

//         setInvitations(processedInvitations);
//       } catch (error) {
//         console.error("Error fetching invitations:", error);
//         toast.error("Error fetching invitations");
//       }
//     };

//     fetchInvitations();

//     const subscription = consumer.subscriptions.create(
//       { channel: "NotificationsChannel" },
//       {
//         received(data) {
//           // Handle real-time updates if needed
//           console.log("Received real-time data:", data);
//           setInvitations((prev) => [...prev, data.invitation]);
//           displayToastNotification(data.invitation);
//         },
//       }
//     );

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   const displayToastNotification = (invitation) => {
//     toast.info(
//       <div className="toast-notification">
//         <p>{invitation.reminder.title}</p>
//         <div className="flex space-x-4">
//           <button
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none"
//             onClick={() => handleAccept(invitation.id)}
//           >
//             Accept
//           </button>
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
//             onClick={() => handleDecline(invitation.id)}
//           >
//             Decline
//           </button>
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
//             onClick={() => handleReschedule(invitation.id)}
//           >
//             Reschedule
//           </button>
//         </div>
//       </div>,
//       { position: "top-right", autoClose: false, closeOnClick: false }
//     );
//   };

//   const handleAccept = async (invitationId) => {
//     try {
//       await updateInvitationStatus(invitationId, "accept");
//       setInvitations((prev) =>
//         prev.filter((invitation) => invitation.id !== invitationId)
//       );
//       toast.success("Invitation accepted");
//     } catch (error) {
//       console.error("Error accepting invitation:", error);
//       toast.error("Error accepting invitation");
//     }
//   };

//   const handleDecline = async (invitationId) => {
//     try {
//       await updateInvitationStatus(invitationId, "decline");
//       setInvitations((prev) =>
//         prev.filter((invitation) => invitation.id !== invitationId)
//       );
//       toast.success("Invitation declined");
//     } catch (error) {
//       console.error("Error declining invitation:", error);
//       toast.error("Error declining invitation");
//     }
//   };

//   const handleReschedule = async (invitationId) => {
//     toast.info("Reschedule functionality not yet implemented");
//     // Implement reschedule logic here
//   };

//   const updateInvitationStatus = async (invitationId, action) => {
//     const authToken = localStorage.getItem("authToken");

//     try {
//       await axios.post(
//         `http://localhost:3001/invitations/${invitationId}/${action}`,
//         {},
//         { headers: { Authorization: `Bearer ${authToken}` } }
//       );
//     } catch (error) {
//       throw new Error(`Error ${action}ing invitation: ${error.message}`);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Invitations</h2>
//       {invitations.length === 0 ? (
//         <p className="text-gray-600">No invitations</p>
//       ) : (
//         invitations.map((invitation) => (
//           <div
//             key={invitation.id}
//             className="bg-white shadow-sm rounded-md p-4 mb-4"
//           >
//             <div className="mb-4">
//               <p className="text-lg font-semibold">
//                 From: {invitation.sender.name}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Email: {invitation.sender.email}
//               </p>
//             </div>
//             <div className="mb-4">
//               <p className="text-lg font-semibold">
//                 Title: {invitation.reminder.title}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Location: {invitation.reminder.location}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Description: {invitation.reminder.description}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Due Date: {invitation.reminder.due_date}
//               </p>
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none"
//                 onClick={() => handleAccept(invitation.id)}
//               >
//                 Accept
//               </button>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
//                 onClick={() => handleDecline(invitation.id)}
//               >
//                 Decline
//               </button>
//               <button
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
//                 onClick={() => handleReschedule(invitation.id)}
//               >
//                 Reschedule
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Invitations;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import consumer from "../cable"; // Ensure this path is correct for Action Cable consumer setup
import { FaCheck, FaTimes, FaCalendarAlt } from "react-icons/fa";

const Invitations = ({ currentUser }) => {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    const fetchInvitations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/invitations", {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        console.log("Fetched Invitations:", response.data); // Log fetched data

        // Process invitations to include sender and reminder details
        const processedInvitations = response.data.map((invitation) => ({
          id: invitation.id,
          reminder: {
            id: invitation.reminder?.id || null,
            title: invitation.reminder?.title || "No title",
            location: invitation.reminder?.location || "No location",
            description: invitation.reminder?.description || "No description",
            due_date: invitation.reminder?.due_date
              ? new Date(invitation.reminder.due_date).toLocaleString()
              : "No due date",
          },
          sender: {
            id: invitation.sender?.id || null,
            name: invitation.sender?.name || "Unknown",
            email: invitation.sender?.email || "Unknown",
          },
          user_id: invitation.user_id,
          status: invitation.status,
          created_at: new Date(invitation.created_at).toLocaleString(),
          updated_at: new Date(invitation.updated_at).toLocaleString(),
        }));

        setInvitations(processedInvitations);
      } catch (error) {
        console.error("Error fetching invitations:", error);
        toast.error("Error fetching invitations");
      }
    };

    fetchInvitations();

    const subscription = consumer.subscriptions.create(
      { channel: "NotificationsChannel" },
      {
        received(data) {
          // Handle real-time updates if needed
          console.log("Received real-time data:", data);
          setInvitations((prev) => [...prev, data.invitation]);
          displayToastNotification(data.invitation);
        },
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const displayToastNotification = (invitation) => {
    toast.info(
      <div className="toast-notification">
        <p>{invitation.reminder.title}</p>
        <div className="flex space-x-4">
          <button
            className="button-accept"
            onClick={() => handleAccept(invitation.id)}
          >
            <FaCheck className="mr-2" />
            Accept
          </button>
          <button
            className="button-decline"
            onClick={() => handleDecline(invitation.id)}
          >
            <FaTimes className="mr-2" />
            Decline
          </button>
          <button
            className="button-reschedule"
            onClick={() => handleReschedule(invitation.id)}
          >
            <FaCalendarAlt className="mr-2" />
            Reschedule
          </button>
        </div>
      </div>,
      { position: "top-right", autoClose: false, closeOnClick: false }
    );
  };

  const handleAccept = async (invitationId) => {
    try {
      await updateInvitationStatus(invitationId, "accept");
      setInvitations((prev) =>
        prev.filter((invitation) => invitation.id !== invitationId)
      );
      toast.success("Invitation accepted");
    } catch (error) {
      console.error("Error accepting invitation:", error);
      toast.error("Error accepting invitation");
    }
  };

  const handleDecline = async (invitationId) => {
    try {
      await updateInvitationStatus(invitationId, "decline");
      setInvitations((prev) =>
        prev.filter((invitation) => invitation.id !== invitationId)
      );
      toast.success("Invitation declined");
    } catch (error) {
      console.error("Error declining invitation:", error);
      toast.error("Error declining invitation");
    }
  };

  const handleReschedule = async (invitationId) => {
    toast.info("Reschedule functionality not yet implemented");
    // Implement reschedule logic here
  };

  const updateInvitationStatus = async (invitationId, action) => {
    const authToken = localStorage.getItem("authToken");

    try {
      await axios.post(
        `http://localhost:3001/invitations/${invitationId}/${action}`,
        {},
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
    } catch (error) {
      throw new Error(`Error ${action}ing invitation: ${error.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Invitations</h2>
      {invitations.length === 0 ? (
        <p className="text-gray-600">No invitations</p>
      ) : (
        invitations.map((invitation) => (
          <div
            key={invitation.id}
            className="bg-white shadow-md rounded-lg border border-gray-200 p-4 mb-4"
          >
            <div className="mb-4">
              <p className="text-lg font-semibold">From: {invitation.sender.name}</p>
              <p className="text-sm text-gray-500">Email: {invitation.sender.email}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Title: {invitation.reminder.title}</p>
              <p className="text-sm text-gray-500">Location: {invitation.reminder.location}</p>
              <p className="text-sm text-gray-500">Description: {invitation.reminder.description}</p>
              <p className="text-sm text-gray-500">Due Date: {invitation.reminder.due_date}</p>
            </div>
            <div className="flex space-x-4">
              <button
                className="button-accept"
                onClick={() => handleAccept(invitation.id)}
              >
                <FaCheck className="mr-2" />
                Accept
              </button>
              <button
                className="button-decline"
                onClick={() => handleDecline(invitation.id)}
              >
                <FaTimes className="mr-2" />
                Decline
              </button>
              <button
                className="button-reschedule"
                onClick={() => handleReschedule(invitation.id)}
              >
                <FaCalendarAlt className="mr-2" />
                Reschedule
              </button>
            </div>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default Invitations;
