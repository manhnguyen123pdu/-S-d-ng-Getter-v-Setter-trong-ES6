class person{
    name;
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name=newName
    }
    walk(direction){
        console.log(`direction `)
    }
}
class program extends person{
    programLanguage;
    constructor(name,programLanguage){
        super(name);
        this.programLanguage=programLanguage;
    }
    getLanguage(){
        return this.programLanguage
    }
    setLanguage(Language){
        this.programLanguage=Language;
    }
    writeCode(writecode){
        console.log(writecode)
    }
}
//  let person1=new person("minh")
 let dev1=new program("trung","c++")
 console.table([dev1])
 dev1.setLanguage("rubby")
 dev1.setName('Nguyễn Việt Anh')
 console.table([dev1])
