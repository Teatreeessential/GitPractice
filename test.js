function addMethod(object, name, fn) {
    var old = object[name];
    object[name] = function() {
        if (fn.length === arguments.length) {
            return fn.apply(this, arguments)
        } else if (typeof old == 'function'){
            return old.apply(this, arguments);
        };
    }
 }

 var ningas = {
     values: ["안", "병", "찬"]
 }

 addMethod(ningas, "find", function() {
    return this.ningas;     
 }) //해당 함수를 실행하는 시점에는 old 는 undefined
 

 addMethod(ningas, "find", function(name) {
     var ret = [];
     for (var i = 0; i < this.values.length; i++) {
         if (this.values[i].indexOf(name) == 0) {
             ret.push(this.values[i]);
         }
     }
    return ret;     
 }) 
 
 // 해당함수를 실행하는 시점에는 처음 addMethod를 실행했을 때 추가된 ningas.find()의 함수를 old로 가짐 
 

 ningas.find(); // 따라서 현재 addMethod의 상태값은 addMethod를 마지막으로 호출한 메서드의 상태값과 동일 따라서 fn.length는 1 arguments.length는 0
                // 하지만 이때 old는 addMethod에서 callback을 아무런 인자값을 주지 않은채 실행시킨 상태값을 가진 함수 해당 함수를 실행시킨다. 
                // 그리하여 fn.apply가 실행되고 해당 함수는 결국 인자값을 가지지 않은 callback을 실행시켜 결과값을 발생시킨다.
 ningas.find("안");
 