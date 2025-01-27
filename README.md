[![Netlify Status](https://api.netlify.com/api/v1/badges/087beca0-a3e6-4bab-8da5-4464f88455bb/deploy-status)](https://app.netlify.com/sites/vlabs-pupous/deploys)

# Virtual Lab (VLab) Website
## For PUP Open University System

This Website is made in partial fulfillment of the requirements of my subject,
Logic Circuits and Design (CMPE 304).

Made with CSS and Javascript, using the Pug.js Template Engine and Express.

### Dependencies
- Make sure to install the following dependencies:
```shell
npm init -y
npm i express
npm i cookie-parser
npm i debug
npm i http-errors
npm i morgan
npm i pug
```
- (Optional) Should you be hosting this not yourself and on Netlify like I did, pug *will* not work. Consider adding these too:
```shell
npm i netlify-lambda
npm i pug-cli
```
- **NOTE:** This *will* actually fumble a little with your routing. Make sure to check in on that after deployment (Netlify sees your routes differently).

### Running the Code:
```shell
npm start
```

### Licenses And Atrribution
- This Website is Licensed with the APGL 3.0 License, and its contents are under CC-BY-NC-SA 4.0.
- Content is by the Ministry of Education (India) at [Virtual Lab (VLab)](https://www.vlab.co.in/).
- I am not affiliated, in any way, with the aforementioned government nor with the Virtual Labs Team, the owners of the site.
