# Groupme Cool Guy Node Bot

Posts an ascii face to a group whenever someone types "/cool guy"

## Deploy to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Get the Code:

Once your heroku app has been created, be sure to clone the repo to your local machine:

    $ heroku git:clone -a <YOUR HEROKU APP NAME HERE>


## Create a GroupMe Bot:

Go to:
https://dev.groupme.com/bots/new

Fill out the form to create your new bot. Hint: The callback url should be the url of your heroku app.


## Add your new bot id to the project:

Go here to view all of your bots:
https://dev.groupme.com/bots

Find the one you just created and copy it's ID.

Now open the file bot.js from your local files in your text editor of choice.
Find where it says <Your Bot ID here> and replace it with the ID of your new bot.

If your Bot ID is 12345678910, then:

    var botID = "<Your Bot ID here>";

becomes

    var botID = "12345678910";


Save the file.

## Add your changes to heroku

    $ git add .
    $ git commit -m"Added the real bot id to the project"
    $ git push heroku master


## All done.

Go to GroupMe and type "/cool guy" in the group where your bot lives to see it in action.