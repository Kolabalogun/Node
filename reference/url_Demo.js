const url = require("url");

const myUrl = new URL(
  "http://example.com:8080/hello.html?id=123&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host  (root Doman);
console.log(myUrl.host);

// HostName - doesnt get port
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append("abc", "123");

console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${value} ${name}`));
