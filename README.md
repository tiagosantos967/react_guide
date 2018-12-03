# How this was setup
1. `npx create-react-app my-app`
2. `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
3. `npx -p @storybook/cli sb init`

# Technologies
1. React
2. Jest and Enzyme for testing
3. React Materialize (Material Design Framework)
4. Storybook
5. Redux
6. Sagas
7. Redux Forms

# TODO
1. Setup Router
2. Setup Docker

# How to use
1. `npm install`
2. `npm start`

# Nice to know
- Run tests with `TERM=dumb npm test` to output console logs!

## Redux Forms
- https://redux-form.com/6.6.2/examples/simple/
- https://medium.com/@wlodarczyk_j/tutorial-creating-a-basic-form-with-redux-form-2f8cd51cd40
