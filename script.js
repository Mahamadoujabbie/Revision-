var nam = "morri";
//nam = 4;
var cric = function (diameter) {
    return Math.round(diameter * Math.PI);
};
console.log(cric(10));
var names = ["mahamadou", "zainab", "modou lamin"];
names.unshift("matida");
console.log(names[0]);
var phone = {
    name2: prompt("what is your phone's name"),
    color: "Black",
    size: 23,
    func: function () {
        if (phone.name2 != "TCL") {
            console.log("your phone is not " + phone.name2);
        }
        else {
            console.log("your phone is TCL");
        }
    }
};
phone.func();
