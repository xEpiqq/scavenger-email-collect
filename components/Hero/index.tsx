'use client'
import Link from "next/link";
import { useState } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app } from '../../components/initializeFirebase'

const db = getFirestore(app);

const Hero = () => {

  const [email, setEmail] = useState("");

  async function uploadEmail() {
    const userRef = doc(db, "scavenger-emails", "scavenger-emails");
    const userDoc = await getDoc(userRef);
    const newEmails = [...userDoc.data().emails, email]; // add the new email to the existing emails
    await setDoc(userRef, { emails: newEmails }); // update the document with the new emails
  }

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Find Clients. <span className="text-emerald" >Sell</span> Websites.
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  The freelance gods are smiling upon you. Generate hundreds of leads in a matter of seconds, gather all relevant data, and manage the sales cycle completely in house. Book a demo to launch your freelance career.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <form className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0" onSubmit={uploadEmail}>
                  <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="rounded-md py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out dark:text-black dark:bg-white border-2 border-primary" />
                  <button type="submit" className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-primary dark:text-white dark:hover:bg-white/30">
                    Book my full demo
                  </button>
                </form> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          {/* drop the forest_svg image at the bottom of the header */}
          <img src="/images/hero/forest_svg.svg" alt="forest" className="w-full h-full bg-gradient-to-b from-primary to-black/30" />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          
          {/* all the things */}
        </div>
      </section>
    </>
  );
};

export default Hero;
