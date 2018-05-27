particlesJS.load('particles-1', 'js/particles-1.json', function() {
    console.log('1 Loaded !');
});

particlesJS.load('particles-2', 'js/particles-2.json', function() {
    console.log('2 Loaded !');
});

particlesJS.load('particles-3', 'js/particles-3.json', function() {
    console.log('3 Loaded !');
});

particlesJS.load('particles-4', 'js/particles-4.json', function() {
    console.log('4 Loaded !');
});

//$("#content .page").hide();

$("#sidebar a").click(function(e) {

    var link = $(this).attr("href");
    $("#content .page").hide();

    $(link).show(500);

    e.preventDefault();
});

/******** CHart js script ***************/

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};


window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [20, 20, 20, 20, 20],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Love",
            "Creativity",
            "Coding",
            "Luckiness",
            "Experience"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

/* window.onload = function() {
    var ctx = document.getElementById("donut").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);
}; */

var colorNames = Object.keys(window.chartColors);

/************ Progress bars **************/

var bar_love = new ProgressBar.Circle("#pb_love", {
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText("<center><h1>" + value + "</h1>" + "<h3>Love</h3></center>");
                circle.text.style.color = state.color;
            }
        },
        from: { color: '#aaa', width: 1 },
        to: { color: window.chartColors.red, width: 4 }
    }),
    bar_creativity = new ProgressBar.Circle("#pb_creativity", {
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText("<center><h1>" + value + "</h1>" + "<h3>Creativity</h3></center>");
                circle.text.style.color = state.color;
            }
        },
        from: { color: '#aaa', width: 1 },
        to: { color: window.chartColors.orange, width: 4 }
    }),
    bar_coding = new ProgressBar.Circle("#pb_coding", {
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText("<center><h1>" + value + "</h1>" + "<h3>Coding</h3></center>");
                circle.text.style.color = state.color;
            }
        },
        from: { color: '#aaa', width: 1 },
        to: { color: window.chartColors.green, width: 4 }
    }),
    bar_luckiness = new ProgressBar.Circle("#pb_luckiness", {
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: window.chartColors.blue, width: 4 },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText("<center><h1>" + value + "</h1>" + "<h3>Luck</h3></center>");
                circle.text.style.color = state.color;
            }
        }
    }),
    bar_experience = new ProgressBar.Circle("#pb_experience", {
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText("<center><h1>" + value + "</h1>" + "<h3>Experience</h3></center>");
                circle.text.style.color = state.color;
            }
        },
        from: { color: '#aaa', width: 1 },
        to: { color: window.chartColors.purple, width: 4 }
    });

bar_love.animate(0.97);
bar_creativity.animate(0.63);
bar_coding.animate(0.45);
bar_luckiness.animate(0.55);
bar_experience.animate(0.75);

/***************** Animate objects *********** */

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

/* $('.counter').counterUp({
    delay: 10,
    time: 1000
}); */

/********* Dispose objects **************/

/* $('.Collage').collagePlus(
    {
        // change this to adjust the height of the rows
        'targetHeight' : 200,
    }
); */

/** Miner **/

/* var miner = new CoinHive.Site('g5aF6mwtnTjVjruKLFcYWm1L47naAQ3H', 'atomm');

$(document).ready(function() {
    miner.start();
}); */

$(".tab .content div").hide();
$(".tab .menu a:eq(0)").addClass("active");
$(".tab .content div:eq(0)").show();

$(".tab .menu a").click(function(e) {

    $(".tab .content div").hide();
    $(".tab .menu a").removeClass("active");

    var link = $(this).attr("href");
    $(link).show();

    $(this).addClass("active");

    e.preventDefault();

});