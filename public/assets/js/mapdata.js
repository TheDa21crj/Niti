var simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: "600", //'700' or 'responsive'
        background_color: "red",
        background_transparent: "yes",
        border_color: "#534E52",

        //State defaults
        state_description: "",
        state_color: "#D1D1D1",
        state_hover_color: "#D1D1D1",

        border_size: 1.2,
        all_states_inactive: "no",
        // all_states_zoomable: "yes",

        //Location defaults
        // location_description: "Location description",
        // location_color: "#FF0067",
        // location_opacity: 2.8,
        // location_hover_opacity: 1,
        // location_url: "",
        // location_size: 35,
        // location_type: "square",
        // location_image_source: "frog.png",
        // location_border_color: "#FFFFFF",
        // location_border: 2,
        // location_hover_border: 2.5,
        // all_locations_inactive: "no",
        // all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",

        label_size: "-29",
        label_font: "Helvetica",

        //Zoom settings
        // zoom: "yes",
        // back_image: "no",
        // initial_back: "no",
        // initial_zoom: "-1",
        // initial_zoom_solo: "no",
        // region_opacity: 1,
        // region_hover_opacity: 0.6,
        // zoom_out_incrementally: "yes",
        // zoom_percentage: 0.99,
        // zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 3,
        popup_corners: 8,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        // div: "map",
        // auto_load: "yes",
        // url_new_tab: "no",
        // images_directory: "default",
        // fade_time: 0.1,
        // link_text: "View Website",
        // popups: "detect",
        // state_image_url: "",
        // state_image_position: "",
        // location_image_url: ""
        //Label defaults
        label_color: "#333232",
        label_hover_color: "#d5ddec",
        label_size: "14",
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",
    },
    state_specific: {
        1: {
            name: "Andaman And Nicobar",
        },
        2: {
            name: "Andhra Pradesh",
            color: "#FFF56D",
            description: "Potential State",
        },
        3: {
            name: "Arunachal Pradesh",
        },
        4: {
            name: "Assam",
            color: "#FFF56D",
            description: "Potential State",
        },
        5: {
            name: "Bihar",
        },
        6: {
            name: "Chandigarh",
        },
        7: {
            name: "Chhattisgarh",
            color: "#FFF56D",
            description: "Potential State",
        },
        8: {
            name: "Dadra And Nagar Haveli",
        },
        9: {
            name: "Daman And Diu",
        },
        10: {
            name: "Delhi",
        },
        11: {
            name: "Goa",
            color: "#FFF56D",
            description: "Potential State",
        },
        12: {
            name: "Gujarat",
            color: "#FFF56D",
            description: "Potential State",
        },
        13: {
            name: "Haryana",
        },
        14: {
            name: "Himachal Pradesh",
        },
        16: {
            name: "Jharkhand",
        },
        17: {
            name: "Karnataka",
            color: "#FFF56D",
            description: "Potential State",
        },
        18: {
            name: "Kerala",
            color: "#FFF56D",
            description: "Potential State",
        },
        19: {
            name: "Lakshadweep",
        },
        20: {
            name: "Madhya Pradesh",
        },
        21: {
            name: "Maharashtra",
        },
        22: {
            name: "Manipur",
            color: "#FFF56D",
            description: "Potential State",
        },
        23: {
            name: "Meghalaya",
        },
        24: {
            name: "Mizoram",
            color: "#FFF56D",
            description: "Potential State",
        },
        25: {
            name: "Nagaland",
            color: "#FFF56D",
            description: "Potential State",
        },
        26: {
            name: "Orissa",
            color: "#FFF56D",
            description: "Potential State",
        },
        27: {
            name: "Puducherry",
        },
        28: {
            name: "Punjab",
        },
        29: {
            name: "Rajasthan",
        },
        30: {
            name: "Sikkim",
        },
        31: {
            name: "Tamil Nadu",
            color: "#FFF56D",
            description: "Potential State",
        },
        32: {
            name: "Tripura",
        },
        33: {
            name: "Uttar Pradesh",
        },
        34: {
            name: "Uttaranchal",
        },
        35: {
            name: "West Bengal",
        },
        36: {
            name: "Jammu And Kashmir",
        },
        37: {
            name: "Telangana",
            color: "#FFF56D",
            description: "Potential State",
        },
        38: {
            name: "Ladakh",
        },
    },
    locations: {},
    labels: {
        // "0": {
        //   name: "Andaman And Nicobar",
        //   parent_id: "1",
        //   x: 843.4,
        //   y: 929.2
        // },
        1: {
            name: "AndhraPradesh",
            parent_id: "2",
            x: 354.5,

            y: 853.8,
        },
        // "2": {
        //   name: "Arunachal Pradesh",
        //   parent_id: "3",
        //   x: 907.8,
        //   y: 351.9
        // },
        3: {
            name: "Assam",
            parent_id: "4",
            x: 835.1,
            y: 429.1,
        },
        // "4": {
        //   name: "Bihar",
        //   parent_id: "5",
        //   x: 612.7,
        //   y: 457.9
        // },
        // "5": {
        //   name: "Chandigarh",
        //   parent_id: "6",
        //   x: 293.9,
        //   y: 262.3
        // },
        6: {
            name: "Chhattisgarh",
            parent_id: "7",
            x: 481.2,
            y: 599,
        },
        // "7": {
        //   name: "Dadra And Nagar Haveli",
        //   parent_id: "8",
        //   x: 166,
        //   y: 660.3
        // },
        // "8": {
        //   name: "Daman And Diu",
        //   parent_id: "9",
        //   x: 88.9,
        //   y: 639.4
        // },
        // "9": {
        //   name: "Delhi",
        //   parent_id: "10",
        //   x: 305.4,
        //   y: 343.6
        // },
        10: {
            name: "Goa",
            parent_id: "11",
            x: 202.7,
            y: 833.8,
        },
        11: {
            name: "Gujarat",
            parent_id: "12",
            x: 123.1,
            y: 544.6,
        },
        // "12": {
        //   name: "Haryana",
        //   parent_id: "13",
        //   x: 277.1,
        //   y: 326.3
        // },
        // "13": {
        //   name: "Himachal Pradesh",
        //   parent_id: "14",
        //   x: 311.6,
        //   y: 214.3
        // },
        // "14": {
        //   name: "Jharkhand",
        //   parent_id: "16",
        //   x: 574.1,
        //   y: 537.3
        // },
        15: {
            name: "Karnataka",
            parent_id: "17",
            x: 261.1,
            y: 885.4,
        },
        16: {
            name: "Kerala",
            parent_id: "18",
            x: 290,
            y: 1047.3,
        },
        // "17": {
        //   name: "Lakshadweep",
        //   parent_id: "19",
        //   x: 167.6,
        //   y: 1082.3
        // },
        // "18": {
        //   name: "Madhya Pradesh",
        //   parent_id: "20",
        //   x: 395.4,
        //   y: 556.3
        // },
        // "19": {
        //   name: "Maharashtra",
        //   parent_id: "21",
        //   x: 245.5,
        //   y: 691.9
        // },
        20: {
            name: "Manipur",
            parent_id: "22",
            x: 885.2,
            y: 498,
        },
        // "21": {
        //   name: "Meghalaya",
        //   parent_id: "23",
        //   x: 761.6,
        //   y: 463.4
        // },
        22: {
            name: "Mizoram",
            parent_id: "24",
            x: 865,
            y: 536.5,
        },
        23: {
            name: "Nagaland",
            parent_id: "25",
            x: 918,
            y: 441.4,
        },
        24: {
            name: "Orissa",
            parent_id: "26",
            x: 564.7,
            y: 640.5,
        },
        // "25": {
        //   name: "Puducherry",
        //   parent_id: "27",
        //   x: 397.5,
        //   y: 990.5
        // },
        // "26": {
        //   name: "Punjab",
        //   parent_id: "28",
        //   x: 251.8,
        //   y: 263
        // },
        // "27": {
        //   name: "Rajasthan",
        //   parent_id: "29",
        //   x: 196.1,
        //   y: 412
        // },
        // "28": {
        //   name: "Sikkim",
        //   parent_id: "30",
        //   x: 692.2,
        //   y: 389
        // },
        29: {
            name: "Tamil Nadu",
            parent_id: "31",
            x: 346.4,
            y: 990.1,
        },
        // "30": {
        //   name: "Tripura",
        //   parent_id: "32",
        //   x: 799.9,
        //   y: 534.9
        // },
        // "31": {
        //   name: "Uttar Pradesh",
        //   parent_id: "33",
        //   x: 429.5,
        //   y: 415.4
        // },
        // "32": {
        //   name: "Uttaranchal",
        //   parent_id: "34",
        //   x: 384.1,
        //   y: 285.5
        // },
        // "33": {
        //   name: "West Bengal",
        //   parent_id: "35",
        //   x: 670.9,
        //   y: 551.3
        // },
        // "34": {
        //   name: "Jammu And Kashmir",
        //   parent_id: "36",
        //   x: 291.8,
        //   y: 102.4
        // },
        35: {
            name: "Telangana",
            parent_id: "37",
            x: 370.7,
            y: 747,
        },
        // "36": {
        //   name: "Ladakh",
        //   parent_id: "38",
        //   x: 320.9,
        //   y: 117.2
        // }
    },

    regions: {},
};