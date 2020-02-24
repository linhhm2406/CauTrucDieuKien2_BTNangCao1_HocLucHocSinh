let test=parseInt(prompt('Nhap vao ket qua bai kiem tra'));
let exam_mid=parseInt(prompt('Nhap vao ket qua bai thi giua ky'));
let exam_final=parseInt(prompt('Nhap vao ket qua bai thi cuoi ky'));

mark_average = Math.round((test + exam_mid*2 + exam_final*3)/6);

if (mark_average>8){
    alert('Hoc luc Gioi');
}else if (mark_average>6.5){
    alert('Hoc luc Kha');
}else if (mark_average>5){
    alert('Hoc luc Trung Binh');
}else {
    alert('Hoc luc Yeu');
}