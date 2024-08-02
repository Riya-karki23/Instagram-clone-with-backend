import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user';
import Post from '#models/post';
export default class PostsController 
{

    // --------------------------------------------------------------------------------create post
    public async createPost({request, response}: HttpContext) {
        const {title, image,user_id} = request.only(['title','image','user_id']);
        try{
        const post = await Post.create({
            title,
            image,
            user_id,
            
        });
        const user=await User.findOrFail(user_id);
        
        return response.json({ message: 'Post created', post ,user});
     
    }
    catch(e){
      return response.json({message: e.message});
            }
    }

    //------------------------------------------------------------------------------------------Get specific post by id
    public async getPost({request,response}:HttpContext){
        try{
            const userId=request.qs().id;
            const post=await Post.query().where('user_id',userId);
            const user=await User.query().where('id',userId);

            return response.status(200).json({message:'post recieved',post,user});
        }
        catch(e){
         return response.status(404).json({message:e.message});
        }
    }

    //-----------------------------------------------------------------------------------------View/Read all posts

    public async viewPost({response}:HttpContext){
        try{
        const posts = await Post.query().preload('user').orderBy('created_at','desc');

        return response.json({message:'all posts with user data',posts});
        }
        catch(e)
        {
            return response.json(e.message);
        }
    
    }

    //-------------------------------------------------------------------------------------update Post
    public async editPost({request,response}:HttpContext){
        try{
          const postId=request.qs().id;
          const{title,image}=request.only(['title','image']);

          const post=await Post.findOrFail(postId);
            post.title=title,
            post.image=image

            await post.save();

        return response.status(200).json({message:"post updated successfully",post})
        }
        catch(e){
            return response.status(404).json({message:e.message});
        }
          
    }


    public async getEditedPost({request,response}:HttpContext){
        try{
            const id=request.qs().id;
             const post=await Post.query().where('id',id);
            return response.json({message:'post fetched',post});
        }
        catch(e){
            console.log(e.message);
        }
    }


    //------------------------------------------------------------------------------------delete Post
    public async deletePost({request,response}:HttpContext){
        try{
        const id=request.qs().id;
        const post= await Post.find(id);
        if(!post)
        {
            return response.json({message:'post not found'})
        }
        
        await post?.delete();
        return response.json({message:'post deleted'});
        }
      catch(e)
      {
        return response.json({message:e.message})
      }  

    }

}