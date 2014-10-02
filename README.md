# Groupme Cool Guy Node Bot

Posts an ascii face to a group whenever someone types "/cool guy"

## Requirements:

  * GroupMe account
  * Heroku account

## Deploy to Heroku:

Be sure to log into heroku, using your heroku credentials, then click the link below.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

You should be taken to a page that looks like this:

![Deploy to Heroku](https://i.groupme.com/837x662.png.36c63698644a4f61a9ff3d5af91caa5e)

Optionally, you can give your app a name, or instead leave
it blank and let Heroku name it for you (you can change it later).

![Success](https://i.groupme.com/959x932.png.85e7959a8a9a41c6b20f5f6b50aceecb)


## Next, create a GroupMe Bot:

Go to:
https://dev.groupme.com/session/new

Use your GroupMe credentials to log into the developer site.

![Log into dev.groupme.com](https://i.groupme.com/640x292.png.38c9e590383149c1a01424fc61cdce4e)

Once you have successfully logged in, you should
be taken to the Create Bot Form page.

If not, click this link again:
https://dev.groupme.com/bots/new

![Create your new bot](https://i.groupme.com/984x490.png.abeab911cb084ed4bb3d59802acebeb0.large)

Fill out the form to create your new bot:

  * Select the group where you want the bot to live
  * Give your bot a name
  * Paste in the url to your newly deply heroku app
    * http://your-app-name-here.herokuapp.com/
  * (Optional) Give your bot an avatar by providing a url to an image




## Add your new bot id to the project:

Go here to view all of your bots:
https://dev.groupme.com/bots

Find the one you just created and copy it's ID.

In your terminal, fire this command to set the Bot ID environment variable in heroku:

    heroku config:set BOT_ID="YOUR BOT ID HERE"


## All done.

Go to GroupMe and type "/cool guy" in the group where your bot lives to see it in action.

# Next steps

## Get the Code:

Once your heroku app has been created, be sure to clone the repo to your local machine:

    $ heroku git:clone -a YOUR HEROKU APP NAME HERE

To run your app locally, you will also need to set the local Bot ID environment variable.
To do so, open the file `.env` from your local files in your text editor of choice.
Find where it says, "YOUR BOT ID HERE" and replace it with the ID of your new bot.

If your Bot ID is 12345678910, then:

    BOT_ID="YOUR BOT ID HERE"

becomes

    BOT_ID="12345678910"


Save the file.

## Add your changes to heroku

    $ git add .
    $ git commit -m"Added the real bot id to the project"
    $ git push heroku master