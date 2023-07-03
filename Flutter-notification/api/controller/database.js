const {keyx} = require("../lib/knex");
const {notify} = require("../lib/sendNotification");

const registerListenTrigger = async () => {
  let count = 0;
  let status = "";
  setInterval(async () => {
      const result = await keyx("form_history");
      console.log(result.length);
      if(count !== result.length) {
        status ="successs";
  await notify("success");
        //0=success, 1=fail
        count = result.length;
        console.log(status);
          
      } else {
          console.log("table not updated");
      }
  }, 5000);
};

module.exports = {registerListenTrigger};
  