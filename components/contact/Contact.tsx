"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ixbd4ol",
        "template_gz3a6aq",
        form.current,
        "GU4CTqZ_9LH2Xsz3Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className='grid grid-cols-2 gap-8 text-lg'
    >
      <div className='border-b border-black py-6'>
        <label>What's your name?</label>
        <input
          type='text'
          name='user_name'
          placeholder='John Doe *'
          className='w-full bg-primary px-3 py-2 outline-none'
        />
      </div>
      <div className='border-b border-black py-6'>
        <label>What's your email?</label>
        <input
          type='email'
          name='user_email'
          placeholder='john@doe.com *'
          className='w-full bg-primary px-3 py-2 outline-none'
        />
      </div>
      <div className='border-b border-black py-6'>
        <label>What's the name of your company?</label>
        <input
          type='text'
          name='user_company'
          placeholder='John & Doe *'
          className='w-full bg-primary px-3 py-2 outline-none'
        />
      </div>
      <div className='border-b border-black py-6'>
        <label>What services are you looking for?</label>
        <input
          type='text'
          name='user_services'
          placeholder='Web Development, UI/UX...'
          className='w-full bg-primary px-3 py-2 outline-none'
        />
      </div>
      <div className='col-span-2 border-b border-black py-6'>
        <label>Message</label>
        <textarea
          name='message'
          placeholder='Hi, can you help me with...'
          className='h-24 w-full resize-none bg-primary px-3 py-2 outline-none'
        />
      </div>
      <button
        type='submit'
        value='Send'
        className='h-16 w-48 rounded-full bg-black text-xl text-white'
      >
        Submit
      </button>
    </form>
  );
}
