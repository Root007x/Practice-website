const student = {
    name : "Kondom ALi",
    money : 5000,
    study : 'math',
    subject : ['A','B','C'],
    exam : function(){
        console.log(this.money);
    }
}


student.exam();