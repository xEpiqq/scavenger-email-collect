'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useState } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app } from '../../components/initializeFirebase'

const db = getFirestore(app);

const Features = () => {

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
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>

        <form className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 m-24" onSubmit={uploadEmail}>
                  <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="rounded-md py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out dark:text-black dark:bg-white border-2 border-primary" />
                  <button type="submit" className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-primary dark:text-white dark:hover:bg-white/30">
                    Get the full demo!
                  </button>
                </form> 

      </section>
    </>
  );
};

export default Features;
