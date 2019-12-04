

// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//     apiKey: "AIzaSyBPk4r4T1XXxQvLjRo60LqQPwGfJ47m7E4",
//     authDomain: "saylani-project-482e8.firebaseapp.com",
//     projectId: "saylani-project-482e8",
//     storageBucket: "saylani-project-482e8.appspot.com",
//   });


  var firebaseConfig = {
    apiKey: "AIzaSyBPk4r4T1XXxQvLjRo60LqQPwGfJ47m7E4",
    authDomain: "saylani-project-482e8.firebaseapp.com",
    databaseURL: "https://saylani-project-482e8.firebaseio.com",
    projectId: "saylani-project-482e8",
    storageBucket: "saylani-project-482e8.appspot.com",
    messagingSenderId: "315440717934",
    appId: "1:315440717934:web:3c52dd16d95e160c56467f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  var db = firebase.firestore();

  


function goto_signup(){

    window.location.href="signUp.html";
}


function goto_signin(){

    window.location.href="index.html";
}



function signin(){
    var email = document.getElementById('inp_1').value;
    var password = document.getElementById('inp_2').value;
//function firebase sign in 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((res)=>{
    //   this.setState({after:'abc'})
    //   localStorage.setItem('after','abc')
      localStorage.setItem('current',firebase.auth().currentUser.email)
      
    alert("successfully signin");
   
    window.location.href="after_sign.html"
       })

    .catch((e) => {
        alert('error Adding in db');
    })
    
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
    });

}



// sign up function start

function signUp(){
alert("check")
    var email = document.getElementById('inp_3').value;
    var password = document.getElementById('inp_4').value;
    

firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        alert('succeccfully signup'); 
        
            
     //user add in db
    db.collection('info').add({password,email})
    .then(()=>{
        alert(" pass and email add in db")
      
    })
    
    .catch((e) => {
        console.log('error Adding in db');
    })
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
    });
}


// show nav____________________

function show_nav(){

    var show = document.getElementById("my_nav");
    
switch(show.style.display){

case show.style.display = "none":
    show.style.display="block";
    break;
    case show.style.display = "block":
            show.style.display="none";
            break;
}

}
// close_________________   

function signout(){

 firebase.auth().signOut().then(function() {
    localStorage.removeItem('current')
    localStorage.removeItem('count')
    localStorage.removeItem('lengths')
    localStorage.removeItem('result')
    localStorage.removeItem('answer')
    localStorage.removeItem('id')
    localStorage.removeItem('uid')
    localStorage.removeItem('test')
    localStorage.removeItem('compare')
    alert("succeccfully sinout")
        window.location.href="index.html";
      }).catch(function(error) {
        // An error happened.
      });
}


function check_auth(){
if(localStorage.current.length>2){
// alert("you already login")
    window.location.href="after_sign.html"
}

}

// timer___________________________



// start quiz__________________________

function start_q(){

    window.location.href="start.html"
}


// create___________________________
function create(){

    window.location.href="create.html"

}  



function time_count(){
    localStorage.removeItem('id');
    var total = 0;
    var collect = localStorage.getItem("current");
    db.collection("marks").where("current","==",collect).get().then((res)=> {
      res.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ");
            localStorage.setItem("id",doc.id);
            db.collection("marks").doc(doc.id).update({
                result : total
            })
        });
    });


}

function one_(){
    var d_one = document.getElementById("one");
    var dtwo = document.getElementById("two");
    dtwo.style.display="block";
    d_one.style.display="none"
    
}

function two_(){
    var d_two = document.getElementById("two");
    var dthree = document.getElementById("three");
    dthree.style.display="block";
    d_two.style.display="none"
    


}

function three_(){
    var d_three = document.getElementById("three");
    var dfour = document.getElementById("four");
    dfour.style.display="block";
    d_three.style.display="none"
    


}

function four_(){
    var d_four = document.getElementById("four");
    var dfive = document.getElementById("five");
    dfive.style.display="block";
    d_four.style.display="none"
    


}


function one(){
    var total = 0;

    var ans1 = document.getElementById("q1").value;
   

if(ans1=="javascript"){
    total ++;
    if(!localStorage.id){
    db.collection("marks").add({
        result: total,
        current:localStorage.current
        })
    }
    else{
        db.collection("marks").doc(localStorage.id).update({
            result: total,
            current:localStorage.current
            }) 
    }

    console.log("successfully add**********",total)
    
    
}

}

function two(){
    // var total = 0;
    

    var ans2 = document.getElementById("q2").value;

if(ans2=="alert('text')"){
    
    var id = localStorage.getItem("id");

    db.collection("marks").where("current","==",localStorage.current).get().then((res)=>{
        res.forEach((doc)=>{
            console.log(doc.data().result);
            var result = doc.data().result;
            db.collection("marks").doc(id).update({
                result:parseInt (result+1),
                
                })
        })

    })
   
    // console.log("successfully add**********",total)
   
}

}

