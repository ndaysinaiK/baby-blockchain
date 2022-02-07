heroku login
git init
heroku git:remote -a bch-simple
git add .
git commit -am "make it better"
git push heroku master