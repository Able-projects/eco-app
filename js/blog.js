$(function(){
        $.get('http://localhost:3000/blogs',function(data){
            $('#response-blog').html('');
            let content = '';
            let tags = ''
            for (let i=0; i<data.length; i++){
                for(let j = 0; j < data[i].tags.length; j++){
                    // if ((j+1) == data[i].tags.length){
                    //     tags += data[i].tags[j] 
                    // } else {
                    //     tags += ' ' + data[i].tags[j] + ', '
                    // }
                    (j+1) == data[i].tags.length ? tags += data[i].tags[j] : tags += ' ' + data[i].tags[j] + ', '
                }
                content += "<div class='post'><img src='" + data[i].image + "'/>" + 
                "<button><h1>" + data[i].date.split('-')[0] + "</h1><p> " + data[i].date.split('-')[1] + " </p></button>"+
                "<div class='post-inner-div'><a href='./blog-details.html#" + data[i].id + "'><h1>" + data[i].title + "</h1></a><p>" + data[i].description + "</p>" +
                "<div><a href='#'><i class='fas fa-user'></i>" + tags
                + "</a> | " +
                "<a href='#'><i class='fas fa-comments'></i>03 Comments</a>" +
                "</div>" +
                "</div></div>"
                tags = ''
            }
            $('#response-blog').append(content)
        })
    }
)