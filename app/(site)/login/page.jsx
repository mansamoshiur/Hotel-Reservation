'use client';

import { signIn } from 'next-auth/react';
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          email: '',
          password: ''
        },
      });
  const onSubmit = (data) => {
    signIn('credentials',{
      ...data,
      required:false
    })
  }
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="md:w-3/6 w-full bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto ">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input {...register("email", { required: true})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" {...register("password", { required: true})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button onClick={handleSubmit(onSubmit)} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
      <div className="w-full flex justify-around my-6">
        <button onClick={() => signIn('google')} className="flex items-center gap-4  border-[1px] border-gray-500 rounded-md py-2 px-4"><FcGoogle /> Continue with Google</button>
        <button onClick={() => signIn('github')} className="flex items-center gap-4  border-[1px] border-gray-500 rounded-md py-2 px-4"><AiFillGithub /> Continue with Github</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default RegisterPage