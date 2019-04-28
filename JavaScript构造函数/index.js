//4.26 构造函数

function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
    this.changeName=function(name)
    {
        this.lastname=name;
    }
}

var myGirls=new person("bao","huan",18,"blue");
console.log(myGirls);
myGirls.changeName("linxin");
console.log(myGirls);
