$(document).ready(function () {
    $('#mainDiv').hide()
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Hola niña bonita 😍',
            text: 'Me gustaría contarle un secreto, puedo? 🙈',
            showDenyButton: true,
            denyButtonText: ' No 😔',
            confirmButtonText: `Si 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            NoEsUnSecreto()
        } else if (result.isDenied) {
            PorFavorDejemeSeguir()
        }
      })
})

function PorFavorDejemeSeguir() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Por favor 🙏',
            text: 'Es algo muy importante, puedo? 🙈',
            showDenyButton: true,
            denyButtonText: ' No 😔',
            confirmButtonText: `Si 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            NoEsUnSecreto()
        } else if (result.isDenied) {
            PorFavorDejemeSeguir()
        }
      })
}

function NoEsUnSecreto() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Bueno, no es tán secreto 🙈',
            text: 'Porque ya se lo he dicho antes, perooooo, puedo continuar?',
            showDenyButton: true,
            denyButtonText: ' No 😔',
            confirmButtonText: `Si 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            ElSecreto()
        } else if (result.isDenied) {
            NoEsUnSecretoPeroPuedoSeguir()
        }
      })
}

function NoEsUnSecretoPeroPuedoSeguir() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Andele oiga, será rápido 🙈',
            text: 'Bueno aquí vámos 🙊, presiónele ahí abajito para continuar 🙏',
            showDenyButton: false,
            confirmButtonText: `Adelante 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            ElSecreto()()
        }
      })
}

function ElSecreto() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'El secreto es que....',
            text: 'Es usted muy hermosa de pies a cabeza 😍💗 es coomo si la hubieran creado los mismísimos ángeles 🙈 le dije que no era tan secreto 🙈',
            showDenyButton: false,
            confirmButtonText: `Sigueme contando más 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            PequenaHistoria()
        }
      })
}

function PequenaHistoria() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Ahora déjeme contarle una pequeñita historia...',
            text: 'Muy pequeñita y breve se lo prometo 😊',
            showDenyButton: false,
            confirmButtonText: `Sigueme contando más 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            SiPuedoContinuarConElSecreto()
        }
      })
}

function SiPuedoContinuarConElSecreto() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Fíjese que el día 12 de Agosto 🙈',
            text: 'Conocí a una muchacha en un partido de fútbol ⚽ no creí que fuese un buen lugar para una primera cita pero igual me arriesgué 😅',
            showDenyButton: false,
            confirmButtonText: `Sigueme contando más 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia1()
        }
      })
}

function ContandoLaHistoriaDia1() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Total, fuímos a la cita y todo salió a la perfección 😍',
            text: 'Cenamos taquitos, la llevé por su carro y de ahí la acompañé casi hasta su casa 😅 muy preocupón para una primera cita 🙈 pero me importaba mucho que llegara con bien 😄 la dejé y todo el camino no se me salia de la cabeza su carita toda preciosa 😍 en ese momento supe que estaba en problemas porque lo único que quería era ver esa carita por el resto de mis días 😍',
            showDenyButton: false,
            confirmButtonText: `Sigueme contando más 😊`,
        }
    )
    .then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia2()
        }
      })
}

function DesdeElPrimerDia() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Desde el primer día de la cita....',
            text: 'Mi meta ha sido y será hacerte sentir especial y muy consentida, si se puede que seas la mujer más feliz de este planeta, demostrarte que no todos somos iguales, existimos unos que sabemos querer bien y bonito 😍💗 esto puede ser el inicio de algo hermoso pero ahora lo dejo en sus manos 🙈',
            showDenyButton: false,
            confirmButtonText: `Sigueme contando más 😊`,
        }
    )
    .then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia4()
        }
      })
}

function ContandoLaHistoriaDia2() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Hasta la fecha seguimos saliendo y cada día que pasa me gusta más y más 😍',
            text: 'Me ha llenado en tan poco tiempo y complementado a la perfección que estoy seguro que ya no necesito nadie más que no sea ella 🙈',
            showDenyButton: false,
            confirmButtonText: `Sigueme contando más 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia3()
        }
      })
}

function ContandoLaHistoriaDia3() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Lo he pensando bastante porque como todo comienzo siempre existe un poco de incertidumbre peroooo',
            text: 'Estoy seguro que esa muchacha me va a querer igual de bonito como yo la voy a querer a ella, no cree? 🙈',
            showDenyButton: false,
            confirmButtonText: `Claro que si😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            DesdeElPrimerDia()
        }
      })
}

function ContandoLaHistoriaDia4() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Así que, Laura Vanessa Montenegro Ortiz, hoy Viernes, 19 de Agosto del 2022',
            text: 'Me gustaría preguntarle a través de éste pequeño proyectito, una pregunta que va a cambiarlo todo 🙈, continuará....',
            showDenyButton: false,
            confirmButtonText: `Claro que si😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia5()
        }
      })
}

function ContandoLaHistoriaDia5() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Fue todo...',
            text: 'Gracias',
            showDenyButton: false,
            confirmButtonText: `Aceptar`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia6()
        }
      })
}

function ContandoLaHistoriaDia6() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'No se crea oiga 🙈',
            text: 'Le gustaría ser mi novia? 🙈🙈🙈🙈🙈',
            showDenyButton: true,
            denyButtonText: ' No 😔',
            confirmButtonText: `Si 😊`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            LePrometo()
        } else if (result.isDenied) {
            Andele()
        }
      })
}

function Andele() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Andele oiga 🙈',
            text: 'Le prometo que no se va a arrepentir 😍, ya en este punto ya no puede decir que no 🙈',
            showDenyButton: false,
            confirmButtonText: `Aceptar`,
        }
    )
    .then((result) => {
        if (result.isConfirmed) {
            ContandoLaHistoriaDia6()
        }
      })
}

function LePrometo() {
    Swal.fire(
        {
            allowOutsideClick: false,
            title: 'Muchas gracias mi reina 😍',
            text: 'Me has hecho el hombre más felíz de este planeta, le prometo que no se va a arrepentir... 😍',
            showDenyButton: false,
            confirmButtonText: `Aceptar`,
        }
    ).then((result) => {
        if (result.isConfirmed) {
            $('#mainDiv').show()
        }
    })
}