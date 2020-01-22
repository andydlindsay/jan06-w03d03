# W03D03 HTTP Cookies & User Authentication

### To Do
- [ ] HTTP and cookies
- [ ] Login user with email and password
- [ ] Encrypted cookies
- [ ] Storing passwords ALWAYS HASH
- [ ] HTTP Secure (HTTPS)
- [ ] Server-side sessions

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
