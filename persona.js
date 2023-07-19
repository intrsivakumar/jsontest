
getPersona = email => {

    if(!email) {
        return {error: "Email not found"}
    }

    if(email.includes("student")) {
        return json.student
    }
    if(email.includes("professional")) {
        return json.professional
    }
    if(email.includes("homeMaker")) {
        return json.homeMaker
    }
    if(email.includes("seniorCitizen")) {
        return json.seniorCitizen
    }
    if(email.includes("sme")) {
        return json.sme
    }
    if(email.includes("corporate")) {
        return json.corporate
    } else {
        return {error: "Email not found"}
    }
}
module.exports = { getPersona }


const json = {
    "base": {
        "menu": [
            "Deposit",
            "Cards",
            "Loan",
            "Insurance",
            "Demat account",
            "Account",
            "E-shop"
        ],
        "banner": "",
        "quickAccess": [
            "Acc overview",
            "Scan and pay",
            "Recharge",
            "Loan and card offers",
            "Demat",
            "Acc overview",
            "Shop",
            "Funds transfer",
            "Account Statement",
            "FD/RD",
            "Book tickets"
        ],
        "pages": [
            {
                "pageName": "Deposit",
                "components": [
                    "RD",
                    "FD"
                ]
            },
            {
                "pageName": "Cards",
                "components": [
                    "Credit card",
                    "Debit card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Business loan",
                    "Personal loan",
                    "Educational loan",
                    "Vehicle loan",
                    "Gold loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Health Insurance",
                    "Vehicle Insurance",
                    "Term Insurance",
                    "Property Insurance",
                    "Travel Insurance"
                ]
            },
            {
                "pageName": "Demat account",
                "components": [
                    "Mutual fund",
                    "Trading"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Savings account",
                    "Current account",
                    "Corporate account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    },
    "student": {
         "userData": [
            {
                "name": "Ram",
                "accountNumber": "2212",
                "amountInAccount": "5,470",
                "userProfile":"userProfile1"
            }
        ],
        "appThemes": [
            {
                "themeName": "theme1",
                "subThemeName": "subTheme1",
                "themePreviewImage": "ImagePath"
            }
        ],
        "menus": [
            "Deposit",
            "Cards",
            "Loan",
            "Insurance",
            "Account",
            "E-Shop"
        ],
        "banner": "banner1",
        "quickAccess": [
            "Account overview",
            "Scan and pay",
            "Recharge"
        ],
        "pages": [
            {
                "pageName": "Deposit",
                "components": [
                    "RD"
                ]
            },
            {
                "pageName": "Cards",
                "components": [
                    "Debit Card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Educational Loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Health Insurance",
                    "Travel Insurance"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Savings Account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    },
    "professional": {
        "personName": "Professional",
        "userData": [
            {
                "name": "Farook",
                "accountNumber": "2212",
                "amountInAccount": "14,470",
                "userProfile":"userProfile1"
            }
        ],
        "appThemes": [
            {
                "themeName": "theme3",
                "subThemeName":"subTheme3",
                "themePreviewImage": "ImagePath"
            }
        ],
        "banner": "banner3",
        "quickAccess": [
            "Scan and pay",
            "Loan and card offers",
            "Demat"
        ],
        "menus": [
            "Deposit",
            "Cards",
            "Loan",
            "Insurance",
            "Demat account",
            "Account",
            "E-Shop"
        ],
        "pages": [
            {
                "pageName": "Deposit",
                "components": [
                    "FD"
                ]
            },
            {
                "pageName": "Cards",
                "components": [
                    "Credit Card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Personal Loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Health Insurance"
                ]
            },
            {
                "pageName": "Demat account",
                "components": [
                    "Mutual Fund"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Corporate Account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    },
    "homeMaker": {
        "personName": "Home maker",
        "appThemes": [
            {
                "themeName": "theme2",
                "subThemeName": "subTheme2",
                "themePreviewImage": "ImagePath"
            }
        ],
        "userData": [
            {
                "name": "Swetha",
                "accountNumber": "2212",
                "amountInAccount": "5,470",
                "userProfile":"userProfile1"
            }
        ],
        "banner": "banner2",
        "quickAccess": [
            "Account overview",
            "Scan and pay",
            "Shop"
        ],
        "menus": [
            "Deposit",
            "Cards",
            "Loan",
            "Insurance",
            "Account",
            "E-Shop"
        ],
        "pages": [
            {
                "pageName": "Deposit",
                "components": [
                    "RD",
                    "FD"
                ]
            },
            {
                "pageName": "Cards",
                "components": [
                    "Debit Card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Gold Loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Term Insurance"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Savings Account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    },
    "seniorCitizen": {
        "personName": "Senior citizen",
        "appThemes": [
            {
                "themeName": "theme5",
                "subThemeName": "subTheme5",
                "themePreviewImage": "ImagePath"
            }
        ],
        "userData": [
            {
                "name": "Gopal",
                "accountNumber": "2212",
                "amountInAccount": "23,470",
                "userProfile":"userProfile1"
            }
        ],
        "banner": "banner5",
        "quickAccess": [
            "Funds Transfer",
            "Account Statement",
            "FD/RD"
        ],
        "menus": [
            "Deposit",
            "Cards",
            "Insurance",
            "Demat account",
            "Account",
            "E-Shop"
        ],
        "pages": [
            {
                "pageName": "Deposit",
                "components": [
                    "FD",
                    "RD"
                ]
            },
            {
                "pageName": "Cards",
                "components": [
                    "Debit Card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Gold Loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Health Insurance",
                    "Term Insurance"
                ]
            },
            {
                "pageName": "Demat",
                "components": [
                    "Mutual Fund"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Savings Account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    },
    "sme":  {
        "personName": "SME",
        "userData": [
            {
                "name": "Ashok",
                "accountNumber": "2212",
                "amountInAccount": "26,470",
                "userProfile":"userProfile1"
            }
        ],
        "appThemes": [
            {
                "themeName": "theme6",
                "subThemeName": "subTheme6",
                "themePreviewImage": "ImagePath" 
            }
        ],
        "banner": "banner6",
        "quickAccess": [
            "Funds Transfer",
            "Account Statement",
            "Loan and card offers"
        ],
        "menus": [
            "Cards",
            "Loan",
            "Insurance",
            "Account",
            "E-Shop"
        ],
        "pages": [
            {
                "pageName": "Cards",
                "components": [
                    "Credit Card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Business Loan",
                    "Vehicle Loan"
                ]
            }, 
            {
                "pageName": "Insurance",
                "components": [
                    "Travel Insurance",
                    "Property Insurance"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Current Account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    },
    "corporate": {
        "personName": "Corporate",
        "userData": [
            {
                "name": "Rishi",
                "accountNumber": "2212",
                "amountInAccount": "1,89,470",
                "userProfile":"userProfile1"
            }
        ],
        "appThemes": [
            {
                "themeName": "Theme 4",
                "subThemeName": "subTheme4",
                "themePreviewImage": "ImagePath"
            }
        ],
        "banner": "banner4",
        "quickAccess": [
            "Funds Transfer",
            "Loan and card offers",
            "Book tickets"
        ],
        "menus": [
            "Cards",
            "Loan",
            "Insurance",
            "Account",
            "E-Shop"
        ],
        "pages": [
            {
                "pageName": "Cards",
                "components": [
                    "Credit Card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Business Loan",
                    "Vehicle Loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Travel Insurance",
                    "Property Insurance"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Corporate Account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    }
}

const newJson = {
    "student": {
        "userData": [
            {
                "name": "Farook",
                "accountNumber": "2215",
                "amountInAccount": "23,470",
                "userProfile": "userProfile1"
            }
        ],
        "appThemes": [
            {
                "themeName": "ConstData.theme1",
                "subThemeName": "ConstData.subTheme1",
                "themePreviewImage": "ImagePath"
            }
        ],
        "banner": "banner2",
        "quickAccess": [
            "Scan and pay",
            "Loan and card offers",
            "Demat"
        ],
        "menus": [
            "Deposit",
            "Cards",
            "Loan",
            "Insurance",
            "Demat account",
            "Account",
            "E-Shop"
        ],
        "pages": [
            {
                "pageName": "Deposit",
                "components": [
                    "FD"
                ]
            },
            {
                "pageName": "Cards",
                "components": [
                    "Credit card"
                ]
            },
            {
                "pageName": "Loan",
                "components": [
                    "Personal loan"
                ]
            },
            {
                "pageName": "Insurance",
                "components": [
                    "Health insurance"
                ]
            },
            {
                "pageName": "Demat account",
                "components": [
                    "Mutual fund"
                ]
            },
            {
                "pageName": "Account",
                "components": [
                    "Current account"
                ]
            },
            {
                "pageName": "E-Shop",
                "components": [
                    "Shop"
                ]
            }
        ]
    }
}
