const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here

  //create function that takes in data from the log file.
  //create a report of all of the unique emails and the number of times an email was sent to each address.
  //result = object where each key is the email address
  //value= number of times we've sent an email to that address

  const getEmails = emailFile.emails.reduce((prev, curr) => {
    if (prev.hasOwnProperty(curr.email)) {
      prev[curr.email]++;
    } else {
      prev[curr.email] = 1;
    }
    return prev;
  });
  return getEmails;
}

console.log(countUniqueEmails(emailLog));
