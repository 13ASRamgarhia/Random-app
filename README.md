# [Random app](https://random-react-application.netlify.app/)

[Click here](https://random-react-application.netlify.app/) for preview live site.\
This app was designed to get users from an API.

![Image](https://github.com/13ASRamgarhia/Random-app/blob/main/public/App%20snapshots.png)

> Time taken to develop the project from writing npx create-react-app on Windows powershell to deploying the app on netlify and excluding the documentation part is 10 hours and a few minutes.

> [Click here](https://www.linkedin.com/in/13asr/) to contact the developer

### Technologies and methods used

The app is developed using create-react-app\
The designing part is done using `Tailwind CSS`, `Semantic UI` and `Daisy UI`\
A few basic animations are implemented in the app, which was done using `animate.css`\
App does contain a TOP LOADING BAR, which shows up during route changes, added using `react-top-loading-bar` package

Since, this is a single page application, the in-app routing is implemented using `react-router-dom`

`Navbar` has brand name on its left side, and a navigation menu at right side. Navigation menu contains three Links for in-app pages, and a button to on/off `dark mode`. Dark mode is implemented using useState and useContext. The button changes the state and the styles thoughout the app changes accordingly

`Get Users` link on the Landing page and the navigation menu takes user to the Users page, where user can find all the users. These users are fetched from an endpoint using `axios`, eberytime user lands on this page. This is implemented using useEffect hook\
Users page also contains `a pagination system`, which has two buttons, i.e., NEXT - for next page, and PREVIOUS - for previous page. When user clicks on NEXT, a function gets executed which increases the page no. on the endpoint by 1, and the user can see newly fetched users till the users list ends. Once there are no more users in the list, the NEXT button gets disabled. Same functionality is implemented for the PREVIOUS button, except the fact that previous button decreases the page no. by 1, taking the user back in the list.

`Project Link` button in the navigation menu is an anchor tag, which opens the project repository in a new tab.

Finally, social icons in the Footer of the app takes the user to the clicked social page of the developer.

### Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Steps to run the app

Anyone can use the app by clicking on the title (Random App) at the top of this documentary.
If one wants to run this app on his local machine for developement purpose, he can freely download the source code and start the development.

PRE-REQUISITE: VS Code, Node.js and proficiency in MERN Technologies

Note: If you recently installed Node.js, I would recommend you to restart your pc.

After downloading the app, open it in VS Code and type `npm install` in in-built cmd. This will install all necessary dependencies to run the app.
Once all dependecies are installed, run start command `npm start` to run app in development mode.
