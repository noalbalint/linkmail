### Motivation

In USA and Canada, it is common to send an email to your political representative outlining your position. These emails are then collected and categorized by office staff, and the lawmaker will get a daily summary of how many people wrote in support or opposition of each topic. 

Larger NGOs and political organizations have dedicated webforms for this type of thing, for example [Ancient Ecosystem Aliance](https://ancientforestalliance.org/take-action-for-forests/call-for-ecosystem-based-targets/). But smaller grassroots micro-campaigners generally do not have time of interest for such an involved solution. The standard approach is to put everything in a google doc and ask supporters to copy/paste this into an email manually. 

Linkmail eliminates the hassle of this manual copy-pasting process. 

Since many campaigners share their campaigns via social media platforms like Instagram, supporters are generally more in the mood to mindlessly scroll and not in the mood to put in a lot of effort. So the friction of switching between apps, copying and pasting multiple sections, and being forced to abandon their scrolling session causes many supporters to be lost. "I'll do it later," they think.

So although the benefit provided by using Linkmail seems marginal, given the context of it's application, this small improvement can have a big impact. 

Also, when a government office receives thousands of identical emails, they put less value on them. If we can instead have hundreds of micro-campaigners writing personal emails which dozens of their friends will support, this will be more effective in creating change.

### Project Details

This project uses Vue 3 with typescript, tailwind CSS, Firebase Hosting and Cloud Firestore.

Typing is pretty loose at the moment to not slow down development. We will fix that when V1 is released. 

If you would like to contribute, check out the open issues for user-reported suggestions and/or check the [roadmap](https://noal.notion.site/LINKMAIL-10949879f7704c5eb459a2965b11a3d5) for planned development. Send [me](https://github.com/noalbalint) a message if you'd like to get edit access for this on Notion.

Thanks in advance for your help!


### Quickstart: 
- npm run dev
- npx tailwindcss -i ./src/style.css -o ./src/tailwind.css --watch // necessary for compiling tailwind styles

#### To deploy (maintainers only):
- npm run build
- firebase deploy
