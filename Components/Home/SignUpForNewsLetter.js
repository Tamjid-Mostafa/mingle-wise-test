import Image from "next/image";
import React from "react";
import AppleStore from "../../public/assets/icons/apple.svg";
import GooglePlay from "../../public/assets/icons/google-play-icon.svg";

const SignUpForNewsLetter = () => {
  const country = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Mongolia",
    "Morocco",
    "Monaco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "San Marino",
    " Sao Tome",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  return (
    <div className="newsletter-background flex justify-center items-center">
      <div className="xl:min-h-[70vh] max-h-[95%] w-[90%] sm:min-w-[80%] md:min-w-[80%] lg:min-w-[80%] xl:min-w-[70%] xl:max-w-[70%] bg-white rounded flex flex-col items-center p-2 sm:p-3 md:p-5 font-medium">
        <p className="ubuntu text-2xl md:text-4xl md:mt-8">DOWNLOAD APP!</p>
        <p className="roboto md:text-xl mt-3 md:mt-10 mb-7 text-gray-700 px-1 text-center">
          Please take our amazing app for a spine by downloading it using below
          links
        </p>
        <div className="md:flex gap-8 ">
          <div className="bg-gray-200 hover:bg-[#C57962] duration-200 ease-in flex px-5 py-2 rounded-full items-center gap-2 shadow-md mb-3 md:mb-auto">
            <Image src={AppleStore} alt="Icon" className="w-10 h-10" />
            <p>Get MingleWise</p>
          </div>
          <div className="bg-gray-200 hover:bg-[#C57962] duration-200 ease-in flex px-5 py-2 rounded-full items-center gap-2 shadow-md">
            <Image src={GooglePlay} alt="Icon" className="w-10 h-10" />
            <p>Get MingleWise</p>
          </div>
        </div>
        <p className="roboto  text-xl md:text-2xl text-gray-700 my-3 md:my-8 text-center">
          Signup for the Newsletter
        </p>
        <div className="">
          <form action="" className="flex flex-col w-full">
            <input
              placeholder="Your Email"
              type="email"
              className="w-full py-2 rounded-full px-3 mb-3 outline-[#C57962] border-[#ffc1ae] border-2 lato"
            />
            <select
              name=""
              id=""
              className="w-full py-2 rounded-full px-3 mb-3 outline-[#C57962] border-[#ffc1ae] border-2 lato"
            >
              <option value="Choose Country">Choose Country</option>
              {country.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </form>
          <div className="flex items-start w-full">
            <input type="checkbox" className="mt-[6px] mr-1" />
            <p className="text-center mb-5 lato">
              I agree that I am over 18, have read the Terms of Use and consent
              to this information being used by MingleWise to contact me about
              membership.
            </p>
          </div>
        </div>
        <div className="w-full text-center">
          <button className="bg-[#C57962] hover:bg-[#a56653] py-2 font-bold text-white w-[60%] rounded-full lato">
            SUBMIT
          </button>
        </div>
        <p className="lato my-6 text-center">
          “Let us know on hello@minglewise.com if you hit any road bumps along
          the way.”
        </p>
      </div>
    </div>
  );
};

export default SignUpForNewsLetter;
