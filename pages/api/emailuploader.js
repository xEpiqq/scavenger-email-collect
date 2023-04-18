import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app } from '../../components/initializeFirebase'

const db = getFirestore(app);

export default async function stripe_webhook(req, res) { 

    const body = await req.json();
    const { user_email } = body;
    try {
        const userRef = doc(db, "scavenger-emails", "scavenger-emails");
        const userDoc = await getDoc(userRef);
        const newEmails = [...userDoc.data().emails, user_email]; // add the new email to the existing emails
        await setDoc(userRef, { emails: newEmails }); // update the document with the new emails
        res.status(200).json({received: true})

    } catch (error) {
        res.status(500).json({error: true})
    }

    res.status(200).json({received: true})
}