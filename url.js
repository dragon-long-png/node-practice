const URL = require('url');

// const myURL = new URL.URL('/foo?he=man&she=girl#sex', 'https://example.org:80/');

// console.log(myURL);

// console.log(myURL.searchParams.has('he'));

// console.log(myURL.searchParams.get('she'));




const obj = {
    href: "https://nodejs.org:80/a/b/c?t=3&u=5#abc",
    origin: "https://nodejs.org:80",
    protocol: "https:",
    username: "",
    password: "",
    host: "nodejs.org:80",
    hostname: "nodejs.org",
    port: "80",
    pathname: "/a/b/c",
    search: "?t=3&u=5",
    hash: "#abc"
  };

  const url = URL.format(obj);

  console.log(url);