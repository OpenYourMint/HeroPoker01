//alert('ti krisa!');
//confirm('ti krisa?');


function dobavitPoltos(chislo) {
    return chislo + 50;
}

var krisa = -100;
krisa = krisa + 50;
krisa = dobavitPoltos(krisa);
krisa++;
krisa--;
krisa += 50;
function skolkoKris(koli4estvoKris) {
    if (koli4estvoKris <= 100) {
        alert('Nygno bolwe kris');
    } else {
        alert('kris dostato4no');
    }
}
function to4noSkolkoKris(kolvoKris) {

    if (kolvoKris <= 0) {
        return "Kris sovsem net";
    }

    if (kolvoKris <= 100) {
        return 'Kris vsego ' + kolvoKris + '! Dobyd`te bolwe kris';
    }

    if (kolvoKris > 100) {
        return "xvatit pograt`";
    }

}

var text = to4noSkolkoKris(1);
//alert(text);
//skolkoKris(krisa);

var geroi = ['krisa', 'krisolov', 'krisolovolov'];
var igroki = [
    { name: 'trump', age: 64, pro: false},
    { name: 'obama', age: 44, pro: true}
];

function privetstvie() {

    var imia = document.getElementById('input1').value.toLowerCase();
    if (imia === 'kirill' || imia === 'demo') {
        var pirog = {
            name: 'krisa',
            lastname: 'albertovna',
            age: 55,
            lubitSobak: false
        };


        //var imia = pirog.name;

        //imia = imia.toUpperCase();
        console.log(imia[0]);
        console.log(imia[1]);
        console.log(imia[2]);
        var imiaSBolshoiBukvi = imia[0].toUpperCase() + imia.slice(1);
        alert('privet ' + imiaSBolshoiBukvi + ' ' + pirog.lastname + ' ' + 'vam sei4as ' + pirog.age + ' vi ' + geroi[2]);
        console.log(igroki[1].name);
    }
    else {
        alert('idi nahui mraz');
    }
}
function vremia() {
    var skolkoVremeni = new Date();
    console.log( 'moskovskoe vremia ' + skolkoVremeni);

}

//document.getElementById('pole1').innerHTML = 'asdff22';
function pere4islenieKlassov() {

    var text = '';

    for(index in geroi) {
        if (index == geroi.length - 1) {
            text+= geroi[index] + '.';
            continue;
        }
        text += geroi[index] + ', ';
    }

    document.getElementById('pole1').innerHTML = 'существует ' + geroi.length +' типа героев : ' + text ;
}

pere4islenieKlassov();
function godMode() {
    var text2 = document.getElementById('input1').value;
    if (text2 === '') {
        alert('vvedi klass, yebok!');
        return;
    }
    geroi.push(text2);
    document.getElementById('input1').value = '';
    pere4islenieKlassov()
}