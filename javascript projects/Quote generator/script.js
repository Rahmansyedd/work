function generate(){
    var quotes ={
        "Dalai Lama":'"The purpose of our lives is to be happy."',
        " John Lennon" :'"Life is what happens when you are busy making other plans."'
    }
    var authors = object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() *
        author.length)];
        var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    
    
}