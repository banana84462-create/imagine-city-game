

// ==============================
// 1. ระบบคะแนน
// ==============================

let scores = {
    DGA: 0,
    DGD: 0,
    IGD: 0,
    AFX: 0,
    DEN: 0
};

let currentQuestion = 0;


// ==============================
// 2. ข้อมูลคำถาม
// ==============================

const questions = [
    {
        description: "ดวงไฟลอยมาใกล้ ๆ แล้วกระซิบว่า เหลือเวลาถึงคืนนี้เท่านั้นนะ ช่วยเมืองนี้ด้วย สิ่งแรกที่เธอทำคือ...",
        image: "images/chapter1-1.jpg",
        answers: [
            { text: "หยิบชอล์กขึ้นมาแล้วลงสีบนกำแพง", type: "DGA" },
            { text: "เดินดูป้ายที่ตัวอักษรซีดจนอ่านไม่ออก แล้วลองจัดใหม่ให้อ่านง่ายขึ้น", type: "DGD" },
            { text: "ถามดวงไฟว่าเมืองนี้มีกติกาอะไร แล้วจะผ่านด่านไปได้ยังไง", type: "IGD" },
            { text: "ลองดันของรอบตัวเบา ๆ ว่าทำไมทุกอย่างถึงนิ่งสนิทแบบนี้", type: "AFX" },
            { text: "ตะโกนเรียกคนในเมืองให้มารวมกันที่จัตุรัส", type: "DEN" }
        ]
    },

    {
        description: "ดวงไฟบอกว่าพกไปได้แค่ชิ้นเดียว เธอเลือกหยิบ...",
        image: "images/chapter1-2.jpg",
        answers: [
            { text: "สมุดสเก็ตช์ที่วาดได้ไม่มีวันหมดหน้า", type: "DGA" },
            { text: "ชุดสีกับตัวอักษรวิเศษที่ทำให้อะไรก็ดูเข้าที่เข้าทาง", type: "DGD" },
            { text: "ตลับเกมเก่า ๆ ที่ยังไม่มีใครรู้วิธีเล่น", type: "IGD" },
            { text: "กล้องฟิล์มที่ถ่ายแล้วภาพเคลื่อนไหวได้", type: "AFX" },
            { text: "ไมโครโฟนที่เสียงดังไปทั่วทั้งเมือง", type: "DEN" }
        ]
    },

    {
        description: "ปลายจัตุรัสมีถนนห้าสาย แต่ละสายมีกลิ่นกับเสียงไม่เหมือนกัน เธอเดินเข้าสายไหนก่อน",
        image: "images/chapter1-3.jpg",
        answers: [
            { text: "สายที่ผนังทั้งสองข้างเต็มไปด้วยภาพวาด", type: "DGA" },
            { text: "สายที่เต็มไปด้วยป้ายร้านและโลโก้", type: "DGD" },
            { text: "สายที่มีเสียงเกมกับแสงไฟหลากสี", type: "IGD" },
            { text: "สายที่มีเสียงเครื่องฉายหนังกับควันเอฟเฟกต์", type: "AFX" },
            { text: "สายที่มีเสียงเพลงและผู้คนมายืนรวมกัน", type: "DEN" }
        ]
    },

    {
        description: "เดินไปได้ไม่กี่ก้าว เธอก็เจอคนที่ต้องการความช่วยเหลือทุกมุมถนน\n\nสะพานข้ามแม่น้ำพังไปครึ่งทาง ฝั่งโน้นมีคนรออยู่ เธอจะข้ามไปยังไง",
        image: "images/chapter2-1.jpg",
        answers: [
            { text: "วาดสะพานขึ้นมาใหม่ด้วยเส้นและสีในแบบของเธอ", type: "DGA" },
            { text: "ทำป้ายเตือนกับป้ายบอกทางอ้อม ให้ทุกคนเดินตามได้โดยไม่งง", type: "DGD" },
            { text: "ไขกลไกของสะพานให้กลับมาทำงานอีกครั้ง", type: "IGD" },
            { text: "ทำภาพสะพานที่ค่อย ๆ ประกอบตัวเองขึ้นมาให้ทุกคนเห็น", type: "AFX" },
            { text: "ชวนชาวเมืองมาช่วยกันซ่อม แล้วจัดเป็นงานฉลองเล็ก ๆ", type: "DEN" }
        ]
    },
    
    {
        description: "เด็กคนหนึ่งนั่งร้องไห้อยู่ข้างทาง เธอบอกว่าตัวการ์ตูนที่รักที่สุดหายไปจากเมืองแล้ว เธอช่วยหนูน้อยยังไง",
        image: "images/chapter2-2.jpg",
        answers: [
            { text: "วาดตัวการ์ตูนตัวนั้นขึ้นมาใหม่ให้", type: "DGA" },
            { text: "ทำสติกเกอร์ โปสเตอร์ และของที่ระลึกให้เธอเก็บไว้", type: "DGD" },
            { text: "สร้างเกมเล็ก ๆ ให้เธอได้เล่นกับตัวการ์ตูนตัวนั้น", type: "IGD" },
            { text: "ทำให้ตัวการ์ตูนมีชีวิตขึ้นมา เดินและพูดกับเธอได้", type: "AFX" },
            { text: "ชวนเด็ก ๆ คนอื่นมานั่งล้อมวงฟังเรื่องของตัวการ์ตูนตัวนั้น", type: "DEN" }
        ]
    },
    {
        description: "เจ้าของร้านเก่าแก่เล่าว่าไม่มีใครรู้จักร้านเขาแล้ว เธอตอบเขาว่า…",
        image: "images/chapter2-3.jpg",
        answers: [
            { text: "หนูจะวาดภาพให้ร้านนี้มีเอกลักษณ์ไม่เหมือนใคร", type: "DGA" },
            { text: "หนูจะทำแบรนด์ใหม่ให้ ตั้งแต่โลโก้ไปจนถึงป้ายหน้าร้าน", type: "DGD" },
            { text: "หนูจะทำให้การเดินเข้าร้านเป็นเหมือนเล่นเกมสนุก ๆ", type: "IGD" },
            { text: "หนูจะทำคลิปแนะนำร้านที่ดูแล้วขนลุก", type: "AFX" },
            { text: "หนูจะจัดงานแล้วช่วยโปรโมต ให้คนแห่กันมา", type: "DEN" }
        ]
    },

    {
        description: "ไม่ว่าเธอจะเดินมาจากย่านไหน ทุกคนต้องเจอประตูหินบานใหญ่ก่อนไปต่อ ประตูถามว่า เธอพร้อมฝึกอะไรทุกวัน",
        image: "images/chapter3-gate.jpg",
        answers: [
            { text: "วาดรูปและสังเกตโลกรอบตัวให้ละเอียดขึ้น", type: "DGA" },
            { text: "จัดองค์ประกอบ สี และตัวอักษรให้ลงตัว", type: "DGD" },
            { text: "คิดเป็นระบบ เป็นขั้นเป็นตอน", type: "IGD" },
            { text: "ทำให้ภาพเคลื่อนไหวและดูสมจริง", type: "AFX" },
            { text: "พูด เล่าเรื่อง และประสานคนให้ไปทางเดียวกัน", type: "DEN" }
        ]
    },


    {
        description: "ประตูหินเปิดออก และเธอไม่ได้เดินต่อคนเดียวอีกแล้ว ที่ลานน้ำพุ เธอเจอนักเดินทางอีกสี่คน แต่ละคนมีของที่ตัวเองยังทำไม่ได้ เธอเลือกเป็นคนที่…",
        image: "images/chapter4-1.jpg",
        answers: [
            { text: "ช่วยวาดภาพให้ทุกคนเห็นตรงกัน", type: "DGA" },
            { text: "ทำไกด์ให้ทุกอย่างดูลงตัวและเป็นระเบียบ", type: "DGD" },
            { text: "คิดวิธีให้ทุกคนทำงานด้วยกันแล้วสนุก", type: "IGD" },
            { text: "ทำตัวอย่างสั้น ๆ ให้เห็นว่าแผนจะออกมาหน้าตาเป็นยังไง", type: "AFX" },
            { text: "เป็นคนกลางที่ทำให้ทุกคนอยากเดินต่อไปด้วยกัน", type: "DEN" }
        ]
    },
    {
        description: "กลางทางมีสองแยก ทีมเถียงกันว่าจะไปทางไหน เธอจะทำยังไง",
        image: "images/chapter4-2.jpg",
        answers: [
            { text: "วาดแผนที่ให้เห็นภาพว่าแต่ละทางไปไหนบ้าง", type: "DGA" },
            { text: "ทำตารางเปรียบเทียบให้ตัดสินใจง่ายขึ้น", type: "DGD" },
            { text: "เสนอให้ลองไปทั้งสองทางแล้วดูผลลัพธ์", type: "IGD" },
            { text: "ทำภาพจำลองให้เห็นว่าปลายทางของแต่ละทางเป็นยังไง", type: "AFX" },
            { text: "ฟังทุกคนก่อน แล้วหาจุดที่ทุกคนรับได้", type: "DEN" }
        ]
    },
    {
        description: "ฟ้ามืดลงแล้ว ไฟทั่วเมืองเริ่มติด เหลือแค่เวทีใหญ่ที่ยังว่างอยู่ เวทีว่างเปล่ากำลังรอเธออยู่ ไฮไลต์ที่เธออยากมอบให้ทั้งเมืองคือ…",
        image: "images/chapter5-1.jpg",
        answers: [
            { text: "ภาพวาดขนาดยักษ์ที่คนทั้งเมืองเงยหน้ามอง", type: "DGA" },
            { text: "ภาพลักษณ์ใหม่ของเมือง ที่ทำให้ทุกมุมดูมีสไตล์เดียวกัน", type: "DGD" },
            { text: "เกมที่คนทั้งเมืองเข้ามาเล่นพร้อมกัน", type: "IGD" },
            { text: "โชว์ภาพเคลื่อนไหวกับเอฟเฟกต์ที่ทำให้ทั้งลานตะลึง", type: "AFX" },
            { text: "การแสดงสดที่ทุกคนมีส่วนร่วมได้", type: "DEN" }
        ]
    },
    {
        description: "เมื่อสีค่อย ๆ กลับมาทั่วเมือง ผู้คนหันมามองเธอ เธออยากให้พวกเขาจำเธอว่าเป็นใคร",
        image: "images/chapter5-2.jpg",
        answers: [
            { text: "คนที่ให้กำเนิดตัวละครที่ทุกคนรัก", type: "DGA" },
            { text: "คนที่ทำให้เมืองนี้ดูดีและมีเอกลักษณ์", type: "DGD" },
            { text: "คนที่สร้างโลกให้ทุกคนได้เข้ามาเล่น", type: "IGD" },
            { text: "คนที่ทำให้สิ่งที่ดูเป็นไปไม่ได้กลายเป็นจริง", type: "AFX" },
            { text: "คนที่ทำให้ทุกคนมารวมกันได้", type: "DEN" }
        ]
    }

];


