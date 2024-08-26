
export default function AddStoreUsers(){
     
    var getJSON = function(url:any, callback:any) {
     var xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);
     xhr.responseType = 'json';
     xhr.onload = function() {
       var status = xhr.status;
       if (status === 200) {
         callback(xhr.response, xhr.response);
       } else {
         callback(status, xhr.response);
       }
     };
     xhr.send();
     };

   const initialState_two: any[] = [];
   getJSON('https://api.github.com/users', function(data:any){
     initialState_two.push(...data)   
   })
   
   return initialState_two
 }