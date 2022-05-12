// let btn = document.querySelector("button");
let select = document.getElementById("selectState");
let selectDistrict = document.getElementById("selectDistrict");

const Andhra = [
    { name: "East Godavari" },
    { name: "Guntur" },
    { name: "Krishna" },
    { name: "Kurnool	Prakasam" },
    { name: "Nellore" },
    { name: "Srikakulam" },
    { name: "Visakhapatnam" },
    { name: "Vizianagaram" },
    { name: "West Godavari" },
];

const Arunachal = [
    { name: "Changlang" },
    { name: "East Kameng" },
    { name: "East Siang" },
    { name: "Lohit" },
    { name: "Lower Dibang Valley" },
    { name: "Lower Subansiri" },
    { name: "Papum Pare" },
    { name: "Tawang" },
    { name: "Tirap" },
    { name: "West Kameng" },
    { name: "West Siang" },
];

const Assam = [
    { name: "Dibrugarh" },
    { name: "Hailakandi" },
    { name: "Jorhat" },
    { name: "Karimganj" },
    { name: "Lakhimpur" },
    { name: "Tinsukia" },
    { name: "Cachar" },
    { name: "Chirang" },
    { name: "Dhemaji Dima Hasao/N.C Hills" },
];

const Gujarat = [
    { name: "Amreli" },
    { name: "Anand" },
    { name: "Bharuch" },
    { name: "Bhavnagar" },
    { name: "Junagadh" },
    { name: "Kheda" },
    { name: "Narmada" },
    { name: "Rajkot" },
    { name: "Tapi" },
    { name: "Vadodara" },
    { name: "Surendranagar" },
    { name: "Panch Mahals" },
    { name: "Dohad" },
    { name: "Surat" },
];

const Goa = [{ name: "North Goa" }, { name: "South Goa" }];

const Chhattisgarh = [
    { name: "Bastar" },
    { name: "Bijapur (CG)" },
    { name: "Bilaspur (CG)" },
    { name: "Janjgir-champa" },
    { name: "Jashpur	Korba" },
    { name: "Mahasamund" },
    { name: "Narayanpur" },
    { name: "Raigarh (CG)" },
    { name: "Raipur" },
    { name: "Surguja" },
    { name: "Uttar Bastar Kanker" },
    { name: "Durg" },
    { name: "Kabeerdham" },
];

const Karnataka = [
    { name: "Ballary" },
    { name: "Belgavi" },
    { name: "Bidar" },
    { name: "Chikkamagalur" },
    { name: "Dharwad" },
    { name: "Hassan" },
    { name: "Haveri" },
    { name: "Kalburgi" },
    { name: "Koppal" },
    { name: "Mandya" },
    { name: "Mysuru" },
    { name: "Raichur" },
    { name: "Shivamogga" },
    { name: "Vijayapura" },
    { name: "Yadgir" },
];

const Kerala = [
    { name: "Alappuzha" },
    { name: "Ernakulam" },
    { name: "Idukki" },
    { name: "Kozhikode" },
    { name: "Malappuram" },
    { name: "Palakkad" },
    { name: "Pathanamthitta" },
    { name: "Thrissur" },
];

const Manipur = [
    { name: "Bishnupur" },
    { name: "Chandel" },
    { name: "Churachandpur" },
    { name: "Imphal East" },
    { name: "Thoubal" },
    { name: "Ukhrul" },
];

const Mizoram = [
    { name: "Aizawl" },
    { name: "Champhai" },
    { name: "Kolasib" },
    { name: "Lawangtlai" },
    { name: "Lunglei" },
    { name: "Mamit" },
    { name: "Saiha" },
    { name: "Serchhip" },
];

const Nagaland = [
    { name: "Peren" },
    { name: "Dimapur" },
    { name: "Kiphire" },
    { name: "Wokha" },
    { name: "Mokokchung" },
    { name: "Tuensang" },
];

const Odisha = [
    { name: "Anugul" },
    { name: "Baleshwar" },
    { name: "Bargarh" },
    { name: "Gajapati" },
    { name: "Ganjam" },
    { name: "Kalahandi" },
    { name: "Kandhamal" },
    { name: "Koraput" },
    { name: "Kendujhar" },
    { name: "Malkangiri" },
    { name: "Mayurbhanj" },
    { name: "Nabarangapur" },
    { name: "Rayagada" },
    { name: "Sambalpur" },
    { name: "Subarnapur" },
    { name: "Sundargarh" },
];

