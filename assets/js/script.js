
document.addEventListener("DOMContentLoaded", function(){
    
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function(){
            if(this.getAttribute('id')=== 'correct'){
                correctBtnPress();
            }
            else if(this.getAttribute('id')=== 'start'){
                gameDraw();
                document.getElementById('start-screen').style.display = "none";
                document.getElementById('flag-img').style.display = "inline-block";
                document.getElementById('answer-container').style.display = "flex";
                document.getElementById('average').innerText= `N/A`;
            }
            else if(this.getAttribute('id')=== 'reset'){
                resetScoreboard();
            }
            else if(this.getAttribute('id')=== 'instructions'){
                instructionPopUp();
            }
            else if(this.getAttribute('class')=== 'x'){
                document.getElementsByClassName('inst-outer')[0].style.display='none';
            }
            else{
                wrongBtnPress();
            }
        })
    }
})
//list of previous countries used as correct answers.
// and global variables

let countryList =[
    {country:'Afghanistan', iso: 'AF'},
    {country:'Albania', iso: 'AL'},
    {country:'Algeria', iso: 'DZ'},
    {country:'Andorra', iso: 'AD'},
    {country:'Angola', iso: 'AO'},
    {country:'Antigua and Barbuda', iso: 'AG'},
    {country:'Argentina', iso: 'AR'},
    {country:'Armenia', iso: 'AM'},
    {country:'Australia', iso: 'AU'},
    {country:'Austria', iso: 'AT'},
    {country:'Azerbaijan', iso: 'AZ'},
    {country:'Bahamas', iso: 'BS'},
    {country:'Bahrain', iso: 'BH'},
    {country:'Bangladesh', iso: 'BD'},
    {country:'Barbados', iso: 'BB'},
    {country:'Belarus', iso: 'BY'},
    {country:'Belgium', iso: 'BE'},
    {country:'Belize', iso: 'BZ'},
    {country:'Benin', iso: 'BJ'},
    {country:'Bhutan', iso: 'BT'},
    {country:'Bolivia', iso: 'BO'},
    {country:'Bosnia and Herzegovina', iso: 'BA'},
    {country:'Botswana', iso: 'BW'},
    {country:'Brazil', iso: 'BR'},
    {country:'Brunei Darussalam', iso: 'BN'},
    {country:'Bulgaria', iso: 'BG'},
    {country:'Burkina Faso', iso: 'BF'},
    {country:'Burundi', iso: 'BI'},
    {country:'Cabo Verde', iso: 'CV'},
    {country:'Cambodia', iso: 'KH'},
    {country:'Cameroon', iso: 'CM'},
    {country:'Canada', iso: 'CA'},
    {country:'Central African Republic', iso: 'CF'},
    {country:'Chad', iso: 'TD'},
    {country:'Chile', iso: 'CL'},
    {country:'China', iso: 'CN'},
    {country:'Colombia', iso: 'CO'},
    {country:'Comoros', iso: 'KM'},
    {country:'Democratic Republic of The Congo', iso: 'CD'},
    {country:'Republic of the Congo', iso: 'CG'},
    {country:'Costa Rica', iso: 'CR'},
    {country:"Côte d'Ivoire", iso: 'CI'},
    {country:'Croatia', iso: 'HR'},
    {country:'Cuba', iso: 'CU'},
    {country:'Cyprus', iso: 'CY'},
    {country:'Czechia', iso: 'CZ'},
    {country:'Denmark', iso: 'DK'},
    {country:'Djibouti', iso: 'DJ'},
    {country:'Dominica', iso: 'DM'},
    {country:'Dominican Republic', iso: 'DO'},
    {country:'Ecuador', iso: 'EC'},
    {country:'Egypt', iso: 'EG'},
    {country:'El Salvador', iso: 'SV'},
    {country:'Equatorial Guinea', iso: 'GQ'},
    {country:'Eritrea', iso: 'ER'},
    {country:'Estonia', iso: 'EE'},
    {country:'Eswatini', iso: 'SZ'},
    {country:'Ethiopia', iso: 'ET'},
    {country:'Fiji', iso: 'FJ'},
    {country:'Finland', iso: 'FI'},
    {country:'France', iso: 'FR'},
    {country:'Gabon', iso: 'GA'},
    {country:'Gambia', iso: 'GM'},
    {country:'Georgia', iso: 'GE'},
    {country:'Germany', iso: 'DE'},
    {country:'Ghana', iso: 'GH'},
    {country:'Greece', iso: 'GR'},
    {country:'Grenada', iso: 'GD'},
    {country:'Guatemala', iso: 'GT'},
    {country:'Guinea', iso: 'GN'},
    {country:'Guinea-Bissau', iso: 'GW'},
    {country:'Guyana', iso: 'GY'},
    {country:'Haiti', iso: 'HT'},
    {country:'Honduras', iso: 'HN'},
    {country:'Hungary', iso: 'HU'},
    {country:'Iceland', iso: 'IS'},
    {country:'India', iso: 'IN'},
    {country:'Indonesia', iso: 'ID'},
    {country:'Iran', iso: 'IR'},
    {country:'Iraq', iso: 'IQ'},
    {country:'Ireland', iso: 'IE'},
    {country:'Israel', iso: 'IL'},
    {country:'Italy', iso: 'IT'},
    {country:'Jamaica', iso: 'JM'},
    {country:'Japan', iso: 'JP'},
    {country:'Jordan', iso: 'JO'},
    {country:'Kazakhstan', iso: 'KZ'},
    {country:'Kenya', iso: 'KE'},
    {country:'Kiribati', iso: 'KI'},
    {country:'North Korea', iso: 'KP'},
    {country:'South Korea', iso: 'KR'},
    {country:'Kuwait', iso: 'KW'},
    {country:'Kyrgyzstan', iso: 'KG'},
    {country:'Laos', iso: 'LA'},
    {country:'Latvia', iso: 'LV'},
    {country:'Lebanon', iso: 'LB'},
    {country:'Lesotho', iso: 'LS'},
    {country:'Liberia', iso: 'LR'},
    {country:'Libya', iso: 'LY'},
    {country:'Liechtenstein', iso: 'LI'},
    {country:'Lithuania', iso: 'LT'},
    {country:'Luxembourg', iso: 'LU'},
    {country:'North Macedonia', iso: 'MK'},
    {country:'Madagascar', iso: 'MG'},
    {country:'Malawi', iso: 'MW'},
    {country:'Malaysia', iso: 'MY'},
    {country:'Maldives', iso: 'MV'},
    {country:'Mali', iso: 'ML'},
    {country:'Malta', iso: 'MT'},
    {country:'Marshall Islands', iso: 'MH'},
    {country:'Mauritania', iso: 'MR'},
    {country:'Mauritius', iso: 'MU'},
    {country:'Mexico', iso: 'MX'},
    {country:'Micronesia', iso: 'FM'},
    {country:'Moldova', iso: 'MD'},
    {country:'Monaco', iso: 'MC'},
    {country:'Mongolia', iso: 'MN'},
    {country:'Montenegro', iso: 'ME'},
    {country:'Morocco', iso: 'MA'},
    {country:'Mozambique', iso: 'MZ'},
    {country:'Myanmar', iso: 'MM'},
    {country:'Namibia', iso: 'NA'},
    {country:'Nauru', iso: 'NR'},
    {country:'Nepal', iso: 'NP'},
    {country:'Netherlands', iso: 'NL'},
    {country:'New Zealand', iso: 'NZ'},
    {country:'Nicaragua', iso: 'NI'},
    {country:'Niger', iso: 'NE'},
    {country:'Nigeria', iso: 'NG'},
    {country:'Norway', iso: 'NO'},
    {country:'Oman', iso: 'OM'},
    {country:'Pakistan', iso: 'PK'},
    {country:'Palau', iso: 'PW'},
    {country:'Panama', iso: 'PA'},
    {country:'Papua New Guinea', iso: 'PG'},
    {country:'Paraguay', iso: 'PY'},
    {country:'Peru', iso: 'PE'},
    {country:'Philippines', iso: 'PH'},
    {country:'Poland', iso: 'PL'},
    {country:'Portugal', iso: 'PT'},
    {country:'Qatar', iso: 'QA'},
    {country:'Romania', iso: 'RO'},
    {country:'Russia', iso: 'RU'},
    {country:'Rwanda', iso: 'RW'},
    {country:'Saint Kitts and Nevis', iso: 'KN'},
    {country:'Saint Lucia', iso: 'LC'},
    {country:'Saint Vincent and the Grenadines', iso: 'VC'},
    {country:'Samoa', iso: 'WS'},
    {country:'San Marino', iso: 'SM'},
    {country:'Sao Tome and Principe', iso: 'ST'},
    {country:'Saudi Arabia', iso: 'SA'},
    {country:'Senegal', iso: 'SN'},
    {country:'Serbia', iso: 'RS'},
    {country:'Seychelles', iso: 'SC'},
    {country:'Sierra Leone', iso: 'SL'},
    {country:'Singapore', iso: 'SG'},
    {country:'Slovakia', iso: 'SK'},
    {country:'Slovenia', iso: 'SI'},
    {country:'Solomon Islands', iso: 'SB'},
    {country:'Somalia', iso: 'SO'},
    {country:'South Africa', iso: 'ZA'},
    {country:'South Sudan', iso: 'SS'},
    {country:'Spain', iso: 'ES'},
    {country:'Sri Lanka', iso: 'LK'},
    {country:'Sudan', iso: 'SD'},
    {country:'Suriname', iso: 'SR'},
    {country:'Sweden', iso: 'SE'},
    {country:'Switzerland', iso: 'CH'},
    {country:'Syria', iso: 'SY'},
    {country:'Tajikistan', iso: 'TJ'},
    {country:'Tanzania', iso: 'TZ'},
    {country:'Thailand', iso: 'TH'},
    {country:'Timor-Leste', iso: 'TL'},
    {country:'Togo', iso: 'TG'},
    {country:'Tonga', iso: 'TO'},
    {country:'Trinidad and Tobago', iso: 'TT'},
    {country:'Tunisia', iso: 'TN'},
    {country:'Türkiye', iso: 'TR'},
    {country:'Turkmenistan', iso: 'TM'},
    {country:'Tuvalu', iso: 'TV'},
    {country:'Uganda', iso: 'UG'},
    {country:'Ukraine', iso: 'UA'},
    {country:'United Arab Emirates', iso: 'AE'},
    {country:'Great Britain', iso: 'GB'},
    {country:'United States', iso: 'US'},
    {country:'Uruguay', iso: 'UY'},
    {country:'Uzbekistan', iso: 'UZ'},
    {country:'Vanuatu', iso: 'VU'},
    {country:'Venezuela', iso: 'VE'},
    {country:'Vietnam', iso: 'VN'},
    {country:'Yemen', iso: 'YE'},
    {country:'Zambia', iso: 'ZM'},
    {country:'Zimbabwe', iso: 'ZW'},
]; 
let scoreList = [];
let roundLimit = 20;
let scoresObj = {right: 0,wrong: 0,tot: 0,};
let attempt = 1;


