import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    email:"",
    subject:"",
    message:"",
  })

  const [loading,setLoading] = useState(false);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/contactUs`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      setFormData({
        email:"",
        subject:"",
        message:""
      })
      toast.success("Your message posted successfully, We'll soon reach you");      
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      setFormData({
        email:"",
        subject:"",
        message:""
      })
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])


  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md bg-white p-4 rounded">
        <h2 className="heading text-center typewriter mx-auto w-[50%]">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="space-y-8 ">
          <div>
            <label htmlFor="email" className="form__label ">
              Your email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className="form__input mt-1"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label ">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleInputChange}
              value={formData.subject}
              className="form__input  mt-1"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your message
            </label>
            <textarea
              name="message"
              rows="6"
              onChange={handleInputChange}
              value={formData.message}
              className="form__input  mt-1"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn  rounded  sm:w-fit " onClick={handleSubmit}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