function three(){
    // var total = 0;
    

    var ans3 = document.getElementById("q3").value;

if(ans3=="var a='text';"){
    
    var id = localStorage.getItem("id");

    db.collection("marks").where("current","==",localStorage.current).get().then((res)=>{
        res.forEach((doc)=>{
            console.log(doc.data().result);
            var result = doc.data().result;
            db.collection("marks").doc(id).update({
                result:parseInt (result+1),
                
                })
        })

    })
   
    // console.log("successfully add**********",total)
   
}

}

function four(){
    // var total = 0;
    

    var ans4 = document.getElementById("q4").value;

if(ans4=="function name(){}"){
    
    var id = localStorage.getItem("id");

    db.collection("marks").where("current","==",localStorage.current).get().then((res)=>{
        res.forEach((doc)=>{
            console.log(doc.data().result);
            var result = doc.data().result;
            db.collection("marks").doc(id).update({
                result:parseInt (result+1),
                
                })
        })

    })
   
    // console.log("successfully add**********",total)
   
}

}



function set_answer1(){
var opt_1 = document.getElementById("option1").value;
localStorage.setItem("answer",opt_1);
    
}

function set_answer2(){
    var opt_2 = document.getElementById("option2").value;
    localStorage.setItem("answer",opt_2);
        
    }

function set_answer3(){
var opt_1 = document.getElementById("option_1").value;
localStorage.setItem("answer",opt_1);
    
}

function set_answer4(){
    var opt_1 = document.getElementById("option_2").value;
    localStorage.setItem("answer",opt_1);
        
    }


async function submit(){
    localStorage.removeItem("uid");
    var que = document.getElementById("question").value;
var op_1 = document.getElementById("option1").value;
var op_2 = document.getElementById("option2").value;

if(que,op_1,op_2.length>0){
    db.collection("create_q").orderBy("test").get().then((res)=>{
        res.forEach((doc)=>{
localStorage.setItem("uid", doc.id);
doc.data().ary.map((item)=>{
return console.log(item.q,item.option1)
})
        })
    })

await setTimeout(() => {
    if(!localStorage.uid){
        localStorage.setItem("test",0);
        localStorage.test++;
        var arr=[];
         arr.push({q:que, option1:op_1, option2:op_2, ans : localStorage.answer })
            db.collection("create_q").add({
    
                ary: arr,
                user : localStorage.current,
                test: localStorage.test,
            })
        
    
    }
    else{
      
          db.collection("create_q").get().then((res)=>{
            res.forEach((doc)=>{
                
       db.collection("create_q").doc(localStorage.uid).update({

        ary: [...doc.data().ary,{q:que, option1:op_1, option2:op_2, ans : localStorage.answer}]
           
    })
    
            })
        })
}
}, 2000);

await setTimeout(() => {
    var que = document.getElementById("question");
    var op_1 = document.getElementById("option1");
    var op_2 = document.getElementById("option2");
    que.value="";
    op_1.value="";
    op_2.value="";
    alert('data add successfully')
}, 2000);
}


 else{alert("please fill the field")}  



// arr.map((item)=>{
// return console.log("******************",item .q,item.option,item.ans)
// })
}


function create_new(){
var d_1=document.getElementById('data1');
var d_2 = document.getElementById('data2');
d_1.style.display="none";
d_2.style.display="block";

}


async function submit2(){
    var t = [];
    localStorage.removeItem('test');
    localStorage.removeItem('no');
    var d_1=document.getElementById('data1');
var d_2 = document.getElementById('data2');

    var que = document.getElementById("question2").value;
    var op_1 = document.getElementById("option_1").value;
    var op_2 = document.getElementById("option_2").value;

await db.collection("create_q").orderBy('test').get().then((res)=>{
res.forEach((doc)=>{
    console.log('test',doc.data().test)
    t.push(doc.data().test)
// localStorage.setItem('test',doc.data().test));
    })
})    
await setTimeout(() => {
    
for (var i=0; i<t.length; i++){
    var a = t[i];
  a++
  console.log("ye aaa",a)
  localStorage.setItem("no",a)
}
    localStorage.test++;
    var arr=[];
     arr.push({q:que, option1:op_1, option2:op_2, ans : localStorage.answer })
        db.collection("create_q").add({

            ary: arr,
            user : localStorage.current,
            test: localStorage.no,
        })

}, 2000);
        d_1.style.display="block";
d_2.style.display="none";
}



