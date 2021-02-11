# E-Commerce

## Features

|  #  | Features                  | Description                                                                                                                                             |
| :-: | ------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  1  | .htaccess                 | Prevent SPA refresh issue                                                                                                                               |
|  2  | .env                      | Configuration files for development & Production. Used Extension [app-extension-dotenv](https://github.com/quasarframework/app-extension-dotenv)        |
|  3  | Axios                     | [Axios](https://github.com/axios/axios) for fetch request, Interceptors is used to handle token expairy.                                                |
|  4  | Vue Store                 | Vue Store is used to save cart information                                                                                                              |
|  5  | Persistance State         | [Persistance State](https://github.com/robinvdvleuten/vuex-persistedstate#readme) LocalStorage used to save state                                       |
|  6  | JWT Passport Strategy     | [passport.js](http://www.passportjs.org/packages/passport-jwt/) is used to authenticate user.                                                           |
|  7  | Google Analytics          | [Google Analytics](https://analytics.google.com/) added script and events                                                                               |
|  8  | Payment Gateway           | [Instamojo](https://www.instamojo.com) Indian Payment Gateway which accept National and International Debit, Credit cards, UPI                          |
|  9  | Allow payment as Guest    | User can shop and make payment without login or Signup ie as a guest                                                                                    |
| 10  | Multiple Shipping Address | System allow to save multiple Shiping address to save for future use                                                                                    |
| 11  | Filter product            | It auto detect the Unit and Price range and accordingly create filter options with a count to know how many items are listed in that particular option. |
| 12  | Mini Cart                 | Mini Cart feature is available                                                                                                                          |
| 13  | User Profile              | User can update his profile, Avatar, Change Password.                                                                                                   |
| 14  | Board                     | [Trello Style Board](https://github.com/prashantnirgun/quasar-shop/projects/1) to get more info about the project                                       |
| 15  | Front Page Slider         | Two sliders Hot Deal, New Arrival managed by backend Portal just tag the product and slider will get updated accordingly.                               |
| 16  | Tax Summary Display       | GST Taxes summary to displayed clearly                                                                                                                  |
| 17  | Shipping Charges          | Shipping Charges Policy is not yet implemented                                                                                                          |
| 18  | Ordered History           | Not yet build Order History                                                                                                                             |
| 19  | Order Tracking            | Order Tracking feature is not yet Started                                                                                                               |
| 20  | Repeat Order              | Repeat order with some changes to avoid time wastages in adding product to cart                                                                         |
| 21  | Invoice PDF               | Invoice PDF Download is not yet Build                                                                                                                   |
| 22  | Multiple Rate List        | Feature different pricelist for different category of user's                                                                                            |

## Technology Stack

- Framework : Quasar.js, Axios
- UI : [Quasar](https://quasar.dev/introduction-to-quasar), [SASS](https://sass-lang.com/), [Font Awesome](https://fontawesome.com/icons?d=gallery), [Google Material](https://material.io/resources/icons/?style=baseline)
- Linter : ESLint
- Backend : Node.js
- Database : Mysql
- ORM : Custom
- Version Control : Git

## General Information

1. Shipped with latest version of Quasar, Eslint, Prettier. (if you want to you view Eslint, Prettier files need to check initial commit then after the file will put in .gitignore).
2. Seprate Search bar component as its important, make it round border and clear icon. It will prove a game changer component so I pull out from layout.
3. Pincode section is shifted to toolbar with dialog.
4. Some files are splited and moved pleaes read the table above for more information.
5. Use of .env file for site settings such as store name & url to store vaiable such as site_name, default username, password. env.development & .env.production two seprate files are created. Thanks to [hawkeye64](https://github.com/quasarframework/app-extension-dotenv) for such nice extension.
