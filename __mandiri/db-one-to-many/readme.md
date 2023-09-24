## Script Penting

**sett**

- npm i express pg ejs dotenv
- npm i sequelize
- npm i nodemon sequelize-cli --save-dev (devDependencies)
- buat folder (Controllers, Views, Routes)

**db**

- npx sequelize-cli init (setting awal db)
- npx sequelize-cli db:create

## sequilize bash (One to many)

npx sequelize-cli model:generate --name lecturer --attributes name:string,matkul:string,age:integer,city:string,image:string
npx sequelize-cli model:generate --name student --attributes name:string,major:string,semester:integer,city:string,image:string

- | file tambahan:

- .env
- .gitignore
- app.js (defaults, penamaan bebas)
- .readme.md (optional)

---

{
app.use(express.json());
app.use(express.urlencoded(), { extended: true });
} (digunakan untuk convert input menjadi JSON)

npx = node package yang sudah diinstall di package json
