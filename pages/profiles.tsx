import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

export default function Profiles() {

    const router = useRouter();
    const { data: currentUser } = useCurrentUser();

    const selectProfile = useCallback(() => {
        router.push('/');
      }, [router]);

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => selectProfile()}>
    
                        <div className="group flex flex-col w-full items-center justify-center">
                            <div
                                className="
                                    w-44
                                    h-44
                                    rounded-md
                                    flex
                                    items-center
                                    justify-center
                                    border-2
                                    border-transparent
                                    group-hover:cursor-pointer
                                    group-hover:border-white
                                    overflow-hidden
                                "
                            >
                                <Image 
                                    src="/images/default-red.png" 
                                    alt="Profile" 
                                    width={200}
                                    height={200}
                                />
                            </div>

                            <div
                                className="
                                  flex
                                  justify-center
                                  items-center
                                  mt-4
                                  text-gray-400
                                  text-2xl
                                  text-center
                                  group-hover:text-white
                                "
                            >
                                {currentUser?.name} 
                            </div>
                            <div
                                className="
                                  flex
                                  justify-center
                                  items-center
                                  mt-4
                                  text-gray-400
                                  text-2xl
                                  text-center
                                  group-hover:text-white  
                                "
                            >
                                {currentUser?.email}
                            </div>
                        </div>   

                    </div>
                </div>
            </div>
        </div>
    )
};