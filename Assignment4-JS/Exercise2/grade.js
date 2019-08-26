//A Javascript program that determines the corresponding grade of the students
    let students = [['David', 80],
                    ['Vinoth', 77], 
                    ['Divya', 88], 
                    ['Ishitha', 95], 
                    ['Thomas', 68]
                   ];
    
    for (let i=0; i < students.length; i++) {
    let marks = students[i][1];
    let name = students[i][0];
        if (marks < 60){
            console.log(name + " has grade F");
        }
        else if (marks < 70) {
        console.log(name + " has grade D");
        }
        else if (marks < 80){
        console.log(name + " has grade C");
        }
        else if (marks < 90) {
        console.log(name + " has grade B");
        } 
        else if (marks < 100) {
        console.log(name + " has grade A");
        }
    }
   