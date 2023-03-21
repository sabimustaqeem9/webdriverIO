/*describe("Test product list on Home Page", async () =>{

    it("click on all products link", async () =>{
        browser.url('https://webdriver.io/docs/selectors');
        browser.maximizeWindow();
        browser.pause(3000);
        //const allProductsDropdown = await $('//span[contains(text(),\'All Products\')]');
        const allProductsDropdown = await $('//body/div[@id="__docusaurus"]/nav[1]/div[1]/div[1]/a[3]');
        allProductsDropdown.waitForExist({ timeout: 5000 });
        expect(allProductsDropdown).toBeClickable();
        allProductsDropdown.click()
        browser.pause(10000);
        const searchbtn = await $('//body/div[@id="__docusaurus"]/nav[1]/div[1]/div[1]/a[5]');
        searchbtn.waitForExist({ timeout: 5000 });
        expect(searchbtn).toBeClickable();
        searchbtn.click();
        browser.pause(20000);
        //await allProductsDropdown.click();

    });
    /*it("click on tata aig medicare", async () =>{
        const tataAIGmedicare = await $('//header/div[1]/div[1]/section[1]/aside[1]/nav[1]/aside[1]/section[3]/article[1]/a[1]');
        tataAIGmedicare.waitForDisplayed();
        await expect(tataAIGmedicare).toBeDisplayed();
        await tataAIGmedicare.click();
        browser.pause(3000); 

    });

    it("should validate tata aig medicare page", async () =>{
        const tataAIGmedicarePage = await $('//h2[contains(text(),\'Tata AIG MediCare - The Care You Need\')]');
        tataAIGmedicarePage.waitForDisplayed();
        await expect(tataAIGmedicarePage).toBeDisplayed();
        browser.pause(3000); 

    });

    it("click on self type", async () =>{
        const tataAIGmedicareSelf = await $('//body/div[@id=\'__next\']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]/img[1]');
        tataAIGmedicareSelf.waitForDisplayed();
        await expect(tataAIGmedicareSelf).toBeDisplayed();
        await tataAIGmedicareSelf.click();
        browser.pause(3000); 

    });*/

/*});

//browser.pause(20000);
        /*const motorInsurance = await $('.my-auto mb-md-3=Motor Insurance');
        await expect(motorInsurance).toHaveValue('Motor Insurance');
        const carInsurance = await $('.Header_linkClass__3fzcT Header_subLink__okgBC Header_subLinkClass__2c0jJ=Car Insurance');
        await expect(carInsurance).toHaveValue('Car Insurance');
        const bikeInsurance = await $('.Header_linkClass__3fzcT Header_subLink__okgBC Header_subLinkClass__2c0jJBike Insurance');
        await expect(bikeInsurance).toHaveValue('Bike Insurance');*/