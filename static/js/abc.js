let x = 1;
let soLuong = document.getElementById('so_luong');
function tru(){
 if(x > 0){
  x --;
  
 }
 else{
  x===0;
 }
 soLuong.innerHTML = x;
}
function cong(){
  x ++;
  soLuong.innerHTML = x;
}