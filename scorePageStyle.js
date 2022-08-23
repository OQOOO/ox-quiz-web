var setColor = {
    uQuestColor:function scorePageColor(background, text, scoreBox, star) {
        document.body.style.backgroundColor = background;
        document.body.style.color = text;
        document.getElementById("scoreBox").style.backgroundColor = scoreBox;
        document.getElementById("star").style.color = star;       
    }
}
