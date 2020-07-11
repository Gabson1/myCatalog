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
- Wine
----- later versions -----
- Real estate
- Stocks
- Cryptocurrency

<hr />

### Scripts


### Enforcing rules


### Folder Structure
#### Client: React app
#### Server: Node/Express app

### Bundling with webpack
Here's a really good link: [What is Webpack by Ciel](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)

Webpack is a module builder. This is important to understand, as Webpack does not run during your page, it runs during your development.
Webpack is a tool wherein you use a configuration to explain to the builder how to load specific things. 
You describe to Webpack how to load *.js files, or how it should look at .scss files, etc. 
Then, when you run it, it goes into your entry point and walks up and down your program and figures out exactly what it needs, in what order it needs it, and what each piece depends on. 
It will then create bundles — as few as possible, as optimized as possible, that you include as the scripts in your application.

See below a list of basic configuration options:
- `entry` name of the top-level file or set of files that we want to include in our build. 
          It can be a single file or an array of files. 
          In our build, we only pass in our main file
- `output` an object containing your output configuration. 
           In our build, we only specify the filename key (bundle.js) for the name of the file we want Webpack to build
- `rules` wrapped within `modules`, an array of rules are defined within. 
          Within rules, you defined how webpack should handle each file type, it takes 2 required arguments. 
          `test`: what file webpack should look for
          `use`: what loader webpack should use
- `plugins` are like objects ( with an apply property ) that can be instantiated. 
            It allows you to hook into the entire webpack lifecycle of events.
            Plugins add additional functionality to Compilation( optimized bundle modules ). 
            Loaders are only applied on a profile basis, but you can access a whole bundle with plugins.
- `loaders` enable us to bundle static assets. 
            Loaders tell webpack how to interpret and translate files. 
            The transformation happens on a per-file basis before adding to the dependency graph.

See the following link for more options: [Webpack Documentation](https://webpack.js.org/concepts/) 

It's important to differentiate run and dev configuration. 
What is webpack supposed to do for the following?
- `run`: What happens when I first run my app.
- `dev`: What happens when my app is already running.

### Environment variables
What is this `.env` file? [Dotenv](https://www.npmjs.com/package/dotenv) is what manages this file.
For now all environment variables, that is stuff like database password, database hostname, external URLs, secrets, etc. will be stored under the `.env` file under the project root directory.
It allows us to define environment variables persistently instead of giving them on each command call. These are attached to the process.env object in Node.

The variables under the `.env` file are that of a key-value relationship.
DB_PASS="MY_PASSWORD"

What happens later? Where are environment variables stored later? Don't know yet, maybe in a DB... who knows.

### Database managment
Database management is achieved through knexjs - postgresql - graphql.

### API & Integrations
How does API searching work, how does the API find the exact match to the asset
it is searching for?
- Unique search for each asset class

### Translation
Translation between languages is managed through i18n.
