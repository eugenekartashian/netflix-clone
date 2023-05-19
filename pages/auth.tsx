import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react';

import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Image from "next/image";

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function Auth() {

    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('signin');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'signin' ? 'signup' : 'signin')
    }, []);

    const login = useCallback(async () => {
        try {
          await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: '/profiles'
          });


        } catch (error) {
          console.log(error);
        }
      }, [email, password]);

    const register = useCallback(async () => {
        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });

          login();

        } catch (error) {
            console.log(error);
        }
      }, [email, name, password, login]);

    return (
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <Image 
                    src="/images/logo.png" 
                    alt="logo" 
                    width={148}
                    height={40}
                />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-[4px] w-full min-h-625">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant === 'signin' ? 'Sign In' : 'Sign Up'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'signup' && (
                        <Input 
                            label="Username"
                            onChange={(e: any) => setName(e.target.value)}
                            id="name"
                            type="text"
                            value={name}
                        />
                        )}
                        <Input 
                            label="Email"
                            onChange={(e: any) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            value={email}
                        />
                        <Input 
                            label="Password"
                            onChange={(e: any) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            value={password}
                        />
                    </div>
                    <button onClick={register} className="bg-[#e50914] py-3 text-white font-bold rounded-[4px] w-full mt-10 hover:bg-red-700 transition">
                        {variant === 'signin' ? 'Sign In' : 'Sign Up'}
                    </button>
                    
                    <div className="flex justify-between text-[#b3b3b3] py-3">
                        <div className="flex justify-center flex-row">
                            <input id="rememberMe" type="checkbox" defaultChecked />
                            <label htmlFor="rememberMe" className="ml-1 text-sm">Remember me</label>
                        </div>
                        <a href="#" className="hover:underline text-sm">Need help?</a>
                    </div>
                    <div className="flex flex-row items-center gap-4 mt-4 justify-center">
                        <div 
                            onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                            className="
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                            "
                        >
                            <FcGoogle size={30} />
                        </div>
                        <div 
                            onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                            className="
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                            "
                        >
                            <FaGithub size={30} />
                        </div>
                    </div>
                    <p className="text-neutral-500 mt-6">
                        {variant === 'signin' ? 'New to Netflix?' : 'Already have and account?'}
                        <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer font-semibold">
                        {variant === 'signin' ? 'Sign up now.' : 'Sign In now.'}
                        </span>
                    </p>
                    <p className="text-[#8c8c8c] py-2 text-sm tracking-normal leading-tight">
                        This page is protected by Google reCAPTCHA to ensure you&#39;re not a bot. 
                        <span id="learnMore" className="text-[#0071eb] mx-1 hover:underline cursor-pointer" onClick={() => setShowModal(true)}>Learn more</span>
                        <Modal isVisible={showModal}/>
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  }