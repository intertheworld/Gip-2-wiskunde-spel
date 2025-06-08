const bergen = [
    './img/ImgForDem/bergen/berg-1.jpg',
    './img/ImgForDem/bergen/berg-2.jpg',
    './img/ImgForDem/bergen/berg-3.jpg',
];
const strand = [
    './img/ImgForDem/strand/strand-1.jpg',
    './img/ImgForDem/strand/strand-2.jpg',
    './img/ImgForDem/strand/strand-3.jpg',
    './img/ImgForDem/strand/strand-4.jpg',
    './img/ImgForDem/strand/strand-5.jpg',
];
const dieren = [
    './img/ImgForDem/dieren/anim-1.jpg',
    './img/ImgForDem/dieren/anim-2.jpg',
    './img/ImgForDem/dieren/anim-3.jpg',
    './img/ImgForDem/dieren/anim-4.jpg',
    './img/ImgForDem/dieren/anim-5.jpg',
    './img/ImgForDem/dieren/anim-6.jpg',
];
const kunst = [
    './img/ImgForDem/kunst/art-1.jpg',
    './img/ImgForDem/kunst/art-2.jpg',
    './img/ImgForDem/kunst/art-3.jpg',
];
const autos = [
    './img/ImgForDem/autos/auto-1.jpg',
    './img/ImgForDem/autos/auto-2.jpg',
    './img/ImgForDem/autos/auto-3.jpg',
    './img/ImgForDem/autos/auto-4.jpg',
    './img/ImgForDem/autos/auto-5.jpg',
    './img/ImgForDem/autos/auto-6.jpg',
    './img/ImgForDem/autos/auto-7.jpg',
    './img/ImgForDem/autos/auto-8.jpg',
    './img/ImgForDem/autos/auto-9.jpg',
    './img/ImgForDem/autos/auto-10.jpg',
];
const ruimte = [
    './img/ImgForDem/ruimte/space-1.jpg',
    './img/ImgForDem/ruimte/space-2.jpg',
    './img/ImgForDem/ruimte/space-3.jpg',
    './img/ImgForDem/ruimte/space-4.jpg',
];

const catFotos = {
    bergen,
    strand,
    dieren,
    kunst,
    autos,
    ruimte,
};

// Functie om een willekeurige afbeelding te kiezen uit een geselecteerde categorie
function randomIndx(catName) {
    const categorie = catFotos[catName];
    // een willekeurig getal uit een bepaalde array te kiezen.
    let randomIndex = Math.floor(Math.random() * categorie.length);
    // de link van de geselecteerde foto toevoegen 
    $(".achtergrondPhoto").css("background-image", `url(${categorie[randomIndex]})`);
    console.log(categorie[randomIndex])
}

$(function () {
    $(".gif-animation").hover(
        function () {
            let fotocategorie = $(this).data("category"); // Haal de categorie uit een data-attribuut
            $(this).attr("src", './img/icons/gifIcons/' + fotocategorie + '.gif');
        },
        function () {
            let fotocategorie = $(this).data("category");
            setTimeout(() => {
                $(this).attr("src", './img/icons/gifIcons/static' + fotocategorie + '.png');
            }, 600);
        }
    );
});

let rows = 0;
let columns = 0;
let range = 0;
let symbols = [];
let fotocategorie
function settings() {
    // foto categorie kiezen
    fotocategorie = $("input[name='foto-categorie']:checked").val();

    // moelijkheidsgraad kiezen 
    const difficulty = $("input[name='moeilijkheidsgraad']:checked").val();
    switch (difficulty) {
        case "easy":
            rows = 3;
            columns = 3;
            $(".inpSt").css("padding", "1rem;");
            break;
        case "medium":
            rows = 3;
            columns = 4;
            $(".inpSt").css("padding", "0.2rem;");
            break;
        case "hard":
            rows = 4;
            columns = 4;
            $(".inpSt").css("padding", "0.2rem;");
            break;
    }
    // bereik kiezen
    const rangeval = $("input[name='range']:checked").val();
    switch (rangeval) {
        case "10":
            range = 10;

            break;
        case "50":
            range = 50;

            break;
        case "100":
            range = 100;
            break;

    }

    symbols = $("input[name='symbols']:checked").map(function () {
        return this.value;
    }).get();
    console.log(symbols);

    // controleer dat alles ingevuld
    if (fotocategorie && range > 0 && columns > 0 && rows > 0 && symbols.length > 0) {
        randomIndx(fotocategorie);
        $('body').addClass('no-scroll');
        $('.settings-section').addClass('slide-out');
        $('.game-section').removeClass('hidden');
        $('.settings-section').css('z-index', '2');
        createRaster(rows, columns);
    } else {
        alert("Gelieve alle velden in te vullen");
        console.log("Gelieve alle velden in te vullen");
    }
}

