$(document).ready(function(){
    $(window).load("../public/home.html")

    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })

    //Open and close specific part modals
    $(".electrical-modal").hide()
    $(".actuator-modal").hide()
    $(".cap-modal").hide()
    $(".bracket-modal").hide()
    $(".household-modal").hide()
    $(".cap-machine-modal").hide()
    $(".metal-stamp-modal").hide()

    $(".part-cards-electrical").click(function(){
        $(".electrical-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".electrical-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-actuator").click(function(){
        $(".actuator-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".actuator-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-cap").click(function(){
        $(".cap-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".cap-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-bracket").click(function(){
        $(".bracket-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".bracket-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-household").click(function(){
        $(".household-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".household-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".cap-machine").click(function(){
        $(".cap-machine-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".cap-machine-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".metal-stamp-app").click(function(){
        $(".metal-stamp-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".metal-stamp-modal").hide()
        $(".close-button").removeClass("active")
    })
})

