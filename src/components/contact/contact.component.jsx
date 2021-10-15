import React from "react";
import emailjs, {init} from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { css } from 'glamor';
import 'react-toastify/dist/ReactToastify.css';
import './contact.styles.css'

toast.configure({
    autoClose:3000,
    draggable: true,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
      toastClassName: css({
        fontSize: '18px !important',
        backgroundColor: '#f542a7 !important',
        padding: '15px !important'
      }),
});

const Contacts = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const notify = () => {
      toast('I will contact you as soon as possible!')
  }
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_IscmPXRzsT7YXOd5FA99b";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       notify();
    }, function(error) {
       console.log('FAILED...', error);
       console.log(error.message)
    });
  }

  

  return (
    <div className="contacts" id="contact">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and I'll contact you as soon as possible.</p>

      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", { required: true })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.name?.type === 'required' && "Please enter your name"}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", { required: true })}                  
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.phone?.type === 'required' && "Please enter your phone"}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.email && <span>{errors.email.message}</span>}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", { required: true })}     
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.name?.type === 'required' && "Please enter subject"}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  {...register("description", { required: true })}     
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.name?.type === 'required' && "Please enter description"}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;