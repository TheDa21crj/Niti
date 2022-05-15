document.getElementById("onSubmit").addEventListener("click", function(e) {
    let selectComposition = document.getElementById("selectComposition").value;
    let selectAge = document.getElementById("selectAge").value;
    let NumberofPalms = document.getElementById("NumberofPalms").value;

    if (
        selectAge == "Crop Age" ||
        selectComposition == "Fertilizer Composition" ||
        NumberofPalms == "" ||
        NumberofPalms == 0
    ) {
        return;
    }

    if (document.getElementById("Data").innerHTML != "") {
        document.getElementById("Data").innerHTML = "";
    }

    document.getElementById("TableDiv").style.display = "block";

    fetch(`./Data/fer/${selectAge}/${selectComposition}.csv`)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            let result = data.split(/\r?\n|\r/).map((e) => {
                return e.split(",");
            });
            result.forEach((e) => {
                let m = e
                    .map((e) => {
                        return `<td>${e}</td>`;
                    })
                    .join("");
                let ce = document.createElement("tr");
                ce.innerHTML = m;
                document.getElementById("Data").appendChild(ce);
            });

            tr = document.getElementsByTagName("tr");

            for (i = 0; i < 6; i++) {
                if (i == 0) {
                    var td = document.createElement("td");
                    td.innerHTML = "Total Value";
                    tr[0].appendChild(td);
                } else {
                    var td = document.createElement("td");
                    td.innerHTML = result[i][2] * NumberofPalms;
                    tr[i].appendChild(td);
                }
            }
        });
});

var show = false;

document.getElementById("hamburger").addEventListener("click", function(e) {
    console.log("object");
    if (!show) {
        show = true;
        document.getElementById("nav").style.transform = "translateX(0)";
        document.getElementById("navigationID").style.display = "none";
    } else if (show) {
        show = false;
        document.getElementById("nav").style.transform = "translateX(-100%)";
        document.getElementById("navigationID").style.display = "flex";
    }
});

let ferValToggle = true;

document
    .getElementById("ConventionalDiv")
    .addEventListener("click", function(e) {
        ferValToggle = false;

        //change style of btn(s)
        document.getElementById("ConventionalDiv").style.fontWeight = "bold";
        document.getElementById("ConventionalDiv").style.color = "#233285";
        document.getElementById("NonConventionalDiv").style.fontWeight =
            "normal";
        document.getElementById("NonConventionalDiv").style.color = "black";

        // toggle Con. & Non Con.
        document.getElementById("belowDivFalse").style.display = "block";
        document.getElementById("belowDivTrueDefalult").style.display = "none";
    });

document
    .getElementById("NonConventionalDiv")
    .addEventListener("click", function(e) {
        ferValToggle = true;

        //change style of btn(s)
        document.getElementById("NonConventionalDiv").style.fontWeight = "bold";
        document.getElementById("NonConventionalDiv").style.color = "#233285";
        document.getElementById("ConventionalDiv").style.fontWeight = "normal";
        document.getElementById("ConventionalDiv").style.color = "black";

        // toggle Con. & Non Con.
        document.getElementById("belowDivFalse").style.display = "none";
        document.getElementById("belowDivTrueDefalult").style.display = "block";
    });