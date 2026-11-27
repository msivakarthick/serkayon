import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;
const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  message: "",
});

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
// const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const [status, setStatus] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  const formDataToSend = new FormData();


   formDataToSend.append("access_key", ACCESS_KEY);

  formDataToSend.append("subject", "New Website Enquiry");
  formDataToSend.append("from_name", "Serkayon Website");

  // Your form fields
  formDataToSend.append("name", formData.name);
  formDataToSend.append("company", formData.company);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setStatus("success");

      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      });

      onClose();
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error(error);

    setStatus("error");

    toast.error("Failed to send message!", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-4xl rounded-[30px] overflow-hidden shadow-2xl"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(85,220,220,0.65) 0%, rgba(85,220,220,0.15) 25%, transparent 55%),
            linear-gradient(180deg, #0f6d86 0%, #0b3e85 40%, #02044f 100%)
          `,
        }}
      >
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.8px, transparent 0.8px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-white hover:rotate-90 transition duration-300 z-20"
        >
          <X size={28} />
        </button>

        <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          {/* Heading */}
          <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-1 md:mb-10">
            Contact Us
          </h2>

       <form
  onSubmit={handleSubmit}
  className="space-y-1 lg:space-y-5"
>
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-lg
                    bg-white
                    text-gray-800
                    outline-none
                    border-none
                  "
  name="name"
  value={formData.name}
  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-lg
                    bg-white
                    text-gray-800
                    outline-none
                    border-none
                  "
                    type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Company Name
              </label>

              <input
              type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}

                placeholder="Enter company name"
                className="
                  w-full
                  h-12
                  px-4
                  rounded-lg
                  bg-white
                  text-gray-800
                  outline-none
                  border-none
                "
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message
              </label>

              <textarea
               rows={5}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
                className="
                  w-full
                  p-4
                  rounded-lg
                  bg-white
                  text-gray-800
                  resize-none
                  outline-none
                  border-none
                "
                required
              />
            </div>

            {/* Button */}
            <div className="pt-2">
         <button
  type="submit"
  disabled={status === "sending"}
                className="
                  bg-[#72C63F]
                  hover:bg-[#67B438]
                  text-black
                  font-medium
                  px-8
                  h-12
                  rounded-lg
                  transition-all
                  duration-300
                "
              >
             {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}