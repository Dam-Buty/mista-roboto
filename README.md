# mista-roboto
Pre-baked code for the Mister Robot Season 1 live-coding session

| Method               | Direction              | Initiated by |
|----------------------|------------------------|--------------|
| Webhook              | Bot to channel or user | Bot          |
| Slash commands       | Bi-directional         | User         |
| Interactive messages | Bi-directional         | Bot          |
| RTM API              | Bi-directional         | Bot or user  |

## Tier 1

Posting to a Slack Channel using a webhook.

- Create a private channel
- Setup incoming webhook 
  - Manage apps
  - Install incoming-webhooks application
  - Custom Integrations
  - Incoming webhooks > Add configuration
  - Customize name & icon
  - Shoot

## Tier 2

Responding to the user when he invokes the bot with a slash command

- Setup a local server with an ngrok tunnel
- Create a Slack app (https://api.slack.com/apps?new_app=1)
- Create a Slash command
- Install the application in your workspace
- Test :
  - text with res.end
  - attachments with response url (https://api.slack.com/docs/message-attachments)

## Tier 3

- Add an Interactive component to your application
- Create a bot user
- REINSTALL THE APP
- Get bot user Oauth token
- Setup a local server
- Install the [slackbots](https://www.npmjs.com/package/slackbots) library
- Send more complex messages (fields, buttons)
  - Parse and react to responses
  - update original message

## God-tier

- Invite the bot on a public channel
- Use RTM API
- Sky is the limit
- Brag a lot
