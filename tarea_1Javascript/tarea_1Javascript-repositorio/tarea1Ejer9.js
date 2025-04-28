function esperaDosSegundos(){
    return new Promise(res => {
        setTimeout(()=> {
            res('proceso completado');
        },2000);
    });
}

async function ejeProces() {
    console.log('empieza proceso');

    const resul=await esperaDosSegundos();

    console.log(resul);

    console.log('fin de proceso');
}

ejeProces();
