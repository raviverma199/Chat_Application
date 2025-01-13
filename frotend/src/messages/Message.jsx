import { useAuthContext } from "../context/AuthContext";
// import useConversation from "../zustand/useConversation";

export default function Message({ message }) {

  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
 
  // Function to Extract the Message Time
  function ExtractTime(dateString) {
    const date = new Date(dateString);
  
    let hours = date.getHours(); // Get hours in 24-hour format
    const minutes = padZero(date.getMinutes());
  
    const period = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
    hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
  
    return `${hours}:${minutes} ${period}`;
  }
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }

  const formatedTime = ExtractTime(message.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
            }
            alt="Tailwind css chat bubble component"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
}
