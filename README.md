Hi friends,

##### Setup

To start up react app, from the root directory run the following commands:

> npm install
> npm run dev 
> npm start

Run the second and third commands in separate tabs or using &&

This is how is how the app will deployed on Lightsail when we finish the Admin Form.

npm start restarts the server upon detecting changes

npm run dev rebuilds the client-side app upon changes to src

Note : the server will break while waiting for npm run dev to finish building the client.

##### Workflow

If you want to start working on a particular component, create a new branch named after the component.

If an asset you need is missing, PM me.

1. For new tasks, create branches off master with a relevant name e.g. "fix-admin-page-loading-wheel" is a branch that does what is sounds like

2. Merge latest version of master into your branch and resolve conflicts.

2. When finished make a pull request to master and ask someone to test, code review, and approve it.

3. Test your branch in production and cross your fingers.

4. Merge to master.