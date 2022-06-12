// Import the functions you need from the SDKs you need
// import { getFirestore } from "firebase/firestore";
import fs from "fs";
import path from "path";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

let firebaseConfig: string;

try {
  firebaseConfig = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "firebase-config-settings.json"),
      "utf-8"
    )
  );
} catch (err) {
  console.log(err);
  console.log(process.env.FIREBASE_CONFIG);
  let c = JSON.parse(process.env.FIREBASE_CONFIG || "{}");
  if (!c) throw err;
  firebaseConfig = c;
}
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});
// Initialize Firebase
export const db = getFirestore();
