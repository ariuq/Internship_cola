const admin = require("firebase-admin");
const express = require("express");

const serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://send-notification-c7147-default-rtdb.firebaseio.com"
  });

  const token = 'eCeQIjhhRSCbd9RASSy5m4:APA91bFG1lK-oJJaGymo5uCxxMY_8G4kVK8E9ztziJa9jpRj6TuA71etQat_1aT6Cc6IPPTEKqHzCRf01HIrlKvQ-ecaHRJ0oLEMGwqYGTG3lO4iatod701AJ_MoO3YM-zAVVDteJ2G7';
  const options = {
    priority: 'normal',
    timeToLive: 60*60*24
  };

  const payload = {
    notification: {
        title: "Амжилттай",
        body: "Хэрэглэгчийн мэдээлэл амжилттай нэмэгдлээ!"
    },
  };

const notify = async () => {
    try {
       let result = await admin.messaging().sendToDevice(token, payload, options);
       console.log(result); 
      return 0;
    } catch (error) {
      console(error);
      
      return 1;
    }
    
  };
  
  module.exports = { notify };