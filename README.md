## Project Background

In the USA and Canada, creating an email campaign for a political topic is a great way to bring it to lawmakers' attention. These emails are collected, categorized, and reported by office staff daily, and if a lawmaker is not completely corrupt, this will influence their position on the topic.

Because it can be overwhelming for individuals to write personalized emails for every cause they care about, some larger organizations (for example, [Ancient Forest Aliance](https://ancientforestalliance.org/take-action-for-forests/call-for-ecosystem-based-targets/)) have built dedicated webforms with pre-written emails that their members can easily sign and send.

However, this type of solution is relatively time-consuming to set up, and generally out of reach grassroots micro-campaigners.

The current solution for most micro-campaigners is to put the information in a Google Doc, share it on social media, and ask supporters to manually copy/paste the recipient, subject, and body fields into an email.

Unfortunately, the dopamine-rich social media landscape of social media is extremely unconducive to even such a trivial task. The small friction of switching between 3 apps and the awkward text editing functionality of smartphones causes many potential supporters to abandon their email and return to their scrolling session. 

#### Linkmail eliminates this friction by providing a simple 3-click solution to help campaigns succeed in this uniquely constrained environment.

We also hope to encourage more people to become micro-campaigners with the intuitive, simple interface of [linkmail.co/create](https://linkmail.co/create). Political staffers put more weight on individual, unique emails. So thousands of people writing emails for dozens of their peers is more influential than dozens of organizations writing emails for thousands of their members.

## Product Roadmap

Main features currently planned/in progress:

- (very major) automatically find the email of responsible elected official based on a street address
- (minor) integrate location services to determine street address with one click
- (minor) dark mode

## Contribution Guidelines

This project uses Vue 3 with typescript, tailwind CSS, Firebase Hosting and Cloud Firestore.

Typing is pretty loose at the moment to not slow down development. We will fix that when V1 is released. 

If you would like to contribute, check out the open issues for user-reported suggestions and/or check the [roadmap](https://noal.notion.site/LINKMAIL-10949879f7704c5eb459a2965b11a3d5) for planned development. Send [me](https://github.com/noalbalint) a message if you'd like to get edit access for this on Notion.

Thanks in advance for your help!


### Quickstart: 
- npm run dev
- npx tailwindcss -i ./src/style.css -o ./src/tailwind.css --watch // necessary for compiling tailwind styles

#### To deploy (maintainers only):
- npm run build
- firebase staging (to test)
- firebase deploy
