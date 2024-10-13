import React, { useRef } from 'react'
import './Contact_form.css'
import emailjs from '@emailjs/browser';
// import { useRef } from 'react'

const Contact_form = () => {

    const form = useRef();

    const onSubmit = (e) => {
        setTimeout(() => {
        }, 2000);
        e.preventDefault();
        emailjs.sendForm('service_zwta5z5', 'template_7f94wrd', form.current, {
                publicKey: 'hmaRsVlaC5M0vGJJY',
            })
            .then(() => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...',error);
                }
            );
    };

    return (
        <>
            <div className="form-container">
                <form action="" method="" ref = {form} onSubmit={onSubmit}>
                    <div className="row1">
                        <div className="feild1">
                            <div className="placehldr bio"><span>First Name *</span></div>
                            <input type="text" name="firstname" id="" required={true}/>
                        </div>
                        <div className="feild1">
                            <div className="placehldr bio"><span>Last Name *</span></div>
                            <input type="text" name="lastname" id="" required={true}  />
                        </div>
                    </div>
                    <div className="row1">
                        <div className="feild1">
                            <div className="placehldr bio"><span>Email *</span></div>
                            <input type="email" name="email" id="" required={true} />
                        </div>
                        <div className="feild1">
                            <div className="placehldr bio"><span>Subject</span></div>
                            <input type="text" name="subject" id="" />
                        </div>
                    </div>

                    <div className="row2">
                        <div className="message">
                            <div className="placehldr bio"><span>Message</span></div>
                            <textarea name="message" id="" className="big-box"></textarea>
                        </div>
                    </div>

                    <input className='submit-btn sub-heading' type="submit" value="submit" />

                </form>
            </div>
        </>
    )
}

export default Contact_form
