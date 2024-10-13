var content = "Xin chào cô gái hay ngủ gật, haha. Chẳng là sắp tới là ngày phụ nữ Việt Nam 20/10 rồi đó, một dịp đặc biệt để nghĩ về những điều tốt đẹp mà các cô gái như em mang đến. Nhân dịp này, anh muốn dành tặng cho em một bất ngờ nhỏ, nhưng mà tiếc là nó lại không nằm ở đây mà là đang ở dưới trọ em nè hehe. Hy vọng sẽ khiến cho em thích và sẽ mang đến cho em một chút niềm vui và nụ cười trong những ngày nhân dịp đặc biệt này.";

// Speed of typing effect, lower values are faster
var durationWrite = 50;

// Typing effect function
function effectWrite() {
    var boxLetter = document.querySelector(".content");
    letterContentSplited = content.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

// When page loads, activate the container
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

// Logic for skipping left side and opening CardContent content directly
var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    var cardValentine = document.querySelector(".cardValentine");
    cardValentine.classList.add("active");
    document.querySelector(".container").classList.add("close");

    // Skip the left side and show the letter content directly
    setTimeout(effectWrite, 500);
});
