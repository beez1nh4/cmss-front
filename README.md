<h1>Sentinel Tracker Dashboard- cmss-front</h1> 


This application was built to use with [cmss-back](https://github.com/cmss-usp/dashboard-back).

You need to get the application [cmss-back](https://github.com/cmss-usp/dashboard-back)  running first to get the correct port to use with this project.

<h3>Prerequisites</h3>

- NodeJS (v. 20.8.0)
- npm (v. 10.1.0) or npx
- Git

<h2>How to use</h2>

First, install all the packages with the command:

```
npm i
```

<h3>Config .env variable</h2>

Use the `.env.example` as reference to create the configuration file `.env` with the correct port.

The correct port 

```yaml
REACT_APP_API_BASE_URL=http://localhost:{designated_port}

```

<h3>Starting</h3>
Then, start the application with the command:


```
npm run start
```
<h3>Expected result</h3>
You should expect the webpage in your web browser and the following message:

```
Compiled successfully!
```

