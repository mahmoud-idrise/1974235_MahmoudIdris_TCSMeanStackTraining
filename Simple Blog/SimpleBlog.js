var titleB;
var desc;
var imageInfo;

function addBlog() {
    read_info();
    console.log(titleB)
    console.log(desc);
    console.log(imageInfo);
    add_info_to_blog();
    reset_form();
}

function reset_form() {
    document.getElementById("title").value="";
    document.getElementById("article").value="";  
}

function add_info_to_blog(){
    var parent = document.getElementById("table");
    
    var title_div = document.createElement("div");
    title_div.textContent = titleB;
    var article_div = document.createElement("div");
    article_div.textContent = desc;
    var image_source = document.createElement("img");
    image_source.src = imageInfo;
 
 
    parent.appendChild(title_div);
    parent.appendChild(article_div);
    parent.appendChild(image_source);
   
}

function read_info(){
    titleB = document.getElementById("title").value;
    desc = document.getElementById("article").value;
    imageInfo = document.getElementById("imageId").files[0].name;
}