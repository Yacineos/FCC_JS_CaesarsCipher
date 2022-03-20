function rot13(str) {
    let arr=[];
    str = str.toUpperCase();
    for(var i =0 ; i< str.length ; i++){
        if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91){
            if(str.charCodeAt(i)+13>90){
                arr.push(String.fromCharCode(str.charCodeAt(i)+13 -90+64));
            }else{
       arr.push(String.fromCharCode(str.charCodeAt(i)+13));
            }

        }else{
            arr.push(str[i]);
        }
    }
    str = arr.join("");
    return str;
  }
  console.log(rot13("A B C"));