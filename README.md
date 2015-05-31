# express-g-demo


## tech 

- use nodemon
- use gulp to rake
- use jade to erb|haml
- use nodemailer
- use mongoose to mongoid(ar)
- use config
- use require-directory
- use express-di


## route

gulp routes

```

    Prefix Verb   URI Pattern                Controller#Action
    movies GET    /movies(.:format)          movies#index
           POST   /movies(.:format)          movies#create
 new_movie GET    /movies/new(.:format)      movies#new
edit_movie GET    /movies/:id/edit(.:format) movies#edit
     movie GET    /movies/:id(.:format)      movies#show
           PATCH  /movies/:id(.:format)      movies#update
           PUT    /movies/:id(.:format)      movies#update
           DELETE /movies/:id(.:format)      movies#destroy
```


