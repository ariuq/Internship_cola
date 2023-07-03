const { keyx } = require("../lib/knex");
const { notify } = require("../lib/sendNotification");


const insert = async (req, res) => {
  let status = "";
  const { name, email } = req.body;
  try {
    status = "okk";
    const result = await keyx("Form").insert({
      name: name,
      email: email,
    });
    //console.log(result);
    const notificationStatus = await notify(result);
    //0=success, 1=fail
    return res.status(200).json({ status, notificationStatus });
  } catch (error) {
    status = "fail";
    console.log(error.message);
    const notificationStatus = await notify("fail");
    return res.status(404).json({ status, notificationStatus });
  }
};

module.exports = { insert };