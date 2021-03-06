// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TestFields2', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('TestFields2', async function() {
    await driver.get("http://localhost:8080/SeleniumWebServerTest/index.html")
    await driver.setRect(1085, 968)
    await driver.findElement(By.name("nombre")).click()
    await driver.findElement(By.name("nombre")).sendKeys("Jezreel arturo")
    await driver.findElement(By.name("apellido")).sendKeys("asdfasdf")
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.linkText("Third page")).click()
    vars["win7916"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win7916"])
    await driver.findElement(By.linkText("Second page")).click()
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("asdfasf")
    await driver.findElement(By.id("lastname")).sendKeys("asdfadf")
  })
})
