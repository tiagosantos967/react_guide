# How this was setup
1. `npx create-react-app my-app`
2. `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
3. `npx -p @storybook/cli sb init`

# Technologies
1. React
2. React Materialize (Material Design Framework)
3. Storybook

# TODO
1. Setup Docker
2. Setup Redux
3. Setup Sagas

# How to use
1. `npm install`
2. `npm start`

# Nice to know
- Run tests with `TERM=dumb npm test` to output console logs!