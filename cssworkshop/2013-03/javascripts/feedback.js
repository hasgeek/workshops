var twain = require('twain'),
    animloop = require('animloop');

// assume jquery lives globally

function wait(time, callback) {
    setTimeout(callback, time);
};

module.exports = [{
    trigger: 0,
    fn: function(done) {

        setTimeout(function() {
            $('.fb-1 .arrow').css({
                opacity: 0
            }).show().animate({
                opacity: 1
            }, 300, function() {
                $('.fb-1 .needs-logo').css({
                    opacity: 0
                }).show().animate({
                    opacity: 1
                }, 300, function() {
                    wait(1000, function() {
                        $('.hero .hasgeek-presents').addClass('needed-logo');
                        $('.hero .txt').animate({
                            'margin-left': -1000,
                            'margin-top': -20
                        }, 400, function() {
                            wait(500, function() {
                                $('.fb-2 .arrow').css({
                                    opacity: 0
                                }).show().animate({
                                    opacity: 1
                                }, 300, function() {
                                    $('.fb-2 .not-enough-pop').css({
                                        opacity: 0
                                    }).show().animate({
                                        opacity: 1
                                    }, 300, function() {
                                        wait(300, function() {
                                            $('.hero .title').addClass('pop');
                                            done && done();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }, 1000);



    },

}, {
    trigger: 340,
    fn: function(done) {
        // return;
        var pic = $('.speaker-pic img');
        var comments = $('.fb-3 .comment');
        wait(5000, function() {
            $(comments[0]).css({
                opacity: 0
            }).show().animate({
                opacity: 1
            }, 300, function() { // too pretentious
                wait(400, function() {
                    pic.css({
                        'border-radius': 0
                    });
                });

                wait(1000, function() {
                    $(comments[1]).css({
                        opacity: 0
                    }).show().animate({
                        opacity: 1
                    }, 300, function() { // web 20
                        wait(400, function() {
                            pic.addClass('avatar-3d');
                        });

                        wait(1000, function() {
                            $(comments[2]).css({
                                opacity: 0
                            }).show().animate({
                                opacity: 1
                            }, 300, function() { // rounder
                                wait(400, function() {

                                    pic.css({
                                        'border-radius': 30
                                    });
                                });


                                wait(1400, function() {
                                    $(comments[3]).css({
                                        opacity: 0
                                    }).show().animate({
                                        opacity: 1
                                    }, 300, function() { // ROUNDER
                                        pic.removeClass('avatar-3d');
                                        wait(200, function() {
                                            pic.css({
                                                'border-radius': 90
                                            });
                                        });

                                        wait(800, function() {
                                            $(comments[4]).css({
                                                opacity: 0
                                            }).show().animate({
                                                opacity: 1
                                            }, 300, done); // dammit britta
                                        });
                                    });
                                });

                            });

                        });
                    });
                });
            });
        });

    }
}, {
    trigger: 700,
    fn: function(done) {


        var stretcher = $('.everywhere .stretcher').get(0);

        (function() {
            var t = twain({
                multiplier: 0.08 / 16
            });
            var toggle = true;
            t.on('step', function(step) {
                stretcher.style.width = step.value + '%';
            });

            setInterval(function() {
                if(toggle == true) {
                    toggle = false;
                    t.to({
                        width: 30
                    })
                    return;
                }
                toggle = true;
                t.to({
                    width: 100
                })

            }, 2000);

        })();

        // performance graph
        var graph = $('.performance .bar-graph');
        var colors = ['#2db548', '#c62db6', '#d6ad42', '#1b98d6', '#d6133d'];

        for(var i = 0; i < 5; i++) {
            var el = $('<div class="bar"/>');
            el.css({
                width: Math.random() * 100,
                top: i * 10
            });
            el.get(0).style.backgroundColor = colors[i];
            graph.append(el);
        }

        $('.bar-graph .bar').each(function(i, el) {
            var tween = twain();
            tween.on('step', function(step) {
                el.style.width = step.value + 'px';
            });
            setInterval(function() {
                tween.to({
                    width: Math.random() * 100
                });
            }, 300 + Math.random() * 500)
        });


    }

}, {
    trigger: null,
    fn: function(done) {
        var hole = $('.hole-cnt');
        var width = hole.width();
        var height = hole.height();
        var nucleus = $('.hole-cnt .nucleus');
        var electrons = nucleus.find('.electron');


        animloop.on('beforedraw', function() {
            var time = new Date().getTime();

            electrons.each(function(i, el) {
                $(el).css({
                    transform: 'rotate(' + (i * 30) + 'deg) translate(0, ' + (20 * Math.sin((time + i * 20) / 100)) + 'px)'
                });
            });
        });

        var user = function(e) {
            var _left = e.pageX - hole.offset().left;
            var _top = e.pageY - hole.offset().top;
            nucleus.css({
                top: _top,
                left: _left
            });
        };

        try {
            window.addEventListener("touchstart", user);
        } catch(e) {
            // touch probably not supported
        }


        $(document.body).on('mousemove', user);

    }
}];