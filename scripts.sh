# create app
heroku create

# deploy app
git push heroku main

# scale down app
heroku ps:scale web=0 -a guarded-depths-61702