package project.hooks;

import project.androidDriver.AndroidDriverInstance;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class AndroidDriverHooks {

    @Before()
    public void initializeWebdriver() {
        AndroidDriverInstance.initialize();
    }

    @After()
    public void quitWebdriver(Scenario scenario) {
        if (scenario.isFailed()){
            scenario.embed(((TakesScreenshot) AndroidDriverInstance.androidDriver).getScreenshotAs(OutputType.BYTES), "image/png");
            scenario.write("scenario Fail");
        }
        AndroidDriverInstance.quit();
    }

}
