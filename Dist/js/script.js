// // const numbers = [1,2,3,4,5,6,7,8,9];

// // for (let i = 0; i<numbers.length; i++){
// //     numbers[i] +=1;
// // }

// // console.log(numbers);

// 1. naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
console.log ("*****************1**********************")


for (let i = 1; i<6; i++){
    console.log("labas");
};

// 2. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje 
// eilutėje);
console.log ("******************2*********************")


for (let i = 0; i<5; i++){
    console.log(i)
}

// 3. naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius 
// vienoje eilutėje);
console.log ("*******************3********************")

for (let i = 0; i<41; i=i+10){
    console.log(i)
}

// 4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius 
// vienoje eilutėje);
console.log ("*******************4********************")


for (let i = 49; i<54; i++){
    console.log(i)
}

// 5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje 
// eilutėje);
console.log ("*********************5******************")

for (let i = 4; i>=0; i--){
    console.log(i)
}

// 6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje);
console.log ("********************6*******************")

for (let i = 0; i<5; i++){
    a = Math.floor(Math.random()*(10-1))+1
console.log(a)
}

// 7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
// vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
console.log ("*******************7********************")

// let i=0;

// while (i!==5){
//     i=Math.floor(Math.random()*11);
//     console.log(i)
// } 

// 8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius 
// vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log ("*******************8********************")

let i;
let sum = 0;

while (sum <= 100){
    i = Math.floor(Math.random()*11)
    sum = i+sum
} console.log(sum+i)

// 9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
// vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek 
// ciklų prasisuko;
console.log ("*******************9********************")

// let i;
// let c = 0;

// while (i!==7 && i!==5){    
//     i=Math.floor(Math.random()*11);
//     console.log(i)
//     c++
    
// } console.log("Prasisuko ciklu "+c)

// 10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n 
// centimetrus coliais ir atvirkščiai.
console.log ("*******************10********************")

function cm (){
    let n = window.prompt("Iveskite centimetrus")
    for (m=1; m<=n; m++){
        console.log(m+"cm = "+(m/2.54).toFixed(2)+" inch");
    }
}

function inch (){
    let n = window.prompt("iveskite inch'us")
    for (m=1; m<=n; m = m++){
        console.log(m+"inch = "+(m*2.54).toFixed(2)+" inch")
    }
}


// 11. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
// kasmetinę banko ataskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
// indėlį.
console.log ("*******************11********************")



function ataskaita (){
    let ind = 100;
    let n=window.prompt("Iveskite metus")

    for (m=1; m<=n; m++){
        console.log(m + " metais bus "+ (ind*0.02).toFixed(2) +" palukanu ir "+ (ind*1.02).toFixed(2)+" indelis")
        ind = ind+(ind*0.02);
        ind = ind*1.02
    }
}


// 12. . Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei 
// tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už 
// duotąjį, raskite tą skaičių.
console.log ("*******************12********************")

    for (let i=10; i<100; i++){
        let vnt = i%10;
        let dsmt = Math.floor(i/10);
        if(dsmt == vnt*3 && (vnt*10+dsmt)+36 == i){
            console.log(i);
        }       
        
    }

// 13. Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina 
// iš 998 ?
console.log ("*******************13********************")

    for (i=1000; i<=9999; i++){
        if (i%998 !== 0 && Math.floor(i/1000) % 2 === 0){
            console.log(i)
        }
    }

// 14. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra 
// keliamieji, jei dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 
// metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros 
// keliamuosius metus.
console.log ("*******************14********************")

for (i = 0; i <= 2021; i++){
    if (i%4 == 0 && i%100 !== 0 || i%400 == 0){
        console.log("Metai keliamieji " + i)
    }
} 

// 15. Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės 
// tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus 
// pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą, 
// spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti 
// nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie 
// bilietų numeriai: 998 1002
console.log ("*******************15********************")

    function pnklk(){
        let m = 997;
        let n = 1003;
        for(bil=m; bil<=n; bil++){
            if(bil%10!==0 && bil%2==0){
                console.log("Bilietas "+bil);
            }
        }
    }

// 16. Duotas natūralus skaičius n. Raskite pirmą skaitmenį
// console.log ("*******************16********************")

// 17. Duotas natūralusis skaičius n. Raskite skaitmenų sumą.
// console.log ("*******************17********************")

// 18. Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321
// console.log ("*******************18********************")

// 19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią 
// skaitmenį.
// console.log ("*******************19********************")

// 20. Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą, 
// kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.
// console.log ("*******************20********************")

// 21. Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite 
// programą, kuri apskaičiuotų:
// a. Kiek žiedų buvo po n dienų
// b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų.
// console.log ("*******************21********************")

// 22. Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių 
// daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. Parašykite 
// programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių 
// medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo. 
// Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma: 
// Sodininkas dirbs 4 dienas
// console.log ("*******************22********************")
