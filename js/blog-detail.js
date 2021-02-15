id = window.location.href.slice(-1)

$(function(){
    $.get('http://localhost:3000/blogs/'+id,function(data){
        $('#blog-details').html('');
        let content = '';
        let tags = ''
            for(let j = 0; j < data.tags.length; j++){
                (j+1) == data.tags.length ? tags += data.tags[j] : tags += ' ' + data.tags[j] + ', '
            }
            content += "<div><img src='" + data.image + "'/><br>" + 
            "<div class='post-inner-div'><a href='./blog-details.html#" + data.id + "'><h1>" + data.title + "</h1></a>" +
            "<div><a href='#'><i class='fas fa-user'></i>" + tags
            + "</a> | " +
            "<a href='#'><i class='fas fa-comments'></i>03 Comments</a>" +
            "</div>" +
            "</br><p>" + data.description + "</p>" + 
            "<div class='citata-div'> <p>" + data.citata + "</p></div>"+
            "<br><p>" + data.text + "</p>" + 
            "<div class='blog-row'>" +
            "<p><i class='fas fa-heart'></i>Lily and 4 people like this</p>" +
                " <div>"+
                    "<a href='https://www.instagram.com/'><i class='fab fa-instagram'></i></a>"+
                    "<a href='https://www.instagram.com/'><i class='fab fa-pinterest-p'></i></i></a>"+
                    "<a href='https://www.instagram.com/'><i class='fab fa-facebook-f'></i></a>"+
                "</div>"+
            "</div>"+
            "</div></div>"
            tags = ''
        $('#blog-details').append(content)
    })
  }
)

$(function(){
    $.get('http://localhost:3000/comments?blogID='+id,function(data){
        $('#comment-data').html('');
        let content = '';
        for(let i = 0;i<data.length;i++){
            content += "<div class='comment-item'> " +
            "<img src='" + data[i].avatar +"'>"+
            "<div>"+
                "<p>" + data[i].comment + "</p> "+    
                "<div>" +
                    "<p><span>" + data[i].username + " </span>" + data[i].date + "</p>" +
                    "<button>Reply</button>" +
                "</div>" +
            "</div>"+
            "</div>"
    }
        $('#comment-data').append(content)
    })
}
)