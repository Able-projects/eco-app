function loginUser(e){
    e.preventDefault();
    let error = false
    let errorEmail = false
    let errorMessage = false
    let email = $('#login-email').val()
    let password = $('#login-password').val()
    $.get('http://localhost:3000/users',(userData) => {
        for (let i = 0; i < userData.length; i++){
            if (userData[i].email == email){
                if (userData[i].password == password){
                    localStorage.setItem('auth',true)
                    localStorage.setItem('userEmail',email)
                    localStorage.setItem('userName',userData[i].name)
                    window.location.href = '/'
                    break
                } else {
                    error = true
                    errorEmail = false
                    errorMessage = 'Неправильный пароль!'
                }
                break
            } else {
                errorEmail = true
            }
        }
        if (error){
            alert(errorMessage)
        } else if (errorEmail){
            alert('Неправильный email!')
        }
}
)}

function registerUser(e){
    e.preventDefault();
    console.log('test')
    let email1 = $('#register-email').val()
    let password1 = $('#register-password').val()
    let name1 = $("#register-name").val()
    let data = {
        email: email1,
        name: name1,
        password: password1
    }
    $.post('http://localhost:3000/users', data).done(() => {
        localStorage.setItem('auth',true)
        localStorage.setItem('userEmail',email1)
        localStorage.setItem('userName',name1)
        window.location.href = '/'
    })
}