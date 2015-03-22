(function(b) {
    skel.init({
        reset: "full",
        breakpoints: {
            global: {
                range: "*",
                href: "css/style.css"
            },
            desktop: {
                range: "737-",
                href: "css/style-desktop.css",
                containers: 1200,
                grid: {
                    gutters: 50
                }
            },
            "1000px": {
                range: "737-1200",
                href: "css/style-1000px.css",
                containers: 960,
                grid: {
                    gutters: 25
                },
                viewport: {
                    width: 1024
                }
            },
            mobile: {
                range: "-736",
                href: "css/style-mobile.css",
                containers: "100%!",
                grid: {
                    collapse: true,
                    gutters: 20
                },
                viewport: {
                    scalable: false
                }
            }
        },
        plugins: {
            layers: {
                navPanel: {
                    hidden: true,
                    breakpoints: "mobile",
                    position: "top-left",
                    side: "left",
                    animation: "pushX",
                    width: "80%",
                    height: "100%",
                    clickToHide: true,
                    html: '<div data-action="navList" data-args="nav"></div>',
                    orientation: "vertical"
                },
                titleBar: {
                    breakpoints: "mobile",
                    position: "top-left",
                    side: "top",
                    height: 44,
                    width: "100%",
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>'
                }
            }
        }
    });
    b(function() {
        var f = b(window),
            e = b("body");
        e.addClass("is-loading");
        f.on("load", function() {
            e.removeClass("is-loading")
        });
        var d = b("form");
        if (d.length > 0) {
            if (skel.vars.IEVersion < 10) {
                b.fn.n33_formerize = function() {
                    var h = new Array(),
                        g = b(this);
                    g.find("input[type=text],textarea").each(
                        function() {
                            var i = b(this);
                            if (i.val() == "" || i.val() ==
                                i.attr("placeholder")) {
                                i.addClass(
                                    "formerize-placeholder"
                                );
                                i.val(i.attr("placeholder"))
                            }
                        }).blur(function() {
                        var i = b(this);
                        if (i.attr("name").match(
                            /_fakeformerizefield$/)) {
                            return
                        }
                        if (i.val() == "") {
                            i.addClass(
                                "formerize-placeholder"
                            );
                            i.val(i.attr("placeholder"))
                        }
                    }).focus(function() {
                        var i = b(this);
                        if (i.attr("name").match(
                            /_fakeformerizefield$/)) {
                            return
                        }
                        if (i.val() == i.attr(
                            "placeholder")) {
                            i.removeClass(
                                "formerize-placeholder"
                            );
                            i.val("")
                        }
                    });
                    g.find("input[type=password]").each(
                        function() {
                            var j = b(this);
                            var i = b(b("<div>").append(j.clone())
                                .remove().html().replace(
                                    /type="password"/i,
                                    'type="text"').replace(
                                    /type=password/i,
                                    "type=text"));
                            if (j.attr("id") != "") {
                                i.attr("id", j.attr("id") +
                                    "_fakeformerizefield"
                                )
                            }
                            if (j.attr("name") != "") {
                                i.attr("name", j.attr(
                                        "name") +
                                    "_fakeformerizefield"
                                )
                            }
                            i.addClass(
                                    "formerize-placeholder"
                                ).val(i.attr("placeholder"))
                                .insertAfter(j);
                            if (j.val() == "") {
                                j.hide()
                            } else {
                                i.hide()
                            }
                            j.blur(function(l) {
                                l.preventDefault();
                                var m = b(this);
                                var k = m.parent().find(
                                    "input[name=" +
                                    m.attr(
                                        "name") +
                                    "_fakeformerizefield]"
                                );
                                if (m.val() == "") {
                                    m.hide();
                                    k.show()
                                }
                            });
                            i.focus(function(l) {
                                l.preventDefault();
                                var k = b(this);
                                var m = k.parent().find(
                                    "input[name=" +
                                    k.attr(
                                        "name")
                                    .replace(
                                        "_fakeformerizefield",
                                        "") +
                                    "]");
                                k.hide();
                                m.show().focus()
                            });
                            i.keypress(function(k) {
                                k.preventDefault();
                                i.val("")
                            })
                        });
                    g.submit(function() {
                        b(this).find(
                            "input[type=text],input[type=password],textarea"
                        ).each(function(i) {
                            var j = b(this);
                            if (j.attr("name").match(
                                /_fakeformerizefield$/
                            )) {
                                j.attr("name",
                                    "")
                            }
                            if (j.val() == j.attr(
                                "placeholder"
                            )) {
                                j.removeClass(
                                    "formerize-placeholder"
                                );
                                j.val("")
                            }
                        })
                    }).bind("reset", function(i) {
                        i.preventDefault();
                        b(this).find("select").val(b(
                            "option:first").val());
                        b(this).find("input,textarea").each(
                            function() {
                                var k = b(this);
                                var j;
                                k.removeClass(
                                    "formerize-placeholder"
                                );
                                switch (this.type) {
                                    case "submit":
                                    case "reset":
                                        break;
                                    case "password":
                                        k.val(k.attr(
                                            "defaultValue"
                                        ));
                                        j = k.parent()
                                            .find(
                                                "input[name=" +
                                                k.attr(
                                                    "name"
                                                ) +
                                                "_fakeformerizefield]"
                                            );
                                        if (k.val() ==
                                            "") {
                                            k.hide();
                                            j.show()
                                        } else {
                                            k.show();
                                            j.hide()
                                        }
                                        break;
                                    case "checkbox":
                                    case "radio":
                                        k.attr(
                                            "checked",
                                            k.attr(
                                                "defaultValue"
                                            ));
                                        break;
                                    case "text":
                                    case "textarea":
                                        k.val(k.attr(
                                            "defaultValue"
                                        ));
                                        if (k.val() ==
                                            "") {
                                            k.addClass(
                                                "formerize-placeholder"
                                            );
                                            k.val(k
                                                .attr(
                                                    "placeholder"
                                                )
                                            )
                                        }
                                        break;
                                    default:
                                        k.val(k.attr(
                                            "defaultValue"
                                        ));
                                        break
                                }
                            });
                        window.setTimeout(function() {
                            for (x in h) {
                                h[x].trigger(
                                    "formerize_sync"
                                )
                            }
                        }, 10)
                    });
                    return g
                };
                d.n33_formerize()
            }
        }
        b("#nav > ul").dropotron({
            mode: "fade",
            noOpenerFade: true,
            alignment: "center"
        })
    });

    function c() {
        var d = b(window).scrollTop();
        var e = b("#nav-anchor").offset().top;
        if (d > e) {
            b("#nav").addClass("stick")
        } else {
            b("#nav").removeClass("stick")
        }
    }
    b(function() {
        b(window).scroll(c);
        c()
    });
    b(document).ready(function() {
        b(document).on("scroll", a);
        b('a[href^="#"]').on("click", function(f) {
            f.preventDefault();
            b(document).off("scroll");
            var d = this.hash,
                g = d;
            $target = b(d);
            b("html, body").stop().animate({
                scrollTop: $target.offset().top + 2
            }, 500, "swing", function() {
                window.location.hash = d;
                b(document).on("scroll", a)
            })
        })
    });

    function a(d) {
        var e = b(document).scrollTop();
        b("#nav ul li a").each(function() {
            var f = b(this);
            var g = b(f.attr("href"))
        })
    }
    
})(jQuery);