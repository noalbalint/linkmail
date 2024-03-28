This project uses Vue 3 with typescript, tailwind CSS, Firebase Hosting and Cloud Firestore.

Typing is pretty loose at the moment to not slow down development. We will fix that when V1 is released. 

If you would like to contribute, check out the open issues for user-reported suggestions and/or check the [roadmap](https://noal.notion.site/LINKMAIL-10949879f7704c5eb459a2965b11a3d5) for planned development. Send [me](https://github.com/noalbalint) a message if you'd like to get edit access for this on Notion.

Thanks in advance for your help!


#### For local development: 
- npm run dev
- npx tailwindcss -i ./src/style.css -o ./src/tailwind.css --watch // necessary for compiling tailwind styles

#### To deploy (maintainers only):
- npm run build
- firebase deploy
