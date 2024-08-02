
 # frontend
  1. create login/signup pages
  2. handle form data and sent it to backend
  3. after login redirect to home page


## Navbar

## create, edit , delete and update post
  ### features
     ## like, comment

     <Main>(navbar, home)
     <Home>(storie,post)


     <!-- BACKEND -->

     create a post controller, migration and a model


     <!-------------------------------------------------------------------------------------------------------------------------->
     <!-----------------------------------------------------DAY-2----------------------------------------------------------->
     <!-------------------------------------------------------------------------------------------------------------------------->


    # created form which take title and image url and create post
      

      #setup jwt token in login route to access cookies and get user data
         
         ##steps to setup jwt token
            1.  npm i jsonwebtoken
            2.  set secret key in .env file
            3.  npm i dotenv(to access secret key)


            <!------------------------------------------------------------------------------------------------------------>
            <!------------------------------------------------------------------------------------------------------------>
            <!------------------------------------------------------------------------------------------------------------>

  ## components
  # signup
  # login
  # create post
  # delete post
  # read post
  ## comments
  # create comment
  # read comment according to postId
  # delete comment
  # edit comment


 
 send parameter in url
<button><Link to={`/editPost/${post.id}`}>Edit Post</Link></button>


# get token and extract it in viewPosts.

 <!----------------------------------------------------------------------------------------------------->
 <!----------------------------------------------------------------------------------------------------->
  # changes to make
   1. set dynamic username in post controller while creating post,
   2. set username taken from token while creating post


# created a profile page
1.it will fetch the user posts from backend and only display the images.
and user data from backend.


# Added comments section for the posts


1. user can add and view comments of that specific post.
2. fetched comments based on the post id for specific post.
3. create comment on each post.


## bookmarks
1. save posts when click on bookmark.
2. view saved posts in Saved component.


<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------linking tables----------------------------------------->

set link between 2 tables using a foriegn key
# here i have set upm relationship between posts and user table.
## so whenever a post is created , using user_id it fetch all user data from user table.


#  include this  in post model
@belongsTo(() => User, {
  foreignKey: 'user_id',
})
public user: BelongsTo<typeof User>


# include this in user model
 @hasMany(() => Post, {
    foreignKey: 'user_id',
  })
  public posts: HasMany<typeof Post>


## and for calling join table data write below command
   const posts = await Post.query().preload('user');


### getting profile of a specific user by id
 # fetching user data through id.
 (Profile & ViewAllPosts file)


 ## changes made in components

 # profile


 # changes made

 created a search component in which the code of viewAllPosts is wwritten, 
 change component in home,
 shift all code from search to viewposts.

 # check all the components and functioning working or not

 ## in which changes are required
 1. edit.jsx
 2. createPost.jsx
 3. followSuggestion.jsx



 ## changes to be done

 1. comment.jsx css --
 2. create post not redirecting to home and styling. --
 3. edit post not redirecting to home. --
 4. followsuggestion create.
 5. footer.
 6. home styling and latest created post at top. --
 7. login text styling. --
 8. signup text and set user data after signup --
 9. profile create dynamic profile pic for all users, username also added in table column
 10. search styling.
 11. story dynamic and scroll css. --
 12. proper folder structure. --
 13. image uploads using desktop / drag and drop.
 14. create a profile upload and editing in the profile component.