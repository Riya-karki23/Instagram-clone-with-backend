import { HttpContext } from '@adonisjs/core/http';
import Comment from '#models/comment';
export default class CommentsController {


    // ---------------------------------------------------------------------------------------------create  comment
        public async create({request, response}: HttpContext) {
            const {comment,user_id,post_id} = request.only(['comment','user_id','post_id']);
            try{
            const cmt = await Comment.create({
                user_id,
                post_id,
                comment,
                
            });
            
            return response.json({ message: `Comment created for the post id : ${post_id} `, cmt });
                                }
        catch(e){
          return response.json({message: e.message});
                }
        }
    

    //-----------------------------------------------------------------------------------------View/Read all comments

    public async read({request,response}:HttpContext){
        try{
            const {post_id}=request.only(['post_id']);
        const comments=await Comment.query().where('post_id',post_id);
        return response.json({message:'post comments fetched successfully',comments});
        }
        catch(e)
        {
            return response.json(e.message);
        }
    
    }

    //-------------------------------------------------------------------------------------update comment
    public async update({request,response}:HttpContext){
        try{
          const commentId=request.qs().id;
          const{comment}=request.only(['comment']);

          const updatedComment=await Comment.findOrFail(commentId);
            updatedComment.comment=comment,
           

            await updatedComment.save();

        return response.status(200).json({message:"post updated successfully",updatedComment})
        }
        catch(e){
            return response.status(404).json({message:e.message});
        }
          
    }



    //------------------------------------------------------------------------------------delete Comment
    public async delete({request,response}:HttpContext){
        try{
        const id=request.qs().id;
        const comment= await Comment.find(id);
        if(!comment)
        {
            return response.json({message:'post not found'})
        }
        
        await comment?.delete();
        return response.json({message:'comment deleted'});
        }
      catch(e)
      {
        return response.json({message:e.message})
      }  

    }

}