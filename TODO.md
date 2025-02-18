## FUNCTIONS REQUIRED

- Hardware - should be compatible to ff.
- [ ] Cash drawers
- [ ] Barcode scanners
- [ ] Receipt printers
- [ ] Customer displays
- [ ] Payment terminals
- [ ] Touchscreen monitors

- Customer
- [ ] Customer Relationship Management (CRM) - Storing customer information, managing loyalty programs.
- [ ] CRM Rerporting & Analytics - Generating sales, reports, analyzing customer behavior, tracking key performance indicators (KPIs)

- Inventory
- [ ] Real-time Tracking - monitor stock levels accurately to prevent stockouts and overstocking
- [ ] Purchase order management - generate and track purchase orders from suupliers
- [ ] Low stock alerts - receive notifications when inventory is running low.
- [ ] Barcode scanning - efficiently scan products for quick checkout and inventory updates.

- Reporting and Analytics
- [ ] Sales reports - track sales trends, identify top-selling items, analyze sales performance by employee or time period.
- [ ] Inventory reports - monitor inventory levels, track costs of goods sold, identify slow-moving items
- [ ] Customer reports - analyze customer behavior, identify repeat customers, and undersantd customer demographics.

- Employee management
- [ ] Employee scheduling - create and manage employee schedules.
- [ ] Employee permissions - control access to different feature based on employee roles.
- [ ] Time tracking - track employee hours for payroll purposes.

- Omnichannel
- [ ] Online ordering - Integrate with your online store or third-party platforms for seamless online ordering.
- [ ] Moble POS - accept payments and process orders using a mobile device.
- [ ] Social media integration - sell products directly through social media platforms.

- Accounting
- [ ] Integrate with accounting software - seamlessly sinc sales data with accounting software for accurate financial reporting.

- Industry dynamic
- [ ] Restaurant
- [ ] Retail
- [ ] Services (e.g. Salon)
- [ ] Hotel

- [x] Has input validators on Backend & Frontend
- Branching
- [ ] The Cloud POS should be able to handle multiple `BRANCHES`. Each branch should have a different database.
- [ ] The POS should have dynamic access rights.

# Notification

- [ ] ths POS should automatically notice through email the client 15 days before the termination of the subscription. on the last 10 days of the subscription, the POS should notice the client each day until the day of termination.
- remarks: this functionality requires email sending automation, test the NODE MAILER

# NETWORK

- [x] Can detect network, if the user has internet access or not

# OTHER

- [ ] Change password
- [ ] Settings is a one-to-one, each user/interface has its own settings.
- [ ] Employee performance metrics

# AUTH

- [ ] Set auth credentials to cookies
- [ ] Set access rights as cookies
- [ ] Set settings as local storage

# SALES PAGE

- [ ] Update sales line form to add item on an array instead to database, would only save when click the save-button, else will on stored in an array if not save the data would be lost.
- [ ] Create a warning dialog on leave of the page when the SalesLineTablesArray has contents.
- [ ] On discount would update the contents of the SalesLineTablesArray with discount contents
- [ ] All data would be save to the database on tender of the sales. Bulk addrecords.

```
    SalesLineItem is an SalesLineTables
        [
            {Item:1}...
        ]
```
