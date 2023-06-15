import * as _ from "lodash";
import moment from "moment";
import { toast } from "react-toastify";
const units = ['bytes', 'Kb', 'Mb', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

/* eslint-disable */
export const uuid = () => {
    let uuid = "";
    let i;
    for (i = 0; i < 32; i += 1) {
        switch (i) {
            case 8:
            case 20:
                uuid += "-";
                uuid += (Math.random() * 16 || 0).toString(16);
                break;
            case 12:
                uuid += "-";
                uuid += "4";
                break;
            case 16:
                uuid += "-";
                uuid += (Math.random() * 4 || 8).toString(16);
                break;
            default:
                uuid += (Math.random() * 16 || 0).toString(16);
        }
    }
    return uuid;
};
/* eslint-enable */
export const capitalize = (string: string) => {
    if (!string) {
        return "";
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeUppertoLower = (string: string) => {
    if (!string) {
        return "";
    }

    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
};

export const getValueAsFloatWithNDecimalPlaces = (
    value: number,
    decimalPlaces: number
) => {
    if (["0", 0].includes(value)) {
        return value;
    }

    return Number(value).toFixed(decimalPlaces);
};

export const validateArray = (array: any[]) => {
    if (!array || !Array.isArray(array) || !array.length) {
        return [];
    }

    return array;
};

export const copyToClipboard = (value: any) => {
    navigator.clipboard.writeText(_.unescape(value));
};

export const showToastMessage = (message: string, type: string) => {
    if (type === "error") {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

export const genderOptions = [
    {
        value: "Male",
        name: "Male",
    },
    {
        value: "Female",
        name: "Female",
    }
];

export const symptomsDropdown = [
    {
        id: "1",
        value: "Cough",
        name: "Cough",
    },
    {
        id: "2",
        value: "Cold",
        name: "Cold",
    },
    {
        id: "3",
        value: "Headache",
        name: "Headache",
    },
    {
        id: "4",
        value: "Blackout",
        name: "Blackout",
    },
];

export const dummyOptions = [
    {
        id: "1",
        value: "One",
        name: "One",
    },
    {
        id: "2",
        value: "Two",
        name: "Two",
    },
    {
        id: "3",
        value: "Three",
        name: "Three",
    },
    {
        id: "4",
        value: "Four",
        name: "Four",
    },
    {
        id: "5",
        value: "Five",
        name: "Five",
    },
];

export const ageOptions = [
    {
        id: "1",
        value: "10 to 14 years",
        name: "10 to 14 years",
    },
    {
        id: "2",
        value: "14 to 24 years",
        name: "14 to 24 years",
    },
    {
        id: "3",
        value: "24 to 35 years",
        name: "24 to 35 years",
    },
    {
        id: "4",
        value: "35 to 50 years",
        name: "35 to 50 years",
    },
    {
        id: "5",
        value: "50 to 60 years",
        name: "50 to 60 years",
    },
];
export const dateRange = (type: any): any => {
    let range: any = [];

    switch (type) {
        case "0":
            range = [
                moment().startOf("day").format("YYYY-MM-DD HH:mm:ss"),
                moment().endOf("day").format("YYYY-MM-DD HH:mm:ss"),
            ];
            break;
        case "-1":
            range = [
                moment()
                    .subtract(1, "days")
                    .startOf("day")
                    .format("YYYY-MM-DD HH:mm:ss"),
                moment()
                    .subtract(1, "days")
                    .endOf("day")
                    .format("YYYY-MM-DD HH:mm:ss"),
            ];
            break;
        case "-7":
            range = [
                moment()
                    .subtract(6, "days")
                    .startOf("day")
                    .format("YYYY-MM-DD HH:mm:ss"),
                moment().endOf("day").format("YYYY-MM-DD HH:mm:ss"),
            ];
            break;
        case "-30":
            range = [
                moment()
                    .subtract(29, "days")
                    .startOf("day")
                    .format("YYYY-MM-DD HH:mm:ss"),
                moment().endOf("day").format("YYYY-MM-DD HH:mm:ss"),
            ];
            break;
        case "TM":
            range = [
                moment().startOf("month").format("YYYY-MM-DD HH:mm:ss"),
                moment().endOf("month").format("YYYY-MM-DD HH:mm:ss"),
            ];
            break;
        case "LM":
            range = [
                moment()
                    .subtract(1, "month")
                    .startOf("month")
                    .format("YYYY-MM-DD HH:mm:ss"),
                moment()
                    .subtract(1, "month")
                    .endOf("month")
                    .format("YYYY-MM-DD HH:mm:ss"),
            ];
            break;
        default:
            range = [];
    }
    return range;
};

export const defaultFiltersDropDown = [
    {
        id: "ALL",
        name: "All",
    },
    {
        id: "0",
        name: "Today",
    },
    {
        id: "-1",
        name: "Yesterday",
    },
    {
        id: "-7",
        name: "Last 7 Days",
    },
    {
        id: "-30",
        name: "Last 30 Days",
    },
    {
        id: "TM",
        name: "This Month",
    },
    {
        id: "LM",
        name: "Last Month",
    },
    {
        id: "custom",
        name: "Custom Date",
    },
];

// export const calculateAge = (dob: any) => {
//   const birthDate = new Date(dob)
//   const difference = Date.now() - birthDate.getTime()
//   const age = new Date(difference)
//   return Math.round(age.getUTCFullYear() - 1970)
// }

export const calculateAge = (dd: any) => {
    let dob: any = moment(dd).format("YYYY-MM-DD");
    let dob_year = dob?.split("-")[0];
    let d = new Date();
    let curr_year = d.getFullYear();
    let age = curr_year - dob_year;
    return age;
};

export const cityList = [
    {
        id: 'Dubai',
        value: 'Dubai',
    },
    {
        id: 'Sharjha',
        value: 'Sharjha',
    },
    {
        id: 'Ajman',
        value: 'Ajman',
    }
]


export const bytesToKb = (x: any) => {
    let l = 0, n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

export const TitleCase = (str: string) => {
    if (!str) return
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const getUserName = (user: any) => {
    if (user.name) {
        return user.name
    }
    //    console.log(user.phone.startsWith('971'))
    if (user.phone && !user.phone.startsWith('971') && !user.phone.startsWith('+971')) {
        return `971${user.phone}`
    }

    return user.phone
}

export const validateNumber = (phone: any) => {
    if (!phone) return true
    const phoneNumber = !String(phone).startsWith('+') ? `+${phone}` : phone
    const regex = /^(\+971|0)?5[024568]\d{7}$/
    return regex.test(phoneNumber)
}

export const slots =
    [
        '06:00 AM - 06:30 AM',
        '06:30 AM - 07:00 AM',
        '07:00 AM - 07:30 AM',
        '07:30 AM - 08:00 AM',
        '08:00 AM - 08:30 AM',
        '08:30 AM - 09:00 AM',
        '09:00 AM - 09:30 AM',
        '09:30 AM - 10:00 AM',
        '10:00 AM - 10:30 AM',
        '10:30 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '12:00 PM - 12:30 PM',
        '12:30 PM - 01:00 PM',
        '01:00 PM - 01:30 PM',
        '01:30 PM - 02:00 PM',
        '02:00 PM - 02:30 PM',
        '02:30 PM - 03:00 PM',
        '03:00 PM - 03:30 PM',
        '03:30 PM - 04:00 PM',
        '04:00 PM - 04:30 PM',
        '04:30 PM - 05:00 PM',
        '05:00 PM - 05:30 PM',
        '05:30 PM - 06:00 PM',
        '06:00 PM - 06:30 PM',
        '06:30 PM - 07:00 PM',
        '07:00 PM - 07:30 PM',
        '07:30 PM - 08:00 PM',
        '08:00 PM - 08:30 PM',
        '08:30 PM - 09:00 PM',
        '09:00 PM - 09:30 PM',
        '09:30 PM - 10:00 PM',
        '10:00 PM - 10:30 PM',
        '10:30 PM - 11:00 PM',
        '11:00 PM - 11:30 PM',
        '11:30 PM - 12:00 AM',
        '12:00 AM - 12:30 AM',
        '12:30 AM - 01:00 AM',
        '01:00 AM - 01:30 AM',
        '01:30 AM - 02:00 AM',
        '02:00 AM - 02:30 AM',
        '02:30 AM - 03:00 AM',
        '03:00 AM - 03:30 AM',
        '03:30 AM - 04:00 AM',
        '04:00 AM - 04:30 AM',
        '04:30 AM - 05:00 AM',
        '05:00 AM - 05:30 AM',
        '05:30 AM - 06:00 AM',
    ]