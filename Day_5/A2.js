class user{
    constructor(name,age,email){
        this.name=name
        this.age=age
        this.email=email
        this.course=[]
    }
    login(){console.log(`${name} has loged in`);}
    logout(){console.log(`${name} has loged out`);}
}
let u=new user("yash",21,"p@gmail.com")
u.login();
u.logout();
class moderator extends user{
     
    constructor(name,age,email,){
        super(name,age,email);
        this.coins=0;
    }
    
    AddCoins(){
        this.coins++
        console.log(`${this.name} had  ${this.coins} coins `)}
    RemoveCoins(){
        this.coins--
        console.log(`${this.name} removed ${this.coins} coin`)}
}
let user1=new moderator("prajwal",22,"r@gmail.com");
user1.AddCoins();
user1.AddCoins();
user1.RemoveCoins()

class Admin extends moderator{

    // constructor(name,age,email){
    //     super(name,age,email);
       
    // }
    Addcourse(user,course){
        user.course.push(course)
        // console.log(user)
    }
}
let admin=new Admin("rio",20,' d@gmail.com')
let users=[u,user1,admin]
users.forEach(element => {console.log(element)
    
})
 admin.Addcourse(user1,"python")
 