const Tamil = [
    { name: "Ariyalur" },
    { name: "Cuddalore" },
    { name: "Erode" },
    { name: "Karur" },
    { name: "Kancheepuram" },
    { name: "Madurai" },
    { name: "Pudukkottai" },
    { name: "Ramanathapuram" },
    { name: "Thiruvarur" },
    { name: "Sivaganga" },
    { name: "Tiruchirappalli" },
    { name: "Thiruvallur" },
    { name: "Tiruvannamalai" },
    { name: "Thoothukkudi" },
    { name: "Viluppuram" },
    { name: "Virudunagar" },
    { name: "Thanjavur" },
];

const Telangana = [
    { name: "Adilabad" },
    { name: "Hyderabad" },
    { name: "Karimnagar" },
    { name: "Khammam" },
    { name: "Mahbubnagar" },
    { name: "Medak" },
    { name: "Nalgonda" },
    { name: "Nizamabad" },
    { name: "Rangareddy" },
    { name: "Warangal" },
];

select.addEventListener("change", (e) => {
            const state = select.value;

            switch (state) {
                case "Arunachal Pradesh":
                    {
                        document.getElementById(
                            "selectDistrict"
                        ).innerHTML = `${Arunachal.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Assam":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Assam.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Manipur":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Manipur.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Mizoram":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Mizoram.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Nagaland":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Nagaland.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Andhra Pradesh":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Andhra.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Chhattisgarh":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Chhattisgarh.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Gujarat":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Gujarat.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Karnataka":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Karnataka.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Odisha":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Odisha.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Tamil nadu":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Tamil.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Telangana":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Telangana.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Goa":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Goa.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        case "Kerala":
            {
                document.getElementById(
                    "selectDistrict"
                ).innerHTML = `${Kerala.map(function (value) {
                    return `<option value="${value.name}">${value.name}</option>`;
                })}`;
            }
            break;
        default:
        case "State":
            console.log("Error");
    }
});

document.getElementById("onSubmit").addEventListener("click", function (e) {
    console.log(select.value);
    console.log(selectDistrict.value);
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization1);
google.charts.setOnLoadCallback(drawVisualization2);

function drawVisualization1() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ["States", "Bolivia", "Ecuador"],
        ["Arunachal Pradesh", 165, 98],
        ["Assam", 135, 120],
        ["Manipur", 17, 116],
        ["Mizoram", 57, 167],
        ["Nagaland", 15, 117],
        ["Andhra Pradesh", 127, 167],
        ["Chhattisgarh", 137, 117],
        ["Gujarat", 107, 116],
        ["Karnataka", 97, 167],
        ["Odisha", 57, 117],
        ["Tamil nadu", 15, 17],
        ["Telangana", 17, 117],
        ["Goa", 17, 117],
        ["Kerala", 17, 117],
    ]);

    var options = {
        title: "State",
        vAxis: { title: "Data" },
        hAxis: { title: "States" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
    };

    var chart = new google.visualization.ComboChart(
        document.getElementById("chart_div1")
    );
    chart.draw(data, options);
}

function drawVisualization2() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        [
            "Month",
            "Bolivia",
            "Ecuador",
            // "Average",
        ],
        ["Jan", 165, 98],
        ["Feb", 135, 120],
        ["March", 17, 116],
        ["April", 57, 167],
        ["May", 15, 117],
        ["June", 127, 167],
        ["July", 137, 117],
        ["Aug", 107, 116],
        ["Sep", 97, 167],
        ["Oct", 57, 117],
        ["Nov", 15, 17],
        ["Dec", 17, 117],
        // ["2007/08", 139, 1110, 615, 968, 215],
        // ["2008/09", 136, 691, 629, 1026, 366],
    ]);

    var options = {
        title: "District",
        vAxis: { title: "Data" },
        hAxis: { title: "Districts" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
    };

    var chart = new google.visualization.ComboChart(
        document.getElementById("chart_div2")
    );
    chart.draw(data, options);
}