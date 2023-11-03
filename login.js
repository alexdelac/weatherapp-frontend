

// Insert your code here
document.querySelector('#register').addEventListener('click', function(){
	let name = document.querySelector('#registerName').value
    let email = document.querySelector('#registerEmail').value
    let password = document.querySelector('#registerPassword').value
    const newUser = {
        name: name,
        email: email,
        password: password
    }
	
	fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    }).then(response=>response.json())
        .then(data=>{
            console.log(data)
            if(data.result === true){
                window.location.assign('index.html')
            }
        })
})


document.querySelector('#connection').addEventListener('click', function(){
    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: document.querySelector('#connectionEmail').value, password: document.querySelector('#connectionPassword').value})
    }).then (response=>response.json())
        .then(data=>{
            console.log(data)
            if(data.result === true){
                window.location.assign('index.html')
            }
        })
})