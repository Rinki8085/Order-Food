let image = document.createElement('img');
let p1 = document.createElement('p');
let p2 = true;
let p3 = '';
let time;
 window.onload = function() {
    let dishes = document.getElementById('menu');
    let chks = dishes.getElementsByTagName('input');
    for(let i=0; i<chks.length; i++){
        chks[i].onclick = function (){
            for(let j=0; j<chks.length; j++){
                if(chks[j]!=this && this.checked){
                    chks[j].checked = false;
                    //console.log(chks[j].checked,chks[j])
                }
            }
            if(chks[i].checked==true){
                p3 = chks[i].value;
            }
        }
        
    }
    
 }
 function orderFood(){
    console.log(p3);
        let status = 'open';

                    let mypromise = new Promise(function(resolve, reject){
                        time = Math.floor(Math.random() * 10* 100);

                        setTimeout(function(){
                            if(status=='open'){
                                resolve(p3)
                            }else{
                                reject();
                            }
                        },time);
                    });

                    mypromise.then(function(res){
                        if(`${res}`==='pizza'){
                            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKXuC1duqsa_7A2SC9HZn1szASPgvIJCdczQ&usqp=CAU';
                            p1.innerText = `Order Id- ${time}`;
                            document.querySelector('#showImage').append(p1, image);
                            document.querySelector('#showImage').style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
                        }else if(`${res}`==='burger'){
                            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pkYwwas_BecK34pxDbR0BLIpN3PX5lG5Hw&usqp=CAU';
                            p1.innerText = `Order Id- ${time}`;
                            document.querySelector('#showImage').append(p1, image);
                            document.querySelector('#showImage').style.border = '1 ps solid pink';

                        }else if(`${res}`==='momos'){
                            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3hO-pX4U6BUmSu6sIORbZ1hO-AbU_JmzjQ&usqp=CAU';
                            p1.innerText = `Order Id- ${time}`;
                            document.querySelector('#showImage').append(p1, image);
                            document.querySelector('#showImage').style.border = '1 ps solid pink';

                        }else if(`${res}`==='dosa'){
                            image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOG6NzR-bXhzIvuKG2tdU35oGRSNKErMafg&usqp=CAU';
                            p1.innerText = `Order Id- ${time}`;
                            document.querySelector('#showImage').append(p1, image);
                            document.querySelector('#showImage').style.border = '1 ps solid pink';

                        }
                    })
}
 
        //        live url of this project

         //       https://elaborate-crepe-ace23e.netlify.app/
