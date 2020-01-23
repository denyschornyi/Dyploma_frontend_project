// JavaScript Document
function perRound(num, precision) {
    var precision = 3; //default value if not passed from caller, change if desired
    // remark if passed from caller
    precision = parseInt(precision); // make certain the decimal precision is an integer
    var result1 = num * Math.pow(10, precision);
    var result2 = Math.round(result1);
    var result3 = result2 / Math.pow(10, precision);
    return zerosPad(result3, precision);
}

function zerosPad(rndVal, decPlaces) {
    var valStrg = rndVal.toString(); // Convert the number to a string
    var decLoc = valStrg.indexOf("."); // Locate the decimal point
    // check for a decimal 
    if (decLoc == -1) {
        decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s
        // If decPlaces is greater than zero, add a decimal point
        valStrg += decPlaces > 0 ? "." : "";
    }
    else {
        decPartLen = valStrg.length - decLoc - 1; // If there is a decimal already, only the needed decimal places will be padded with 0s
    }
     var totalPad = decPlaces - decPartLen;    // Calculate the number of decimal places that need to be padded with 0s
    if (totalPad > 0) {
        // Pad the string with 0s
        for (var cntrVal = 1; cntrVal <= totalPad; cntrVal++) 
            valStrg += "0";
        }
    return valStrg;
}
// send the value in as "num" in a variable

// clears field of default value
function clear_field(field) {
        if (field.value==field.defaultValue) {
            field.value=''
        }
    }

err=0;	
    