// ==============================
// 3. ระบบเปลี่ยนหน้า
// ==============================

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


// ==============================
// 4. ปุ่มเริ่มเกม
// ==============================

function startGame() {

    currentQuestion = 0;

    scores = {
        DGA: 0,
        DGD: 0,
        IGD: 0,
        AFX: 0,
        DEN: 0
    };

    // ไปหน้าก่อนออกเดินทาง
    showScreen("instruction-screen");
}


// ==============================
// 5. เริ่มเข้าสู่คำถาม
// ==============================

function beginAdventure() {

    showScreen("game-screen");

    showQuestion();
}


// ==============================
// 6. สุ่มตัวเลือก
// ==============================

function shuffleAnswers(answers) {

    return [...answers].sort(() => Math.random() - 0.5);

}


// ==============================
// 7. แสดงคำถาม
// ==============================

function showQuestion() {
    console.log("currentQuestion:", currentQuestion);
console.log("question:", questions[currentQuestion]);

    const question = questions[currentQuestion];

    // อัปเดตหลอดความคืบหน้า
const progressFill = document.getElementById("game-progress-fill");

const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;

progressFill.style.width = progressPercent + "%";

    document.getElementById("chapter").textContent =
        question.chapter;

    document.getElementById("question-title").textContent =
        question.title;

    document.getElementById("question-description").textContent =
        question.description;

        // แสดงภาพประกอบของฉาก
const questionArt = document.getElementById("question-art");
const questionImage = document.getElementById("question-image");

if (question.image) {
    questionImage.src = question.image;
    questionImage.alt = question.title;
    questionArt.style.display = "block";
} else {
    questionArt.style.display = "none";
    questionImage.removeAttribute("src");
}

    document.getElementById("progress").textContent =
        `คำถาม ${currentQuestion + 1} / ${questions.length}`;

    const answerList = document.getElementById("answer-list");

    answerList.innerHTML = "";

    const shuffled = shuffleAnswers(question.answers);

    shuffled.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.classList.add("answer-button");

        button.onclick = () => selectAnswer(answer.type);

        answerList.appendChild(button);

    });
}

