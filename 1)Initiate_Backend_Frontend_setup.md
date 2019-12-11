start with creating a folder for the project, then open the folder in vscode, make a backend folder with rails [ rails new backend ] this will create a backend folder in the project folder label as backend. 

Creating React frontend folder
If [ create-react-app some-name-for-app ]doesn’t contain the default file src folder go ahead and delete the folder that was just create and run [ npm install create-react-app ] in the terminal this is because we need to update react. Now type [ npx create-react-app some-app-name ] in the terminal this should now have the src folder. Should be good now.

npm will create an app with the current react on your computer, while
npx will create an app with the latest version of react 

We will be using Redux, so cd into the frondend folder and run  [ npm install --save redux react-redux ]

now we will get rid of the github repo that came along with creating the app folder from both rails and react. cd into their respective folders and run [ rm -rf .git ]. Now we can link it up with our repo from github. So cd out to the main folder of the app.

git init

git add .

git commit -m "frontend and backend folder made"

Before we push make sure we have a repo ready in github to push to.
Once that is made we use

git remote add origin https://github.com/sqnguyen829/Mod5_Final_Project.git

git push -u origin master