function drawRandom(maxValue){
    let randomNum = Math.round(Math.random()*(maxValue-1));
    return randomNum;
}
// Draws 4 countries
function countryPicker(){
//List of Countries and ISO 3166 Alpha-2 codes country codes
let countriesPicked = [];
let pickCheck = [];
while (pickCheck.length < 4){
let pick = drawRandom(countryList.length);
 let country= {
    country : countryList[pick].country,
    iso : countryList[pick].iso,
    id : pick
}
if(pickCheck.indexOf(pick)=== -1){
    pickCheck.push(pick);
    countriesPicked.push(country);
}
}
return countriesPicked;
}

// Function that assign correct answer + removes it from the list of 
// countries in the list, if the assign is in the list of already used
// then it assigns correct to another number.
function countryCheck(){
    let answerOptions = countryPicker();
    let correctAnswer = drawRandom(4);
    countryList.splice(answerOptions[correctAnswer], 1);
    answerOptions[correctAnswer].corr = 1; 
    return answerOptions;
}
// draws the countries and validates them.
function gameDraw (){
    let scores = document.getElementsByClassName('score');
    scores[0].innerText=scoresObj.right;
    scores[1].innerText=scoresObj.wrong;
    scores[2].innerText=`${scoresObj.tot}/${roundLimit}`;
    
    if(scoresObj.tot < roundLimit){
    let drawnCountries = countryCheck();
    let buttons = document.getElementsByClassName("answer");
    buttons.innerText= '';
    let img = drawnCountries.find(drawnCountries=>drawnCountries.corr === 1);
    document.getElementById("flag-img").src = `https://flagcdn.com/${img.iso.toLowerCase()}.svg`;
    
    for (let i = 0 ; i<drawnCountries.length; i++){
    buttons[i].innerText = drawnCountries[i].country;
    if(img.country === drawnCountries[i].country){
     buttons[i].setAttribute('id', "correct");
    }
}
    
}
else{
    gameOver();
}
}

