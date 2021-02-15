function showMenu(){
    if(document.getElementById("menu-nav").style.display == 'flex'){
        document.getElementById("menu-nav").style.display = 'none';
    }else{
        document.getElementById("menu-nav").style.display = 'flex';
    }
}

function nextSlide(id){
    let slides = document.getElementsByClassName('swiper-slide')
    for (let i=0;i<slides.length;i++){
        slides[i].classList.add('hide');
        setTimeout(() => {slides[i].style.display = 'none'; slides[i].classList.remove('hide');},1500)
    }
    let slide = document.getElementById(id)
    slide.classList.add('show')
    setTimeout(() => {slide.style.display = 'flex';slide.classList.remove('show')},1500)
}

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#arrow').fadeIn();
            $('#header').css('background-color','#4c1e51');
            $('#header').css('position','fixed');
        } else {
            $('#arrow').fadeOut();
            $('#header').css('background-color','#2d0a31');
            $('#header').css('position','static');  
        }
    });

    // scroll body to 0px on click
    $('#arrow').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1600);
        return false;
    });
});


$(function (){
    $('#blog-menu').hide()
    $('#blog-link').hover(() => {
        $('#blog-menu').show();
        $('#blog-menu').on("mouseleave", () => {
            $('#blog-menu').hide();
        });
    })
})

let data = [{
    name:'',
    text:'',
    email:'',
    subject:''
}]

$(function (){
    let auth = localStorage.auth
    let content = ''
    if (auth){
        let name = localStorage.userName
        $('#auth-user').html('')
        content = "<a id='userName'>"+ name +"</a>" +
        "<div class='log-out-div'><button onclick='logout()'>Log out</button></div>"
        $('#auth-user').append(content)
    }
    $('#userName').click(()=>{
        $('.log-out-div').toggle()
    })
})

function logout(){
    localStorage.removeItem('auth')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    window.location.href = '/'
}


// function saveData(){
//     try{
//         let text = document.getElementById('form-text').value
//         let name = document.getElementById('form-name').value
//         let email = document.getElementById('form-email').value
//         let subject = document.getElementById('form-subject').value
//         data.push({text: text, name: name, email: email, subject: subject})
//         localStorage.setItem('userData',JSON.stringify(data))
//     }catch(error){
//         console.log(error,'This is error')
//     }
// }

// if (localStorage.userData){
//     data = JSON.parse(localStorage.userData)
//     data.map(item => {
//         if (item.name != ''){
//             let ul = document.getElementById('list')
//             let li = document.createElement("li");
//             li.innerHTML = 'Email:' + item.email
//             let li2 = document.createElement("li");
//             li2.innerHTML = 'Name:' + item.name
//             ul.appendChild(li);   
//             ul.appendChild(li2); 
//         }    
//     })
// }

