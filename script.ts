let nam = "morri";
//nam = 4;
const cric = (diameter)=>{
    return Math.round(diameter * Math.PI);
}


console.log(cric(10));

let names = ["mahamadou", "zainab", "modou lamin"];
names.unshift("matida");
console.log(names[0]);

let phone = {
    name2: prompt("what is your phone's name"),
    color: "Black",
    size: 23,

    func: ()=>{
        if(phone.name2 != "TCL"){
            console.log("your phone is not "+phone.name2);
        }

        else{
            console.log("your phone is TCL");
        }
    }

};


phone.func();