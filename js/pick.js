//変数定義
	let  x1, x2, x3, x4, x5;

// ページが読み込まれたら実行
window.onload = function() {

     // オブジェクトと変数の準備
     var count_disp = document.getElementById("disp_count");  
     var btn_L = document.getElementById("btn_L");
     var btn_R = document.getElementById("btn_R");
     var count_value = 1;
     
     //ポケモンを選択（最初）
     var random1 =  Math.floor(Math.random() * list_0.length);
     document.nForm.elements[poke[0]].value= list_0[random1];
     var random2 =  Math.floor(Math.random() * list_0.length);
     if(random1 == random2){
     	if(random1 == (list_0.length - 1)){
     		random2 = 0;
     	}else{
     		random2 = random1 +1;
     	}
     }
     document.nForm.elements[poke[1]].value= list_0[random2];
     
     
     // 左ボタンクリック処理
     btn_L.onclick = function (){
          output(count_value, 0);
          
          //if(count_value >= 6){
          //	location.href='complete.html';
          //}else{
          		count_value += 1;
          //}
          count_disp.innerHTML = count_value;
     }
     // 左ボタンのマウスダウン処理
     btn_L.onmousedown = function() {
          btn_L.style.backgroundColor = "#00FF00";
     }
     // 左ボタンのマウスアップ処理
     btn_L.onmouseup = function() {
          btn_L.style.backgroundColor = "";
     }
     // 右ボタンのクリック処理
     btn_R.onclick = function (){
          output(count_value, 1);
          
          //if(count_value >= 6){
          //	location.href='complete.html';
          //}else{
          		count_value += 1;
          //}
          count_disp.innerHTML = count_value;
     }
     // 右ボタンのマウスダウン処理
     btn_R.onmousedown = function() {
          btn_R.style.backgroundColor = "#00FF00";
     }
     // 右ボタンのマウスアップ処理
     btn_R.onmouseup = function() {
          btn_R.style.backgroundColor = "";
     }
     
};

//文字出力
function output(count_num, num){
	 
	 var n1, n2;
	 
	 if(count_num == 1){
          p0.innerHTML = "ポケモン選択(鋼タイプorワイドガード枠)";
          x1 = document.nForm.elements[poke[num]].value;
          p1.innerHTML = x1;
          random1 =  Math.floor(Math.random() * list_1.length);
          n1 = list_1[random1];
          while(n1 == x1){
          	random1 = Math.floor(Math.random() * list_1.length);
          	n1 = list_1[random1];
          }
          document.nForm.elements[poke[0]].value= n1;
          
          random2 =  Math.floor(Math.random() * list_1.length);
          n2 = list_1[random2];
          while((random1 == random2)||(n2 == x1)){
          	random2 =  Math.floor(Math.random() * list_1.length);
          	n2 = list_1[random2];
          }
          document.nForm.elements[poke[1]].value= n2;
          
     }else if(count_num == 2){
          p0.innerHTML = "ポケモン選択(ねこだまし枠)";
          x2 = document.nForm.elements[poke[num]].value;
          p2.innerHTML = x2;
          random1 =  Math.floor(Math.random() * list_2.length);
          n1 = list_2[random1];
          while((n1 == x1)||(n1 == x2)){
          	random1 = Math.floor(Math.random() * list_2.length);
          	n1 = list_2[random1];
          }
          document.nForm.elements[poke[0]].value= n1;
          
          random2 =  Math.floor(Math.random() * list_2.length);
          n2 = list_2[random2];
          while((random1 == random2)||(n2 == x1)||(n2 == x2)){
          	random2 =  Math.floor(Math.random() * list_2.length);
          	n2 = list_2[random2];
          }
          document.nForm.elements[poke[1]].value= n2;
          
     }else if(count_num == 3){
          p0.innerHTML = "ポケモン選択(S操作枠)";
          x3 = document.nForm.elements[poke[num]].value;
          p3.innerHTML = x3;
          random1 =  Math.floor(Math.random() * list_3.length);
          n1 = list_3[random1];
          while((n1 == x1)||(n1 == x2)||(n1 == x3)){
          	random1 = Math.floor(Math.random() * list_3.length);
          	n1 = list_3[random1];
          }
          document.nForm.elements[poke[0]].value= n1;
          
          random2 =  Math.floor(Math.random() * list_3.length);
          n2 = list_3[random2];
          while((random1 == random2)||(n2 == x1)||(n2 == x2)||(n2 == x3)){
          	random2 =  Math.floor(Math.random() * list_3.length);
          	n2 = list_3[random2];
          }
          document.nForm.elements[poke[1]].value= n2;
          
     }else if(count_num == 4){
          p0.innerHTML = "ポケモン選択(いかく枠)";
          x4 = document.nForm.elements[poke[num]].value;
          p4.innerHTML = x4;
          random1 =  Math.floor(Math.random() * list_4.length);
          n1 = list_4[random1];
          while((n1 == x1)||(n1 == x2)||(n1 == x3)||(n1 == x4)){
          	random1 = Math.floor(Math.random() * list_4.length);
          	n1 = list_4[random1];
          }
          document.nForm.elements[poke[0]].value= n1;
          
          random2 =  Math.floor(Math.random() * list_4.length);
          n2 = list_4[random2];
          while((random1 == random2)||(n2 == x1)||(n2 == x2)||(n2 == x3)||(n2 == x4)){
          	random2 =  Math.floor(Math.random() * list_4.length);
          	n2 = list_4[random2];
          }
          document.nForm.elements[poke[1]].value= n2;
          
     }else if(count_num == 5){
          p0.innerHTML = "ポケモン選択(その他枠)";
          x5 = document.nForm.elements[poke[num]].value;
          p5.innerHTML = x5;
          random1 =  Math.floor(Math.random() * list_5.length);
          n1 = list_5[random1];
          while((n1 == x1)||(n1 == x2)||(n1 == x3)||(n1 == x4)||(n1 == x5)){
          	random1 = Math.floor(Math.random() * list_5.length);
          	n1 = list_5[random1];
          }
          document.nForm.elements[poke[0]].value= n1;
          
          random2 =  Math.floor(Math.random() * list_5.length);
          n2 = list_5[random2];
          while((random1 == random2)||(n2 == x1)||(n2 == x2)||(n2 == x3)||(n2 == x4)||(n2 == x5)){
          	random2 =  Math.floor(Math.random() * list_5.length);
          	n2 = list_5[random2];
          }
          document.nForm.elements[poke[1]].value= n2;
          
     }else if(count_num == 6){
          
          p0.innerHTML = "トリプル 2pick";
          p6.innerHTML = document.nForm.elements[poke[num]].value;
          p7.innerHTML = "あなたの使用するパーティーは";
          p8.innerHTML = "です。";
          p9.innerHTML = '<center></br></br><input type="button" class="restart" value="もう1度" onclick="location.href=\'pick.html\'"></center>';
          button_disply.innerHTML = "";
          
          //p10.innerHTML = '</br><a href=\'https://twitter.com/share?ref_src=twsrc%5Etfw\' class="twitter-share-button" data-text="'+
          //p5.innerHTML +
          //'トリプルバトル" data-hashtags="トリプル2pick" data-show-count="false"'+
          //'>Tweet</a><script async src=\'https://platform.twitter.com/widgets.js\' charset="utf-8"></script>';
          //</br></br><center><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="トリプルバトル" data-hashtags="トリプル2pick" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></center>
          //p10.innerHTML = '</center>';
          //p11.innerHTML = '</br></br>' + "です";
          
     }
}
//重複チェック---randomを比較させると左右の一致はなくなった気がする。入力済み文字とのチェックがダメ
