// PREVIOUS MONTH CALCULATE
let counter = document.querySelector(".count");
counter.addEventListener ('click', function (){
    // CURRENT MONTH
let curGross = parseFloat(document.querySelector("#curmonthgross").value);
let curBonus = parseFloat(document.querySelector("#curmonthbonus").value);
let curWorkingHrs = parseFloat(document.querySelector("#curmonthworkinghrs").value);
let curLimitHrs = parseFloat(document.querySelector("#curmonthlimithrs").value);
let curSickLeave = parseFloat(document.querySelector("#curmonthsickleave").value);
let curVacation = parseFloat(document.querySelector("#curmonthvacation").value);
let salary = document.querySelector("#yourSalary");


// PREVIOUS MONTH
let prevGross = parseFloat(document.querySelector("#prevmonthgross").value);
let prevBonus = parseFloat(document.querySelector("#prevmonthbonus").value);
let prevWorkingHrs = parseFloat(document.querySelector("#prevmonthworkinghrs").value);
let prevLimitHrs = parseFloat(document.querySelector("#prevmonthlimithrs").value);
let prevJustify = parseFloat(document.querySelector("#prevmonthjustify").value);

// MONTH BEFORE PREVIOUS MONTH
let befGross = parseFloat(document.querySelector("#befprevmonthgross").value);
let befBonus = parseFloat(document.querySelector("#befprevmonthbonus").value);
let befWorkingHrs = parseFloat(document.querySelector("#befprevmonthworkinghrs").value);
let befLimitHrs = parseFloat(document.querySelector("#befprevmonthlimithrs").value);
let befJustify = parseFloat(document.querySelector("#befprevmonthjustify").value);

let befBefGross = parseFloat(document.querySelector("#befbefprevmonthgross").value);
let befBefBonus = parseFloat(document.querySelector("#befbefprevmonthbonus").value);
let befBefWorkingHrs = parseFloat(document.querySelector("#befbefprevmonthworkinghrs").value);
let befBefLimitHrs = parseFloat(document.querySelector("#befbefprevmonthlimithrs").value);
let befBefJustify = parseFloat(document.querySelector("#befbefprevmonthjustify").value);

    let befBefBonusT = befBefBonus * befBefWorkingHrs;
    let avgBB = befBefGross - befBefBonusT;
    let befBefDC = befBefLimitHrs / 8 - befBefJustify;

    let prevBonusT = prevBonus * prevWorkingHrs;
    let avgPrev = prevGross - prevBonusT;
    let prevDC = prevLimitHrs / 8 - prevJustify;
    
    let befBonusT = befBonus * befWorkingHrs;
    let avgBef = befGross - befBonusT;
    let befDC = befLimitHrs / 8 - befJustify;

    let totalAvg = (avgBB+avgPrev+avgBef)/(befBefWorkingHrs+prevWorkingHrs+befWorkingHrs);
    let vacCoep = (curWorkingHrs+prevWorkingHrs+befWorkingHrs)/(befBefDC+prevDC+befDC);

    let vacationSalary = totalAvg * vacCoep * curVacation;
    let sickSalary = curSickLeave * totalAvg * 8;
    let num = (curGross+sickSalary+vacationSalary)*0.98*0.8;

    let roundedNum = parseFloat(num.toFixed(2));
    
    salary.innerHTML = "თქვენი ასაღები ხელფასია " + roundedNum +" ლარი";
}) 

var currentSlide = 0;
    var pages = document.querySelectorAll('.mon');

    function showSlide(index) {
     
      for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
      }
      
      pages[index].style.display = 'flex';
    }

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= pages.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = pages.length - 1;
      }
      showSlide(currentSlide);
    }

    showSlide(currentSlide);