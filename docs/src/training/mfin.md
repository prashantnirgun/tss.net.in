# MFIN Workflow 

Every client / customer is majorly divided into company type. Each company has minimum 1 branch which is HO (Head Office).

## Company Type
- Micro Finanance
- Non Banking

## Parties Involved 
- Member : who take loans and deposit to us are refered as Member in the software. 
There is one more sub type Nominal Member who dont have account with us but only has deposit with us.
- Agent : Collection agent who collect daily receipt from each member and deposit the cash into branch
- Employee : Staff of the Company
- User : Who can access the web or mobile application. You can grant access to Employee, Agent, Member depend on your company policy.

## Member Ledgers :
- Party ledgers are not maintain you dont need to create Ledgers for each party
- Party will be treated as sub ledgers
- In final account we will not have a big list only account head and accumulated figure
- JV Example Loan Disbursement :
-- Date : 01-01-2026, Voucher Type : Payment, Sub Ledger : Party A, Loan Id : 101
-- HDFC Bank A/c Dr 1,00,000
-- To &lt;Loan Scheme&gt; Principal A/c Cr 1,00,000
-- (Being Loan disburse for party A Loan Id : 101)
- Party Personal Ledger, Loan statement can be generated using Sub Ledger & Loan ID

## Each Branch Setting :
- Collection Agent : So we will have Agent List and each agent will be assigned to Member

## What is batch ?
- Intrest calculation on each outstanding loan on particular date.
- Batch can be daily or Monthly depend up
- If you open the branch it will create the intrest JV for each loan.
- Just like Loan Interest, we can have Deposit interest JV Batch.
- Update the interest and outstanding totals for that loan
- It does it automatically no manual entries are required
- You can run reopen the back dated batch and execute it will recalculated the interest and update or create the JV.

## Intrest Calculation :
- Monthly 1 st day of the month.
- We need to run the batch manually.
- If you want to re calculate the interest for individual member you don't need to reopen batch there is a button 
that will recalculate interest entries from start date.
- Similar option you will find in Deposit.

## Scheme :
- You can create Scheme for each type of loan, deposit
- There you can setup rate of interes, Min and Max loan amount, Repayment type [Prin + Int, Int]
- You can set Ledgers associated to Principal, Interest handling

## Loan Application :
- Its company policy to go with Loan Appliction received, and then in monthly meeting they santion the loans. 
Then the loan application will be converted to Loan Register.
- But in Micro Finanance you can skip the Loan Appliction and Directly Create the Loan entries into Loan Register.
- loan Appliction and Loan Register will have some common fields Such as Scheme, Int type, Inst Frequency, Int Rate

## Loan Register
- Calculator Icon to recalculate intrest from start, If you have made any mistake wrongly credited receipt to another member
and batch processsing is done and now you corrected the entry so that outstanding and interest calculation needs to rework.
- Tabpage : We have following tabpages to get more information
- Installment : We need to create its Installment (EMI), this can be change on special approved request.
- Transaction History : Loan Transactions entries. Its view only.
- EMI Calculator : To calculate EMI details by various parameters.

## Vouchers Type :
- To Create or Update in voucher type you need to go to Master / Voucher Type
- Voucher can have multiple Preset and if they are present it will ask to choose one.
- There is a component Tab Page that decide which UI to show and its structure
- Vouchers as majorly following types. 
- [Receipt, Payment, JV, Contra, Sales, Purhcase, Sales Return, Purchase Return]
- In our case we additionaly create something following 
- Loan Disbursement : Category (Base Voucher Type) : Payment. We need to maintain seprate voucher series for loan disbursement, 
dont mix with other payment enties like Electricity Bill.
- Interst Calculation : Category (Base Voucher Type) : JV. Same as above

## Voucher Preset :
- Its similar to Tally Voucher Class.
- There should be atlest one voucher Preset present for each Voucher class.
- Vouchers Preset Create or Update you need to go to Master / Voucher Preset
- Nothing but an we can include or exclude Account Group or Leders in that particular voucher type.
- We can set Numbering Policy, starting no, reset Interval.
- We can set Taxes Ledgers and its percentage, mehtod of calculation, round up behaviour.
- Note : Options Colletion Agent, Member will decide Receipt Voucher respective fields will be shown.
- When we need pass loan, deposit entries we need additional column such as Member, Agent, Loan.
- We dont want this column should be shown when we are making electricity bill payment voucher.
- In our case we additionaly create something following. 
- Collection : vocher Type = Receipt, Member = True, Agent = False
- Collection : vocher Type = Payment, Member = True, Agent = False
- Collection : vocher Type = JV, Member = True, Agent = False
- We can set Prefix and Suffix for voucher numbering like prefix : OL, suffix : 26-27 so on display it will show OL/101/26-27

## Tabpage Handling UI :
- First page is dedicated to entity list, 
- Pagination : software may contain 1,00,000 rows so at present it will only fetch 30 rows by default, 
but you have page navigation on bottom to navigate between pages.
- Single Selection : We have first column which contain checkbox to select. 
- We need to first select the checkbox and can perform action Like Update, Delete, Print
- Note : Before moving between other tab pages we need select the row by selecting the checkbox.
- Let say Member Module we have Member|Nominee|Bank Details|Guarantor|documents tab pages.
- To see the Nominee of particular member we need to first select the Member from Member tab by clicking checkbox before that member.
- Same process is applicable for other tabs.
- Other Tabs may contain the Checkbox and Button behaviour to perform the actions like Edit, Delete

## Excel Import 