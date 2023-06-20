getPersona = () => {
    return json
}
module.exports = { getPersona }


const json = {
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
