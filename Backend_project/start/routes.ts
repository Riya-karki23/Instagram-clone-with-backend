

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router';
import PostsController from '#controllers/posts_controller';
import CommentsController from '#controllers/comments_controller';

//-----------------------------------------------------------------------------------------User Controller


router.post("/signup",[UsersController,'signup']);
router.post("/login",[UsersController,'login']);
router.post("/search",[UsersController,'searchUser']);

//-----------------------------------------------------------------------------------------Post Controller

router.post("/createPost",[PostsController,'createPost']);
router.post("/deletePost",[PostsController,'deletePost']);
router.post("/viewPost",[PostsController,'viewPost']);
router.post("/editPost",[PostsController,'editPost']);
router.post("/getEditedPost",[PostsController,'getEditedPost']);
router.post("/getPost",[PostsController,'getPost']);  //USING user ID get all posts


// -----------------------------------------------------------------------------------------Comment Controller
router.post("/create",[CommentsController,'create']);
router.post("/read",[CommentsController,'read']);
router.post("/update",[CommentsController,'update']);
router.post("/delete",[CommentsController,'delete']);