// begin btn
function beginOef() {
    // functie op roepen
    settings();
}



// oefeningen tonnen
let results = []
function createRaster(rows, columns) {
    let html = '';
    let k = 0;
    let colID = 0;
    // symbols kiezen
    for (let i = 0; i < rows; i++) {
        html += '<div class="row rect">';
        for (let j = 0; j < columns; j++) {

            const randomSymb = Math.floor(Math.random() * symbols.length);
            const symbol = symbols[randomSymb];

            // getalen kiezen 1 tot range
            let number1 = Math.floor(Math.random() * range) + 1;
            let number2 = Math.floor(Math.random() * range) + 1;
            if (symbol === '/') {
                do {
                    number1 = Math.floor(Math.random() * range) + 1;
                    number2 = Math.floor(Math.random() * range) + 1;
                } while (number1 % number2 !== 0);
            }
            
            // Stel de CSS-variabele --columns in om het aantal kolommen in de CSS dynamisch te wijzigen
            document.documentElement.style.setProperty('--columns', columns);
            // Stel de CSS-variabele --rows in om het aantal rijen in de CSS dynamisch te wijzigen
            document.documentElement.style.setProperty('--rows', rows);

            html += '<div class="col oef" id="oef-' + colID + '" >\
            '+ '<p class="parSt">' + number1 + ' ' + symbol + ' ' + number2 + '</p><input class="inpSt" id="result-' + k + '" type="number" onchange="checkResult(\'' + k + '\')" value="">\
            </div>';
            switch (symbol) {
                case '+':
                    results.push(number1 + number2)
                    break;
                case '-':
                    results.push(number1 - number2)
                    break;
                case '*':
                    results.push(number1 * number2)
                    break;
                case '/':
                    results.push(number1 / number2)
                    break;
            }
            k++;
            colID++;
        }

        html += '</div>';
    }
    $('#content').html(html)
    console.log(results);
}


let trueAnswers = 0;
let falseAnswers = 0;
function checkResult(index) {
    console.log("index:" + index);
    console.log('result:' + results[index]);

    let antword = $('#result-' + index).val()
    console.log('antword: ' + antword)

    if (results[index] != antword) {
        $('#oef-' + index).css('background-color', '#FD292F')
        falseAnswers++;

    } else if (results[index] == antword) {
        $('#oef-' + index).addClass('fadeOut')
        $('#oef-' + index).css('border', '0px')
        $('#oef-' + index).css('pointer-events', 'none')
        trueAnswers++;
    }
    if (results != 0 && trueAnswers == results.length) {
        let score = Math.round(((trueAnswers - falseAnswers) / trueAnswers) * 100);
        // 5 second delay
        setTimeout(() => {
            $('.control-btn').removeClass('hide');
        }, 5000);

        $('#correct-answers').val(trueAnswers);
        $('#incorrect-answers').val(falseAnswers);
        $('#total-score').val(score);

    }

}

function showResult() {
    $('.result-section').addClass('slide-in');
    $('.control-btn').addClass('hide');
    $('.result-section').removeClass('hidden');
    $('.result-section').css('z-index', '3');
    setTimeout(() => {
        $('.game-section').addClass('hidden');
    }, 1000);
    $('body').removeClass('no-scroll');

    let total = trueAnswers + falseAnswers;
    let percentage = ((trueAnswers / total) * 100).toFixed(1) + "%";

    let labels = ["Juste Antworden", "Foute Antworden"];
    let colors = ["#1e7145", "#b91d47"];

    new Chart("resultDoughnut", {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: colors,
                data: [trueAnswers, falseAnswers]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let value = tooltipItem.raw;
                            let percent = ((value / total) * 100).toFixed(1) + "%";
                            return labels[tooltipItem.dataIndex] + ": " + value + " (" + percent + ")";
                        }
                    }
                }
            },
            legend: {
                display: false
            }
        },
        plugins: [{
            beforeDraw: function (chart) {
                let width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;

                ctx.restore();
                let fontSize = (height / 10).toFixed(2);
                ctx.font = fontSize + "px Arial";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";

                let text = percentage,
                    textX = width / 2,
                    textY = height / 2;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });
}


// cheat functie om alle oefeningen op te lossen
function solve() {
    for (let i = 0; i < results.length; i++) {
        const input = $('#result-' + i);
        input.val(results[i]);
        input.trigger('change');
    }
}

function reloadbtn() {
    setTimeout(function () {
        // pagina vernieuwen
        location.reload();
    }, 500)
}