// ==============================
// 8. เลือกคำตอบและบันทึกคะแนน
// ==============================

function selectAnswer(type) {
    scores[type]++;

    currentQuestion++;

    // หลังจบบทที่ 1 และ 2 ให้เข้าสู่บทที่ 3
    if (currentQuestion === 6) {
        showDistrictChoice();
    }
    else if (currentQuestion < questions.length) {
        showQuestion();
    }
    else {
        // เมื่อจบคำถามทั้งหมด ให้ไปหน้าบัตรผ่าน
        showScreen("registration-screen");
    }
}

// ==============================
// 9. แสดงผลลัพธ์
// ==============================


function showResult() {
    showScreen("result-screen");

    const highest = Object.keys(scores).sort(
        (a, b) => scores[b] - scores[a]
    )[0];

    const majorNames = {
        DGA: "Digital Arts",
        DGD: "Digital Graphic Design",
        IGD: "Interactive and Game Design",
        AFX: "Computer Animation and Visual Effects",
        DEN: "Digital Entertainment"
    };

    document.getElementById("result-title").textContent =
        "ยินดีต้อนรับสู่ " + majorNames[highest];

    document.getElementById("result-description").textContent =
        "อาชีพที่เธอเลือกในบทที่ 3 คือ " +
        (chosenCareer || "ยังไม่ได้เลือก") +
        " คะแนนของเธอ: " + JSON.stringify(scores);
}