function correctBtnPress (){
  scoresObj.right ++;
  scoresObj.tot ++;
  let newPerc = calcPerc();
    document.getElementById("right").innerText= scoresObj.right;
    document.getElementById('total').innerText=`${scoresObj.tot}/${roundLimit}`;
    document.getElementById('average').innerText= `${newPerc}%`;
    eraseButtonId();
    gameDraw();
}

function wrongBtnPress (){
    scoresObj.wrong ++;
    scoresObj.tot ++;
    let newPerc = calcPerc();
      document.getElementById('wrong').innerText= scoresObj.wrong;
      document.getElementById('total').innerText= `${scoresObj.tot}/${roundLimit}`;
      document.getElementById('average').innerText= `${newPerc}%`;
// correct blinks green
// clicked turns red
// adds a +1 to wrong and total/10
// calculates %
// fetches another question
    eraseButtonId();
    gameDraw();
}

function gameOver(){
document.getElementById('flag-img').style.display="none";
document.getElementById('start-screen').style.display = "flex";
 countryList =[
    {country:'Afghanistan', iso: 'AF'},
    {country:'Albania', iso: 'AL'},
    {country:'Algeria', iso: 'DZ'},
    {country:'Andorra', iso: 'AD'},
    {country:'Angola', iso: 'AO'},
    {country:'Antigua and Barbuda', iso: 'AG'},
    {country:'Argentina', iso: 'AR'},
    {country:'Armenia', iso: 'AM'},
    {country:'Australia', iso: 'AU'},
    {country:'Austria', iso: 'AT'},
    {country:'Azerbaijan', iso: 'AZ'},
    {country:'Bahamas', iso: 'BS'},
    {country:'Bahrain', iso: 'BH'},
    {country:'Bangladesh', iso: 'BD'},
    {country:'Barbados', iso: 'BB'},
    {country:'Belarus', iso: 'BY'},
    {country:'Belgium', iso: 'BE'},
    {country:'Belize', iso: 'BZ'},
    {country:'Benin', iso: 'BJ'},
    {country:'Bhutan', iso: 'BT'},
    {country:'Bolivia', iso: 'BO'},
    {country:'Bosnia and Herzegovina', iso: 'BA'},
    {country:'Botswana', iso: 'BW'},
    {country:'Brazil', iso: 'BR'},
    {country:'Brunei Darussalam', iso: 'BN'},
    {country:'Bulgaria', iso: 'BG'},
    {country:'Burkina Faso', iso: 'BF'},
    {country:'Burundi', iso: 'BI'},
    {country:'Cabo Verde', iso: 'CV'},
    {country:'Cambodia', iso: 'KH'},
    {country:'Cameroon', iso: 'CM'},
    {country:'Canada', iso: 'CA'},
    {country:'Central African Republic', iso: 'CF'},
    {country:'Chad', iso: 'TD'},
    {country:'Chile', iso: 'CL'},
    {country:'China', iso: 'CN'},
    {country:'Colombia', iso: 'CO'},
    {country:'Comoros', iso: 'KM'},
    {country:'Democratic Republic of The Congo', iso: 'CD'},
    {country:'Republic of the Congo', iso: 'CG'},
    {country:'Costa Rica', iso: 'CR'},
    {country:"Côte d'Ivoire", iso: 'CI'},
    {country:'Croatia', iso: 'HR'},
    {country:'Cuba', iso: 'CU'},
    {country:'Cyprus', iso: 'CY'},
    {country:'Czechia', iso: 'CZ'},
    {country:'Denmark', iso: 'DK'},
    {country:'Djibouti', iso: 'DJ'},
    {country:'Dominica', iso: 'DM'},
    {country:'Dominican Republic', iso: 'DO'},
    {country:'Ecuador', iso: 'EC'},
    {country:'Egypt', iso: 'EG'},
    {country:'El Salvador', iso: 'SV'},
    {country:'Equatorial Guinea', iso: 'GQ'},
    {country:'Eritrea', iso: 'ER'},
    {country:'Estonia', iso: 'EE'},
    {country:'Eswatini', iso: 'SZ'},
    {country:'Ethiopia', iso: 'ET'},
    {country:'Fiji', iso: 'FJ'},
    {country:'Finland', iso: 'FI'},
    {country:'France', iso: 'FR'},
    {country:'Gabon', iso: 'GA'},
    {country:'Gambia', iso: 'GM'},
    {country:'Georgia', iso: 'GE'},
    {country:'Germany', iso: 'DE'},
    {country:'Ghana', iso: 'GH'},
    {country:'Greece', iso: 'GR'},
    {country:'Grenada', iso: 'GD'},
    {country:'Guatemala', iso: 'GT'},
    {country:'Guinea', iso: 'GN'},
    {country:'Guinea-Bissau', iso: 'GW'},
    {country:'Guyana', iso: 'GY'},
    {country:'Haiti', iso: 'HT'},
    {country:'Honduras', iso: 'HN'},
    {country:'Hungary', iso: 'HU'},
    {country:'Iceland', iso: 'IS'},
    {country:'India', iso: 'IN'},
    {country:'Indonesia', iso: 'ID'},
    {country:'Iran', iso: 'IR'},
    {country:'Iraq', iso: 'IQ'},
    {country:'Ireland', iso: 'IE'},
    {country:'Israel', iso: 'IL'},
    {country:'Italy', iso: 'IT'},
    {country:'Jamaica', iso: 'JM'},
    {country:'Japan', iso: 'JP'},
    {country:'Jordan', iso: 'JO'},
    {country:'Kazakhstan', iso: 'KZ'},
    {country:'Kenya', iso: 'KE'},
    {country:'Kiribati', iso: 'KI'},
    {country:'North Korea', iso: 'KP'},
    {country:'South Korea', iso: 'KR'},
    {country:'Kuwait', iso: 'KW'},
    {country:'Kyrgyzstan', iso: 'KG'},
    {country:'Laos', iso: 'LA'},
    {country:'Latvia', iso: 'LV'},
    {country:'Lebanon', iso: 'LB'},
    {country:'Lesotho', iso: 'LS'},
    {country:'Liberia', iso: 'LR'},
    {country:'Libya', iso: 'LY'},
    {country:'Liechtenstein', iso: 'LI'},
    {country:'Lithuania', iso: 'LT'},
    {country:'Luxembourg', iso: 'LU'},
    {country:'North Macedonia', iso: 'MK'},
    {country:'Madagascar', iso: 'MG'},
    {country:'Malawi', iso: 'MW'},
    {country:'Malaysia', iso: 'MY'},
    {country:'Maldives', iso: 'MV'},
    {country:'Mali', iso: 'ML'},
    {country:'Malta', iso: 'MT'},
    {country:'Marshall Islands', iso: 'MH'},
    {country:'Mauritania', iso: 'MR'},
    {country:'Mauritius', iso: 'MU'},
    {country:'Mexico', iso: 'MX'},
    {country:'Micronesia', iso: 'FM'},
    {country:'Moldova', iso: 'MD'},
    {country:'Monaco', iso: 'MC'},
    {country:'Mongolia', iso: 'MN'},
    {country:'Montenegro', iso: 'ME'},
    {country:'Morocco', iso: 'MA'},
    {country:'Mozambique', iso: 'MZ'},
    {country:'Myanmar', iso: 'MM'},
    {country:'Namibia', iso: 'NA'},
    {country:'Nauru', iso: 'NR'},
    {country:'Nepal', iso: 'NP'},
    {country:'Netherlands', iso: 'NL'},
    {country:'New Zealand', iso: 'NZ'},
    {country:'Nicaragua', iso: 'NI'},
    {country:'Niger', iso: 'NE'},
    {country:'Nigeria', iso: 'NG'},
    {country:'Norway', iso: 'NO'},
    {country:'Oman', iso: 'OM'},
    {country:'Pakistan', iso: 'PK'},
    {country:'Palau', iso: 'PW'},
    {country:'Panama', iso: 'PA'},
    {country:'Papua New Guinea', iso: 'PG'},
    {country:'Paraguay', iso: 'PY'},
    {country:'Peru', iso: 'PE'},
    {country:'Philippines', iso: 'PH'},
    {country:'Poland', iso: 'PL'},
    {country:'Portugal', iso: 'PT'},
    {country:'Qatar', iso: 'QA'},
    {country:'Romania', iso: 'RO'},
    {country:'Russia', iso: 'RU'},
    {country:'Rwanda', iso: 'RW'},
    {country:'Saint Kitts and Nevis', iso: 'KN'},
    {country:'Saint Lucia', iso: 'LC'},
    {country:'Saint Vincent and the Grenadines', iso: 'VC'},
    {country:'Samoa', iso: 'WS'},
    {country:'San Marino', iso: 'SM'},
    {country:'Sao Tome and Principe', iso: 'ST'},
    {country:'Saudi Arabia', iso: 'SA'},
    {country:'Senegal', iso: 'SN'},
    {country:'Serbia', iso: 'RS'},
    {country:'Seychelles', iso: 'SC'},
    {country:'Sierra Leone', iso: 'SL'},
    {country:'Singapore', iso: 'SG'},
    {country:'Slovakia', iso: 'SK'},
    {country:'Slovenia', iso: 'SI'},
    {country:'Solomon Islands', iso: 'SB'},
    {country:'Somalia', iso: 'SO'},
    {country:'South Africa', iso: 'ZA'},
    {country:'South Sudan', iso: 'SS'},
    {country:'Spain', iso: 'ES'},
    {country:'Sri Lanka', iso: 'LK'},
    {country:'Sudan', iso: 'SD'},
    {country:'Suriname', iso: 'SR'},
    {country:'Sweden', iso: 'SE'},
    {country:'Switzerland', iso: 'CH'},
    {country:'Syria', iso: 'SY'},
    {country:'Tajikistan', iso: 'TJ'},
    {country:'Tanzania', iso: 'TZ'},
    {country:'Thailand', iso: 'TH'},
    {country:'Timor-Leste', iso: 'TL'},
    {country:'Togo', iso: 'TG'},
    {country:'Tonga', iso: 'TO'},
    {country:'Trinidad and Tobago', iso: 'TT'},
    {country:'Tunisia', iso: 'TN'},
    {country:'Türkiye', iso: 'TR'},
    {country:'Turkmenistan', iso: 'TM'},
    {country:'Tuvalu', iso: 'TV'},
    {country:'Uganda', iso: 'UG'},
    {country:'Ukraine', iso: 'UA'},
    {country:'United Arab Emirates', iso: 'AE'},
    {country:'Great Britain', iso: 'GB'},
    {country:'United States', iso: 'US'},
    {country:'Uruguay', iso: 'UY'},
    {country:'Uzbekistan', iso: 'UZ'},
    {country:'Vanuatu', iso: 'VU'},
    {country:'Venezuela', iso: 'VE'},
    {country:'Vietnam', iso: 'VN'},
    {country:'Yemen', iso: 'YE'},
    {country:'Zambia', iso: 'ZM'},
    {country:'Zimbabwe', iso: 'ZW'},
];
document.getElementById("answer-container").style.display="none";
printScore();
scoresObj = {right: 0,wrong: 0,tot: 0,};


}


function calcPerc(){
    return Math.floor((scoresObj.right/scoresObj.tot)*100);
}

function eraseButtonId(){
   let buttons =  document.getElementsByClassName("answer");
   for (let button of buttons) {
        button.removeAttribute('id');
   }
}

function printScore(){
    if(attempt <= 3){
    let div = document.getElementById('prev-scores');
    let newperc = calcPerc();
    scoreList.push(div.innerHTML+=` 
    <div class = "s-line">
        <div>Round: ${attempt}</div>
        <div>Right: <span class="green">${scoresObj.right}</span></div>
        <div>Wrong: <span class="red">${scoresObj.wrong}</span></div>
        <div>Average: ${newperc}%</div>
    </div>`);
    attempt ++;
    }
    else{
        //
    }
}
function resetScoreboard(){
    let div = document.getElementById('prev-scores');
    div.innerHTML = '';
    attempt = 1;
    document.getElementById('right').innerText= `0`;
    document.getElementById('wrong').innerText= `0`;
    document.getElementById('total').innerText= `0/${roundLimit}`;
    document.getElementById('average').innerText= `N/A`;
}

function instructionPopUp(){
    document.getElementsByClassName('inst-outer')[0].style.display='block';
}