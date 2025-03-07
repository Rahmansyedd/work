var index = 0;

function changecolors(){
    var colors = ["red","blue","green","yellow","pink","purple","orange","black"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++]; 

    if(index > colors.length -1)
    index = 0;
} 