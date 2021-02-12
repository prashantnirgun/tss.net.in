# Employees Co Operative Credit Society

Online Banking portal for Staff Co Operative Credit Society. Handle multiple Loan & Deposite scheme, Passbook, Auto SMS reply for loan queries, General Accounting.

Site is divided into two seprate parts one is for member and other is for office staff and directors which is admin site has right to change data. So even member site is compromised all request for change or delete of data is automatically droped.

## Technical Features

1. SSL Enabled.
1. CORS Enabled.
1. Hierarchical model–view–controller (HMVC)
1. REST API standards is maintain.
1. Two Factor Authentication (TFA) with local startegy.
1. Long Code call back SMS
1. Datatable for easy data navigation.
1. Protected Route.
1. Access Contro List (ACL) user defined by administrator user.

## Functional Features

1. Auto Backup at day end.
1. Member can login to system and can view his loan, deposite and personal information no need to visit branch for such type of queries.
1. Member portal has read only Any request from this portal is forced for read only all other request are droped.
1. Office staff & Director login admin portal used to make it more secured.
1. Two Factor Authentication (TFA) local startegy for token expairy is 5 min. 3 failed attempt block user.
1. Auto reply SMS send GET BAL to 9XXXXXX and it will return your loan balance.
1. Password Rest, Account Block request auto handle by auto reply SMS service.
1. Member personal, nominee, guarantor and other relavent information is maintain.
1. Scheme Module facilitates to create multiple loan or deposit scheme.
1. Salary decution is calculated and list was send to respective accounts department for deduction.
1. Import of Excel from Accounts department to distribute amounts to respective heads is maintain we still can made changes as per our requirements.
1. Installment of Loan, Shares, Deposites can be restructure or can be pause for any month all can be done.
1. Pass Book printing facility is available.
1. Dividend is calcualted and export to Excel file for bank transfer.
1. Access Contro List (ACL) is maintain for each user, group, module and permission.

## Technology Stack

- **Framework & Libraries**: [PHP](https://www.php.net/), [Codeigniter](https://www.codeigniter.com/), [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Axios](https://github.com/axios/axios), [Datatable](https://datatables.net/), [PHP Composer](https://getcomposer.org/), [Guzzle](https://github.com/guzzle/guzzle)
- **UI Framework**: [Bootstrap](https://getbootstrap.com/), [Admin Theme](https://adminlte.io/themes/AdminLTE/index2.html), [Frontend Theme](https://themeforest.net/item/renovation-construction-company-theme/9014411), [Font Awesome](https://fontawesome.com/icons?d=gallery)
- **Database** : Mysql
- **ORM** : Custom

## Screen Shots Employee Portal

### Login

<img src="/images/credit-society/login.png" width="45%"></img>

### Member Information

<img src="/images/credit-society/member-portal/info/member-info.png" width="45%"></img>
<img src="/images/credit-society/member-portal/info/member-bank.png" width="45%"></img>
<img src="/images/credit-society/member-portal/info/member-nominee.png" width="45%"></img>

### Member Loan

<img src="/images/credit-society/member-portal/loan/loan.png" width="45%"></img>
<img src="/images/credit-society/member-portal/loan/loan-detail.png" width="45%"></img>
<img src="/images/credit-society/member-portal/loan/loan-installment.png" width="45%"></img>
<img src="/images/credit-society/member-portal/loan/loan-outstanding.png" width="45%"></img>

### Memeber Shares & Deposit

<img src="/images/credit-society/member-portal/deposit.png" width="45%"></img>

## Screen Shots Office Staff Portal

### Login

<img src="/images/credit-society/login.png" width="45%"></img>

### Managing Committee

<img src="/images/credit-society/staff-portal/committee.png" width="45%"></img>

### Scheme

<img src="/images/credit-society/staff-portal/scheme/scheme.png" width="45%"></img>
<img src="/images/credit-society/staff-portal/scheme/scheme-gl.png" width="45%"></img>

### Loan

<img src="/images/credit-society/staff-portal/loan/loan-register.png" width="45%"></img>
<img src="/images/credit-society/staff-portal/loan/loan-details.png" width="45%"></img>
<img src="/images/credit-society/staff-portal/loan/loan-installment.png" width="45%"></img>
<img src="/images/credit-society/staff-portal/loan/loan-outstanding.png" width="45%"></img>

### Shares & Deposit

<img src="/images/credit-society/staff-portal/deposit/deposit.png" width="45%"></img>
<img src="/images/credit-society/staff-portal/deposit/deposit-installment.png" width="45%"></img>

### Passbook

<img src="/images/credit-society/staff-portal/passbook/passbook-front.jpg" width="45%"></img>
<img src="/images/credit-society/staff-portal/passbook/passbook-details.jpg" width="45%"></img>
