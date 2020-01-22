# W03D03 HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Login user with email and password
- [x] Encrypted cookies
- [x] Storing passwords ALWAYS HASH
- [x] HTTP Secure (HTTPS)
- [ ] Server-side sessions

http://localhost:6789/register
https://www.google.com/

### HTTP
- Protocol
- Stateless: sends and receives things, but doesn't... remember any previous communication
- Need to find a way for data to persist between requests/sessions

- cookies are small text files stored in client's browser
- cookies hold whatever info the dev wants them to hold
- they are sent to the server with every request for that domain
- key/value pairs

### Encrypted Cookies
- Function that takes in a value (string) and returns some alpha-numeric string that then be unencrypted by the recipient
- Two-way process
- public keys and private keys

### Hash
- one-way process
- values are fed into a function, transformed in some way, and then returned
- rainbow table

- salts are additional information to mix with the password provided
hash('password' + 'salt')

const hash = (password) => {
  // 'abc'
  'aaaaaa', 'bbb', 'f'
  return 1 + 2 + 3 === 6
};

### Do not store passwords as plaintext!!!


- Person in the middle attack















### When to use...
* Plain Text Cookies:
  * Almost never use plain cookies
  * Maybe for:
    * Language selection
    * Shopping cart for non-logged in users
    * Analytics
* Encrypted Cookies:
  * Do this by default
  * Only store the user_id (can be used to look up values in a database or object)
* Server-side Sessions:
  * Not worth the hassle for small projects
  * If you need to store lots of session data
  * If you frequently change session data
  * If you want the ability to invalidate a specific users' session
