display='none';

if(display=='none'){

document.getElementById('boton').addEventListener('click', function(){

    document.getElementById('info').style.display='block';
});
}

if(display=='block'){

document.getElementById('boton').addEventListener('click', function(){
    
    document.getElementById('info').style.display='none';
});
}