// // const date= Date.now().toString();
// // console.log(date);
// // const date= new Date(Date.now()).toDateString();
// // 
// // console.log(date);
// // db.inventory.find({"_id": { $eq: "LS0009100"}}).pretty()
// // fetch('https://localhost:3000/registration', {
// //     method: 'POST',
// //     body: JSON.stringify({
// //       title: 'foo',
// //       body: 'bar',
// //       userId: 1,
// //     }),
// //     headers: {
// //       'Content-type': 'application/json; charset=UTF-8',
// //     },
// //   })
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));
// // const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

// // const count = {};

// // arr.forEach(element => {
// //   count[element] = (count[element] || 0) + 1;
// // });

// // // 👇️ {one: 3, two: 2, three: 1}
// // var  count1;
// // count1=count;
// // console.log(count1.key)
// // const storage = [
// //   { name: '1', status: '0' },
// //   { name: '2', status: '0' },
// //   { name: '3', status: '0' },
// //   { name: '4', status: '0' },
// //   { name: '5', status: '0' },
// //   { name: '6', status: '0' },
// //   { name: '7', status: '1' },
// // ];

// // function statusCounter(inputs) {
// //   let counter = 0;
// //   for (const input of inputs) {
// //     if (input.status === '0') counter += 1;
// //   }
// //   return counter;
// // }

// //  let output= statusCounter(storage);
// //  console.log(output)

// var data= [
//   {
//     name:"manish"
//   },
//   {
//     name:"manish"
//   },
//   {
//     name:"manish"
//   }
//   ,  {
//     name:"manish"
//   },{
//     name:"amardeep"
//   },
//   {
//     name:"amardeep"
//   },
//   {
//     name:"amardeep"
//   }
// ]



// const namedata= data.filter((Object:{ name:"manish"})=>{

// })
// // console.log(data[1].name,"helllooooooooooo")

// // var count;
// // for( var i=0;i<data.length;i++){
// //   for(var j=i+1;j>=i;j++){
// //     console.log(data)
// //     if(data[i].name===data[j].name){
      
// //      count = count+1;
// //       }
// //       console.log(count);
// //     }
// //   }

function findOcc(arr, key){
  let arr2 = [];
    
  arr.forEach((x)=>{
    
    // Checking if there is any object in arr2
    // which contains the key value
    if(arr2.some((val)=>{ return val[key] == x[key] })){
      
    // If yes! then increase the occurrence by 1
    arr2.forEach((k)=>{
      if(k[key] === x[key]){
      k["occurrence"]++
      }
    })
      
    }else{
    // If not! Then create a new object initialize
    // it with the present iteration key's value and
    // set the occurrence to 1
    let a = {}
    a[key] = x[key]
    a["occurrence"] = 1
    arr2.push(a);
    }
  })
    
  return arr2
  }
  
  
  let arr = [
  {
    employeeName: "Ram",
    employeeId: 23
  },
  {
    employeeName: "Shyam",
    employeeId: 24
  },
  {
    employeeName: "Ram",
    employeeId: 21
  },
  {
    employeeName: "Ram",
    employeeId: 25
  },
  {
    employeeName: "Kisan",
    employeeId: 22
  },
  {
    employeeName: "Shyam",
    employeeId: 20
  }
  ]
  
  let key = "employeeName"
  console.log(findOcc(arr, key))

  
