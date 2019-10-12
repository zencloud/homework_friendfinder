

// FUNCTIONS
function formValidate() {

    let isValid = true;

    $(".inputCheck").each(function () {
        console.log($(this).val())
        if ($(this).val() === "") {
            isValid = false;
            $(this).css("background-color", "#ec2690");
        }
    });

    return isValid;
}


function app_submit_questions(event) {
    event.preventDefault();

    if (formValidate()) {

        var friendData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        // AJAX post the data to the friends API.
        $.post("/api/friends", friendData, function (data) {

            console.log("Something")
            console.log(data);

            $("#m-friend-name").html(`<p>${data.name}</p>`);
            $("#m-friend-photo").attr('src', data.photo)
            $("#m-friend").modal();

        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
}
