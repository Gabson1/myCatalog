# MyCatalog
Author: Gabriel Ayham Semaan 
<br />
Supervisor: Samer Murad

Description: MyCatalog is a Value Asset Manager. It allows its users to
store valuable assets, like gold or watches, in tables. In addition, MyCatalog
boasts a number of features & functionalities that reduce redundant tasks and
gives the user a better way to manage their assets.
Users can, for example, add an integration that fetches the recent price for
gold. Another example would be, a user can receive SMS or Email notifications 
when the price of their gold drops by 10%.

See a list of all available features:
- api and integrations
- Notifications 
- Sharing options
- Autocomplete 
- Net worth of assets
- Daily/weekly/monthly net changes
- Watchlist
- Reminder
- ...

See a list of asset types MyCatalog supports:
- Watches
- Gold
- Silver
- Stocks
- Real estate
- Cryptocurrency

<hr />

### Scripts


### Enforcing rules


### Folder Structure
#### Client: React app
#### Server: Node app

### Bundling with webpack
Webpack allows, what I call, smart-bundling. 
What is webpack? Basically it bundles all your assets and files into bundles.

See below a list of basic configuration options:
- ``entry`` name of the top-level file or set of files that we want to include in our build, can be a single file or an array of files. In our build, we only pass in our main file
- ``output`` an object containing your output configuration. In our build, we only specify the filename key (bundle.js) for the name of the file we want Webpack to build.
- ``rules`` a list of specified rules...
- ``plugins`` a list of specified plugins...


### Environment variables


### Database managment
Database management is achieved through knexjs - postgresql.

### API & Integrations
How does API searching work, how does the API find the exact match to the asset
it is searching for?
- Unique search for each asset class

### Translation
Translation between languages is managed through i18n.