function oblicz()
{

data = new Array(
new Array(27,0,900), new Array(27,20,1140), new Array(27,40,1320), new Array(27,60,1500), 
new Array(28,0,945), new Array(28,20,1185), new Array(28,40,1365), new Array(27,60,1560), 
new Array(29,0,990), new Array(29,20,1230), new Array(29,40,1410), new Array(29,60,1620), 
new Array(30,0,1020), new Array(30,20,1260), new Array(30,40,1440), new Array(30,60,1665), 
new Array(31,0,1050), new Array(31,20,1290), new Array(31,40,1470), new Array(31,60,1710), 
new Array(32,0,1095), new Array(32,20,1350), new Array(32,40,1530), new Array(32,60,1770), 
new Array(33,0,1140), new Array(33,20,1410), new Array(33,40,1590), new Array(33,60,1830), 
new Array(34,0,1170), new Array(34,20,1440), new Array(34,40,1650), new Array(34,60,1885), 
new Array(35,0,1185), new Array(35,20,1455), new Array(35,40,1680), new Array(35,60,1950), 
new Array(36,0,1200), new Array(36,20,1470), new Array(36,40,1710), new Array(36,60,2040), 
new Array(37,0,1245), new Array(37,20,1515), new Array(37,40,1755), new Array(37,60,2100), 
new Array(38,0,1290), new Array(38,20,1560), new Array(38,40,1800), new Array(38,60,2160), 
new Array(39,0,1335), new Array(39,20,1605), new Array(39,40,1845), new Array(39,60,2205), 
new Array(40,0,1350), new Array(40,20,1650), new Array(40,40,1890), new Array(40,60,2250), 
new Array(41,0,1395), new Array(41,20,1695), new Array(41,40,1935), new Array(41,60,2310), 
new Array(42,0,1440), new Array(42,20,1740), new Array(42,40,1980), new Array(42,60,2370), 
new Array(43,0,1470), new Array(43,20,1795), new Array(43,40,2040), new Array(43,60,2480), 
new Array(44,0,1500), new Array(44,20,1850), new Array(44,40,2210), new Array(44,60,2520), 
new Array(45,0,1550), new Array(45,20,1950), new Array(45,40,2190), new Array(45,60,2580), 
new Array(46,0,1570), new Array(46,20,2010), new Array(46,40,2250), new Array(46,60,2640), 
new Array(47,0,1590), new Array(47,20,2070), new Array(47,40,2310), new Array(47,60,2700), 
new Array(48,0,1620), new Array(48,20,2100), new Array(48,40,2380), new Array(48,60,2745), 
new Array(49,0,1650), new Array(49,20,2130), new Array(49,40,2430), new Array(49,60,2790), 
new Array(50,0,1695), new Array(50,20,2175), new Array(50,40,2475), new Array(50,60,2850), 
new Array(51,0,1740), new Array(51,20,2220), new Array(51,40,2520), new Array(51,60,2910), 
new Array(52,0,1755), new Array(52,20,2240), new Array(52,40,2560), new Array(52,60,2940), 
new Array(53,0,1770), new Array(53,20,2260), new Array(53,40,2600), new Array(53,60,2970), 
new Array(54,0,1800), new Array(54,20,2280), new Array(54,40,2640), new Array(54,60,3000), 
new Array(55,0,1845), new Array(55,20,2325), new Array(55,40,2685), new Array(55,60,3045), 
new Array(56,0,1890), new Array(56,20,2370), new Array(56,40,2730), new Array(56,60,3090), 
new Array(57,0,1925), new Array(57,20,2400), new Array(57,40,2760), new Array(57,60,3120), 
new Array(58,0,1950), new Array(58,20,2430), new Array(58,40,2790), new Array(58,60,3150), 
new Array(59,0,1995), new Array(59,20,2475), new Array(59,40,2835), new Array(59,60,3195), 
new Array(60,0,2040), new Array(60,20,2520), new Array(60,40,2880), new Array(60,60,3240), 
new Array(61,0,2060), new Array(61,20,2540), new Array(61,40,2900), new Array(61,60,3260), 
new Array(62,0,2080), new Array(62,20,2560), new Array(62,40,2920), new Array(62,60,3280), 
new Array(63,0,2100), new Array(63,20,2580), new Array(63,40,2940), new Array(63,60,3300), 
new Array(64,0,2145), new Array(64,20,2625), new Array(64,40,2985), new Array(64,60,3345), 
new Array(65,0,2190), new Array(65,20,2670), new Array(65,40,3030), new Array(65,60,3390), 
new Array(66,0,2230), new Array(66,20,2700), new Array(66,40,3060), new Array(66,60,3420), 
new Array(67,0,2250), new Array(67,20,2730), new Array(67,40,3090), new Array(67,60,3450), 
new Array(68,0,2295), new Array(68,20,2775), new Array(68,40,3145), new Array(68,60,3495), 
new Array(69,0,2340), new Array(69,20,2820), new Array(69,40,3180), new Array(69,60,3540), 
new Array(70,0,2360), new Array(70,20,2840), new Array(70,40,3200), new Array(70,60,3560), 
new Array(71,0,2380), new Array(71,20,2860), new Array(71,40,3220), new Array(71,60,3580), 
new Array(72,0,2400), new Array(72,20,2880), new Array(72,40,3240), new Array(72,60,3600), 
new Array(73,0,2445), new Array(73,20,2925), new Array(73,40,3285), new Array(73,60,3645), 
new Array(74,0,2490), new Array(74,20,2970), new Array(74,40,3330), new Array(74,60,3690), 
new Array(75,0,2520), new Array(75,20,3000), new Array(75,40,3360), new Array(75,60,3720), 
new Array(76,0,2550), new Array(76,20,3030), new Array(76,40,3390), new Array(76,60,3750), 
new Array(77,0,2595), new Array(77,20,3075), new Array(77,40,3435), new Array(77,60,3795), 
new Array(78,0,2640), new Array(78,20,3120), new Array(78,40,3480), new Array(78,60,3840), 
new Array(79,0,2660), new Array(79,20,3140), new Array(79,40,3500), new Array(79,60,3860), 
new Array(80,0,2680), new Array(80,20,3160), new Array(80,40,3520), new Array(80,60,3880), 
new Array(81,0,2700), new Array(81,20,3180), new Array(81,40,3540), new Array(81,60,3900), 
new Array(82,0,2745), new Array(82,20,3225), new Array(82,40,3585), new Array(82,60,3945), 
new Array(83,0,2790), new Array(83,20,3270), new Array(83,40,3630), new Array(83,60,3990), 
new Array(84,0,2820), new Array(84,20,3300), new Array(84,40,3660), new Array(84,60,4020), 
new Array(85,0,2850), new Array(85,20,3330), new Array(85,40,3690), new Array(85,60,4050), 
new Array(86,0,2895), new Array(86,20,3375), new Array(86,40,3735), new Array(86,60,4095), 
new Array(87,0,2940), new Array(87,20,3420), new Array(87,40,3780), new Array(87,60,4140), 
new Array(88,0,2960), new Array(88,20,3440), new Array(88,40,3820), new Array(88,60,4160), 
new Array(89,0,2980), new Array(89,20,3460), new Array(89,40,3840), new Array(89,60,4180), 
new Array(90,0,3000), new Array(90,20,3480), new Array(90,40,3840), new Array(90,60,4200), 
new Array(91,0,3045), new Array(91,20,3525), new Array(91,40,3885), new Array(91,60,4245), 
new Array(92,0,3090), new Array(92,20,3570), new Array(92,40,3930), new Array(92,60,4290), 
new Array(93,0,3120), new Array(93,20,3600), new Array(93,40,3960), new Array(93,60,4320), 
new Array(94,0,3150), new Array(94,20,3630), new Array(94,40,3990), new Array(94,60,4350), 
new Array(95,0,3195), new Array(95,20,3675), new Array(95,40,4035), new Array(95,60,4395), 
new Array(96,0,3240), new Array(96,20,3720), new Array(96,40,4080), new Array(96,60,4440), 
new Array(97,0,3260), new Array(97,20,3740), new Array(97,40,4100), new Array(97,60,4460), 
new Array(98,0,3280), new Array(98,20,3760), new Array(98,40,4120), new Array(98,60,4480), 
new Array(99,0,3300), new Array(99,20,3780), new Array(99,40,4140), new Array(99,60,4500), 
new Array(100,0,3345), new Array(100,20,3825), new Array(100,40,4185), new Array(100,60,4545), 
new Array(101,0,3390), new Array(101,20,3870), new Array(101,40,4230), new Array(101,60,4590), 
new Array(102,0,3420), new Array(102,20,3900), new Array(102,40,4260), new Array(102,60,4620), 
new Array(103,0,3450), new Array(103,20,3930), new Array(103,40,4290), new Array(103,60,4650), 
new Array(104,0,3495), new Array(104,20,3975), new Array(104,40,4335), new Array(104,60,4695), 
new Array(105,0,3540), new Array(105,20,4020), new Array(105,40,4380), new Array(105,60,4740), 
new Array(106,0,3560), new Array(106,20,4040), new Array(106,40,4400), new Array(106,60,4760), 
new Array(107,0,3580), new Array(107,20,4060), new Array(107,40,4420), new Array(107,60,4780), 
new Array(108,0,3600), new Array(108,20,4080), new Array(108,40,4440), new Array(108,60,4800), 
new Array(109,0,3645), new Array(109,20,4125), new Array(109,40,4485), new Array(109,60,4845), 
new Array(110,0,3690), new Array(110,20,4170), new Array(110,40,4530), new Array(110,60,4890), 
new Array(111,0,3730), new Array(111,20,4200), new Array(111,40,4560), new Array(111,60,4920), 
new Array(112,0,3750), new Array(112,20,4230), new Array(112,40,4590), new Array(112,60,4950));


kg = parseInt(document.hydrate.kg.value) ;
min = document.hydrate.min.value ;
env = document.hydrate.env.value ;

if (min == "1") {
window.alert("Please select the daily exercise level that is applicable.")
err = 1;
}

if (env == "") {
window.alert("Please select the environmental condition that is applicable.")
err = 1;
}

if (kg < 27 || kg > 120) {
window.alert("Twoja waga musi się mieścić w zakresie od 27 do 112 kg! Proszę poprawić dane.")
err = 1;
}

if (err == 1) {
kg = 0;
err = 0;
}

for (i=0;i<=data.length-1;i++)
    {
      if (data[i][0] == kg)
       { 
        for (j=0;j<=2;j++)
         {
           if(data[i][j] == min)
            {
            
             ml = (data[i][j+1]);
             vv=perRound((33.814022701843/1000) * (ml * env)/8);
             
             document.getElementById('out').innerHTML="Sugerowane dzienne spożycie wody to " +(ml * env)+" ml co daje około "+vv+" szklanek wody.";

$("#outout").show('slide');
        /*	 document.hydrate.ml.value = (ml * env);
             document.hydrate.oz.value =  perRound((33.814022701843/1000) * (ml * env));  // us oz
             document.hydrate.ozi.value = perRound((35.18628793111174/1000) * (ml * env));  // imp oz
             document.hydrate.gl.value =  perRound((33.814022701843/1000) * (ml * env)/8);  // glasses*/
             break;
            }
         }
        }
     }	
}	



function resetValues(form)
{
for(var i = 0; i < form.elements.length; i++) {
if(form.elements[i].type == "text") { form.elements[i].value = 0;}
}
document.getElementById('out').innerHTML="";
}