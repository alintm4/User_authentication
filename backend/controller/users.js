import Users from "../model/users.js";
// import bcrypt from 'bcrypt';
export async function handleSignup(req,res) {
    // console.log(req.body)
    const {name,email,password} =req.body;

    if(!email || !name || !password){
        return res.status(400).json({error:"input must be required"})
    }

    //const secured_hashed_password=bcrypt.hash(password,10)

      const UserData=new Users({
        name,
        email,
        password: password,
  
      })

     await UserData.save()
      res.status(201).json({
        message: "User signed up successfully!",
        user: UserData
      });
}



export async function handleLogins(req,res) {


    // console.log(req.body)
    const {email,password} =req.body;


const user=await Users.findOne({email})

if(!user){
    return res.status(400).json({error:"Invalid email or password"})
}
// const isPasswordValid = await bcrypt.compare(password, user.password);

    if (password !== user.password) {
        return res.status(400).json({ error: "Invalid email or password" });
    }
    
res.status(200).json({message:
    "Login Succesfull", 
    user:{name:user.name, email:user.email}})

}
