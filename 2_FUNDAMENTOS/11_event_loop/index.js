function a() {
    console.log("Executando a()")
}

function b() {
    console.log('Executando b()')
    a()
}

function c() {
    console.log('Executando c()')
    a()
    b()
}

c()