const storyImage = document.querySelector("#game-screen .story-art img");

// ข้อมูลย่านและอาชีพในบทที่ 3
const districts = {
    DGA: {
        name: "ย่านศิลป์: ตรอกจินตนาการ",
        question: "ศิลปินสูงวัยคนหนึ่งยื่นขวดสีวิเศษให้ แล้วถามว่า เธออยากเป็นคนแบบไหนในเมืองนี้",
        careers: [
            "Character Designer",
            "Concept Artist / Background Artist",
            "Webtoon / Comic / Storyboard Artist",
            "Illustrator / Art Toy / Sticker Creator"
        ]
    },
    DGD: {
        name: "ย่านดีไซน์: ถนนเอกลักษณ์",
        question: "นักออกแบบคนหนึ่งยืนอยู่หน้าร้านที่ป้ายยังว่างเปล่า แล้วถามว่า ถ้าได้ฝากลายเซ็นไว้ที่ไหนสักแห่งในเมืองนี้ เธออยากให้เป็นที่ไหน",
        careers: [
            "Brand Identity Designer",
            "UI Designer",
            "Packaging Designer",
            "Art Director / Key Visual Designer"
        ]
    },
    IGD: {
        name: "ย่านเกม: สนามแห่งการเล่น",
        question: "หัวหน้าสนามเกมเดินมาหา แล้วถามว่า เกมของเธอจะเริ่มจากอะไร",
        careers: [
            "Game Designer / Level Designer",
            "Game Artist",
            "VR / AR Designer",
            "Game Producer"
        ]
    },
    AFX: {
        name: "ย่านภาพยนตร์: กำแพงแห่งเรื่องราว",
        question: "ผู้กำกับลึกลับคนหนึ่งยื่นสคริปต์มาให้ แล้วถามว่า เธออยากคุมฉากไหนของหนังเรื่องนี้",
        careers: [
            "3D Animator / Rigging Artist",
            "3D Modeler / Texture Artist",
            "VFX Artist",
            "Compositor"
        ]
    },
    DEN: {
        name: "ย่านบันเทิง: เวทีแห่งตัวตน",
        question: "พิธีกรประจำเมืองยื่นไมค์มาให้ แล้วถามว่า บทบาทไหนทำให้เธอใจเต้นแรงที่สุด",
        careers: [
            "Content Creator / Scriptwriter",
            "Event / Show Producer",
            "Virtual Talent / Streaming Producer",
            "Entertainment Marketer / Community Manager"
        ]
    }
};

// เก็บอาชีพที่ผู้เล่นเลือกในบทที่ 3
let chosenCareer = "";
let selectedDistricts = [];

function showDistrictChoice() {
    showScreen("district-screen");

    // เรียงคะแนนจากมากไปน้อย
    const ranking = Object.keys(scores).sort(
        (a, b) => scores[b] - scores[a]
    );

    const first = ranking[0];
    const second = ranking[1];

    // แสดงย่านแรก และย่านที่สองถ้าคะแนนห่างไม่เกิน 1
    selectedDistricts = [first];

    if (scores[first] - scores[second] <= 1) {
        selectedDistricts.push(second);
    }

    
const description = document.getElementById("district-description");
const districtList = document.getElementById("district-list");

description.textContent =
    "ดวงไฟพาเธอเดินทางมาถึงย่านที่ใกล้ตัวเธอที่สุด " +
    "ลองเลือกเส้นทางที่เธออยากเดินเข้าไปสำรวจ";

districtList.innerHTML = "";

selectedDistricts.forEach(type => {
    const district = districts[type];

    const button = document.createElement("button");
    button.classList.add("district-button");
    button.textContent = district.name;

    button.onclick = () => showCareerChoice(type);

    districtList.appendChild(button);
});
}

// แสดงตัวเลือกอาชีพในย่าน

function showCareerChoice(type) {
    const district = districts[type];

    const description = document.getElementById("district-description");
    const districtList = document.getElementById("district-list");

    description.textContent = district.question;

    districtList.innerHTML = "";

    district.careers.forEach(career => {
        const button = document.createElement("button");

        button.classList.add("district-button");
        button.textContent = career;

        button.onclick = () => {
            chosenCareer = career;

            // กลับไปหน้าคำถามเพื่อเริ่มด่านประตูหินผา
            showScreen("game-screen");
            showQuestion();
        };

        districtList.appendChild(button);
    });
}

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // ไปยังหน้าสรุปผล
    showResult();
});

