let carsResult = {
    totalScore: 0,
    answered: 0,
    questions: []
};


// تحديث التقدم
function updateProgress() {

    const totalQuestions = questions.length;

    const answered =
        document.querySelectorAll(
            'input[type="radio"]:checked'
        ).length;


    document.getElementById("progressText").textContent =
        `${answered} / ${totalQuestions}`;


    document.getElementById("progressBar").style.width =
        (answered / totalQuestions * 100) + "%";


    carsResult.answered = answered;
}



// الحصول على الدرجات
function getScores() {


    let total = 0;

    let result = [];


    questions.forEach(q => {


        let selected =
            document.querySelector(
                `input[name="q${q.id}"]:checked`
            );


        let score = 0;


        if(selected){

            score =
                Number(selected.value);

            total += score;

        }



        let note =
            document.querySelector(
                `textarea[data-id="${q.id}"]`
            );



        result.push({

            id:q.id,

            score:score,

            note:
            note ? note.value : ""

        });



    });



    carsResult.totalScore = total;

    carsResult.questions = result;



    return total;

}





// حفظ التقييم

function saveAssessment(){


    let childData =
    JSON.parse(
        localStorage.getItem(
            "assessmentData"
        )
    );


    let assessment = {


        child:childData,


        scale:"CARS-2",


        date:
        new Date()
        .toLocaleDateString("ar-EG"),


        result:carsResult


    };



    localStorage.setItem(

        "CARS_Result",

        JSON.stringify(assessment)

    );



}




// تصنيف النتيجة

function getClassification(score){


    /*
       التصنيف النهائي يجب ضبطه
       حسب دليل التصحيح الرسمي
    */


    if(score === 0){

        return "لم يتم إدخال درجات";

    }


    return "تم حساب الدرجة - يراجعها الأخصائي";

}





// إنهاء التقييم

function finishAssessment(){


    let total =
        getScores();



    if(
        carsResult.answered <
        questions.length
    ){

        alert(
        "يرجى استكمال جميع البنود قبل إنهاء التقييم"
        );

        return;

    }



    saveAssessment();



    alert(

    `
    تم حفظ تقييم CARS-2

    مجموع الدرجات:
    ${total}

    الحالة:
    ${getClassification(total)}

    `

    );



    /*
       لاحقاً:
       الانتقال إلى صفحة التقرير

       window.location.href =
       "cars-report.html";

    */


}






// حفظ تلقائي أثناء العمل

function autoSave(){


    let data = {


        time:
        new Date()
        .toISOString(),


        result:
        getScores()


    };


    localStorage.setItem(

        "CARS_AutoSave",

        JSON.stringify(data)

    );

}



document.addEventListener(

"change",

function(e){


    if(
        e.target.type === "radio"
    ){

        updateProgress();

        autoSave();

    }


});

