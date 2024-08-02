import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'; 
import hash from '@adonisjs/core/services/hash';
import jwt from 'jsonwebtoken';

export default class UsersController {


//-------------------------------------------------------------------------------------------------Signup
    public async signup({request, response}: HttpContext) {
        const {name, email, password} = request.only(['name', 'email', 'password']);
        const user = await User.create({
            name,
            email,
            password
        });

           const token=jwt.sign({name:user.name, id:user.id, email:user.email},'12345',{
              expiresIn:'30d'
           })

        return response.json({ message: 'User created', user,token });
    }

    //--------------------------------------------------------------------------------------------------Login 

    public async login({request,response}: HttpContext) {
        const {email,password} = request.only(['email','password']);

        const user = await User.findByOrFail('email', email);
try{
        if (await hash.verify(user.password, password)) {

            const token=jwt.sign({name:user.name ,id:user.id, email:user.email},'12345',{
              expiresIn:'30d'
            });

            return response.json({ message: 'Login successful', token});

        } else {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
    }
     catch (e) {
        return response.status(404).json({ message: 'User not found' });
    }
} 

public async searchUser({request,response}:HttpContext){
    const {name}=request.only(['name']);

    if(!name){
        return response.json({message:'name not present'});
    }
    try{
     const users=await User.query().where('name','ILIKE',`%${name}%`);
     if(users.length===0){
     return response.json({message:'no user found'});
     }
     return response.json({message:'user recieved',users});

    }
    catch(e){
        return response.json(e.message);
    }

}

 }