function get_quiz(){
    // localStorage.removeItem('loader');
    var w = document.getElementById('welcome');
    w.innerHTML='please wait...';
    var get= document.getElementById("get_q");

    // ye loader ka code hay
    var div = document.createElement('div');
    div.setAttribute('class','loader');
    div.setAttribute('id','loader');
get.appendChild(div);
    // yaha tak

    db.collection("create_q").orderBy('test').get().then((res)=>{
        res.forEach((doc)=>{
            console.log(doc.id);
            w.innerHTML="";
            
            // is ko bhool jao
            document.getElementById('loader').style.display="none";
        //    get uper hay
        // var get= document.getElementById("get_q");
        get.setAttribute("style","text-align:center")

            var btn = document.createElement('button');
            var br = document.createElement('br');
            btn.value = doc.id;
            btn.setAttribute("onClick","get_btn(this)")
            btn.setAttribute("class",'my_btn')
            btn.setAttribute("id",doc.data().test)
            btn.innerHTML= "test" + doc.data().test;
            get.appendChild(btn);
            get.appendChild(br);
        })
    })
}



function get_btn(id){
    localStorage.setItem('compare',0);
    // localStorage.setItem('result',0);
    
    localStorage.removeItem('lengths')
    var btn = document.getElementById('get_q');
    btn.style.display="none";
    var ar=[];
    var ar1=[];
    var ar2=[];
    var ar3=[];
console.log("**************************>",id.id);
db.collection("create_q").where('test',"==",id.id).get().then((res)=>{
res.forEach((doc)=>{
    // console.log(doc.data().ary.q);
    doc.data().ary.map((item)=>{
return ar.push(item.q) && ar1.push(item.option1) && ar2.push(item.option2)&& ar3.push(item.ans); 
    })
localStorage.setItem('lengths',ar.length);
    var count = 0;
    count++;

for (var i=0 ; i<ar.length && i<ar1.length && i<ar2.length && i<ar3.length; i++ ){
    console.log(ar[i]);
     console.log(ar1[i]);
     console.log(ar3[i]);
    console.log("_________________")
    var ol = document.getElementById('or_li');
    ol.setAttribute("class","demo")
    // question*************
   var param = document.createElement('p');
    param.innerHTML = count++ +")" +ar[i];
    param.setAttribute("class","param");

    var inp= document.createElement('input');
    inp.setAttribute("type","checkbox")
   inp.setAttribute("value",ar1[i]);
   inp.setAttribute("onClick","ch(this)");
   inp.setAttribute("name",ar3[i])
   inp.innerHTML=ar3[i];
   var sp= document.createElement('span');
   sp.setAttribute("class","demo");
    sp.innerHTML=ar1[i];
    ol.appendChild(param);
    ol.appendChild(inp);
    ol.appendChild(sp);
    // option2******************
    
     var inp1= document.createElement('input');
    inp1.setAttribute("type","checkbox")
    inp1.style.marginLeft= '20px';
   inp1.setAttribute("value",ar2[i]);
   inp1.setAttribute("name",ar3[i])
//    inp1.innerHTML=ar3[i];
   inp1.setAttribute("onClick","ch(this)")
//    inp1.setAttribute("class","null")
   var sp1= document.createElement('span');
   sp1.setAttribute("class","demo");
    sp1.innerHTML=ar2[i];
   
    ol.appendChild(inp1);
    ol.appendChild(sp1);
} 
        })
    })
}

function ch(item){

    // alert(item.name)
    if(!localStorage.result){
   localStorage.setItem("result",0) 
    }
  if(!localStorage.compare){
        localStorage.setItem("compare",0) 
         }

    try {
        if(document.querySelector('input[type=checkbox]:checked').value==item.name){
            localStorage.result++;
            localStorage.compare++;
        }
        else if(document.querySelector('input[type=checkbox]:checked').value !==item.name){
            localStorage.compare++;
            
        }
      
      }
      catch(err) {
        localStorage.result--;  
        localStorage.compare--;
      }
setTimeout(() => {
    if (localStorage.lengths == localStorage.compare){
  
        var final = localStorage.result/localStorage.lengths;
        if(final > 0.4){
           alert("congratulation you have pass")
        }
        else{
            alert('sorry you fail');
        }
    } 
}, 2000);
    
     
  
   
} 


function get_result(){
 
  db.collection("marks").get().then((res)=>{
res.forEach((doc)=>{
    var ress = document.getElementById('res');
    var dfive = document.getElementById("five");
    dfive.style.display="none";
    ress.style.display="block";
    ress.style.color="red";
    ress.style.textAlign="center";

if(doc.data().result>2){
    ress.innerHTML='congratulation you pass'
}
else{
    ress.innerHTML='sorry you fail'  
}
})
   })
   }




// ye check kiya hay***********************************
function demo(id){
    var docRef = db.collection("name").doc(id.value);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });







    // var answer= document.querySelector('input[type=checkbox]:checked').value;
    // console.log("check kiya hay bhai*****************8",answer)

}