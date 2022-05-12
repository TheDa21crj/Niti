let select = document.getElementById("selectState");
let selectDistrict = document.getElementById("selectDistrict");

const Andhra = [
    { name: "East Godavari" },
    { name: "Guntur" },
    { name: "Krishna" },
    { name: "Kurnool" },
    { name: "Prakasam" },
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
    { name: "Dibrugarh", option: "Dibrugarh" },
    { name: "Hailakandi", option: "Hailakandi" },
    { name: "Jorhat", option: "Jorhat" },
    { name: "Karimganj", option: "Karimganj" },
    { name: "Lakhimpur", option: "Lakhimpur" },
    { name: "Tinsukia", option: "Tinsukia" },
    { name: "Cachar", option: "Cachar" },
    { name: "Chirang", option: "Chirang" },
    { name: "Dhemaji", option: "Dhemaji" },
    { name: "Dima Hasao/N.C Hills", option: "Dima Hasao" },
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
    { name: "Bastar", option: "Bastar" },
    { name: "Bijapur", option: "Bijapur" },
    { name: "Bilaspur", option: "Bilaspur" },
    { name: "Janjgir-champa", option: "Janjgir-champa" },
    { name: "Jashpur", option: "Jashpur" },
    { name: "Korba", option: "Korba" },
    { name: "Mahasamund", option: "Mahasamund" },
    { name: "Narayanpur", option: "Narayanpur" },
    { name: "Raigarh (CG)", option: "Raigarh" },
    { name: "Raipur", option: "Raipur" },
    { name: "Surguja", option: "Surguja" },
    { name: "Uttar Bastar Kanker", option: "Uttar Bastar Kanker" },
    { name: "Durg", option: "Durg" },
    { name: "Kabeerdham", option: "Kabeerdham" },
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
                    return `<option value="${value.option}">${value.name}</option>`;
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
                    return `<option value="${value.option}">${value.name}</option>`;
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
    const selectAge = document.getElementById("selectAge");

    if (
        selectAge.value == "Crop Age" ||
        selectDistrict.value == "District" ||
        document.getElementById("selectState").value == "State"
    ) {
        return;
    }

    if (document.getElementById("Data").innerHTML != "") {
        document.getElementById("Data").innerHTML = "";
    }

    document.getElementById("TableDiv").style.display = "block";

    fetch(`./Data/${selectAge.value}/${selectDistrict.value}.csv`)
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
        });
});