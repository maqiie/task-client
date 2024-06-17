// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Invitations = ({ currentUser }) => {
//   const [invitations, setInvitations] = useState([]);

//   useEffect(() => {
//     const fetchInvitations = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/invitations", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         });
//         setInvitations(response.data || []);
//       } catch (error) {
//         console.error("Error fetching invitations:", error);
//         toast.error("Error fetching invitations");
//       }
//     };

//     fetchInvitations();
//   }, []);

//   const handleAccept = async (invitationId) => {
//     try {
//       await axios.post(
//         `http://localhost:3001/invitations/${invitationId}/accept`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );
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
//       await axios.post(
//         `http://localhost:3001/invitations/${invitationId}/decline`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );
//       setInvitations((prev) =>
//         prev.filter((invitation) => invitation.id !== invitationId)
//       );
//       toast.success("Invitation declined");
//     } catch (error) {
//       console.error("Error declining invitation:", error);
//       toast.error("Error declining invitation");
//     }
//   };

//   return (
//     <div>
//       <h2>Invitations</h2>
//       {invitations.length === 0 ? (
//         <p>No invitations</p>
//       ) : (
//         invitations.map((invitation) => (
//           <div key={invitation.id}>
//             <p>{invitation.reminder.title}</p>
//             <button onClick={() => handleAccept(invitation.id)}>Accept</button>
//             <button onClick={() => handleDecline(invitation.id)}>Decline</button>
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

const Invitations = ({ currentUser }) => {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/invitations", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setInvitations(response.data || []);
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
          setInvitations((prev) => [...prev, data.invitation]);
          displayToastNotification(data.invitation);
        },
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount and unmount

  const handleAccept = async (invitationId) => {
    try {
      await axios.post(
        `http://localhost:3001/invitations/${invitationId}/accept`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
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
      await axios.post(
        `http://localhost:3001/invitations/${invitationId}/decline`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
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
    // Implement reschedule logic here
    toast.info("Reschedule functionality not yet implemented");
  };

  const displayToastNotification = (invitation) => {
    toast.info(
      <div>
        <p>{invitation.reminder.title}</p>
        <button onClick={() => handleAccept(invitation.id)}>Accept</button>
        <button onClick={() => handleDecline(invitation.id)}>Decline</button>
        <button onClick={() => handleReschedule(invitation.id)}>Reschedule</button>
      </div>,
      {
        position: "top-right",
        autoClose: false,
        closeOnClick: false,
      }
    );
  };

  return (
    <div>
      <h2>Invitations</h2>
      {invitations.length === 0 ? (
        <p>No invitations</p>
      ) : (
        invitations.map((invitation) => (
          <div key={invitation.id}>
            <p>{invitation.reminder.title}</p>
            <button onClick={() => handleAccept(invitation.id)}>Accept</button>
            <button onClick={() => handleDecline(invitation.id)}>Decline</button>
            <button onClick={() => handleReschedule(invitation.id)}>Reschedule</button>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default Invitations;
