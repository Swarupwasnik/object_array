console.log("working");

let studentRecords = [
          {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

    

          let names = []
studentRecords.forEach( student => {
     names.push(student.name.toUpperCase());
})
console.log(names);


 let a = studentRecords.filter(student => student.marks > 50);
console.log(a);

  var b= studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
 console.log(b);

 let c = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0);
 console.log(c);


 let d = studentRecords.filter(student => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(d);

let totalMarks = studentRecords.map(function(stu){ 
     if(student.marks < 50){
         student.marks += 15;}
     return stu;
 }).filter(stu => student.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(totalMarks);

let arry=[
     {Name:'Ketan KUbar',rollNo:25},
     {Name:'Rahul marke',rollNo:25},
     {Name:'Sikal Umar',rollNo:25},
     {Name:'Sukumar Kmurr',rollNo:25},
     {Name:'twinkle KUmr',rollNo:25},
     {Name:'ram Kurk',rollNo:25}

]
