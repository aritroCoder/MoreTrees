# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process. 
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. Thank you for helping out and remember,

**No contribution is too small.**

# Submitting Contributions👩‍💻👨‍💻

Below you will find the process and workflow used to review and merge your changes.

## Step 1 : Find an issue
- Take a look at the Existing Issues or create your **own** Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note : Every change in this project should/must have an associated issue. 

## Step 2 : Fork the Project
- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in `upstream` remote.
​Clone the repo
```
git clone https://github.com/aritroCoder/MoreTrees
cd MoreTrees 
git remote add upstream "https://github.com/aritroCoder/MoreTrees"
```
Generate the node modules folder
```
npm install
```
Then, after generating the `node_modules` create a `.env.local` file in the root directory, and add two lines here:
```
SECRET_KEY = "YOUR_SECRET_KEY"
NEXT_PUBLIC_MONGODB = "YOUR_MONGODB_URL"
```
where secret key is any string you can use and mongodb url is a valid local or cloud mongodb URL.<br/>
​
Note: If you are unable to set up mongodb URL, then you can use this testing URL: `mongodb+srv://testuser:cgfBXbObcJwcikDg@testcluster.llctihc.mongodb.net/moretrees`. But keep in mind you wont be able to view the database in that case to debugging can be difficult
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
​

- If you have already forked the project, update your copy before working.
​
## Step 3 : Branch
Create a new branch. Use its name to identify the issue your addressing. `$ git branch <branch-name>`
It will create a new branch with name Branch_Name and switch to that branch `$ git checkout <branch_name>`
## Step 4 : Work on the issue assigned
- Work on the issue(s) assigned to you. 
- Add all the files/folders needed.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by: `$ git add --all`
## Step 5 : Commit
 🎀🎀Before submitting an issue please find the correct folder where your program will go , You can discuss about it in the discussion.
- To commit give a descriptive message for the convenience of reveiwer by: `$ git commit -m "<commit message>" `

## Step 6 : Pull Request
- Go to your repository in browser and click on compare and pull requests. Then add a title and description(also screenshots) to your pull request that explains your contribution.

- Voila! Your Pull Request has been submitted and will be reviewed and merged.🥳


## Tip from us😇

It always takes time to understand and learn. So, do not worry at all. We know **you have got this**!💪
