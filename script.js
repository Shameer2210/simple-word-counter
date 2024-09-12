function counter()

{   

    const para = document.getElementById('passage');

    const counting = para.value.trim().split(/\S+/g) 
    alert(`The value is ${(counting.length)-1}`)

    
}






