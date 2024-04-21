import puppeteer from 'puppeteer';
import fs from 'fs';

const scrapeKitas = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.kita.de/kindergaerten');

    // Wait for the data to load
    await page.waitForSelector('#locations > div.result > div.profile_listing > div:nth-child(1) > div.media-body');

    // Extract data
    const kitas = await page.evaluate(() => {
        const kitasArray = [];
        const kitasElements = document.querySelectorAll('#locations > div.result > div.profile_listing > div:nth-child(1) > div.media-body');
        kitasElements.forEach(kitaElement => {
            const name = kitaElement.querySelector('h3').innerText;
            const addressElement = kitaElement.querySelector('div.col-sm-10 > p > small').innerText;
            const [street, postCode, city] = addressElement.split(',');
            kitasArray.push({ name, street, postCode, city });
        });
        return kitasArray;
    });

    // Close the browser
    await browser.close();

    // Save data to JSON file
    fs.writeFileSync('./lib/data/kitas.json', JSON.stringify(kitas, null, 2));
};

// Run the scraping function
scrapeKitas().then(() => console.log('Scraping complete!'));
